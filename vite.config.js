import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import os from 'os';

function getLocalLanIp() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return '127.0.0.1';
}

// Built-in Local Wi-Fi Router Sync Relay (Phone <-> Closed-Lid Dell E5550 <-> HDMI TV)
function pitmasterWifiSyncPlugin() {
  let sharedState = {
    updatedAt: 0,
    menu: null,
    specials: null,
    schedule: null,
    announcements: null,
    tvBoardTheme: null
  };

  return {
    name: 'pitmaster-wifi-sync',
    configureServer(server) {
      server.middlewares.use('/__pit_sync', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method === 'GET') {
          res.end(
            JSON.stringify({
              ok: true,
              lanIp: getLocalLanIp(),
              port: server.config.server.port || 3000,
              state: sharedState
            })
          );
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const incoming = JSON.parse(body || '{}');
              sharedState = {
                ...sharedState,
                ...incoming,
                updatedAt: Date.now()
              };
              res.end(JSON.stringify({ ok: true, updatedAt: sharedState.updatedAt }));
            } catch (e) {
              res.statusCode = 400;
              res.end(JSON.stringify({ ok: false }));
            }
          });
          return;
        }

        res.statusCode = 405;
        res.end(JSON.stringify({ ok: false }));
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/TisdaleSouthernBBQ/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    pitmasterWifiSyncPlugin()
  ],
  server: {
    host: true,
    port: 3000,
    open: true
  }
});
