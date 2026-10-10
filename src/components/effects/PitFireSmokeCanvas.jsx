import React, { useEffect, useRef } from 'react';
import { usePitmaster } from '../../context/PitmasterContext';

export default function PitFireSmokeCanvas() {
  const { isPitFxActive } = usePitmaster();
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!isPitFxActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // =========================================================================
    // 1. EMBERS & BURNING WOOD SPARKS
    // =========================================================================
    const emberCount = Math.min(Math.floor(width / 25), 60);
    const embers = Array.from({ length: emberCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: -(Math.random() * 1.2 + 0.4),
      speedX: (Math.random() - 0.5) * 0.6,
      oscillationSpeed: Math.random() * 0.02 + 0.005,
      oscillationDistance: Math.random() * 25 + 10,
      angle: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.7 + 0.3,
      maxOpacity: Math.random() * 0.6 + 0.4,
      hue: Math.random() > 0.4 ? (Math.random() > 0.5 ? 'amber' : 'orange') : 'crimson'
    }));

    // =========================================================================
    // 2. SMOLDERING HICKORY SMOKE DRIFTS
    // =========================================================================
    const smokePuffs = Array.from({ length: 6 }, (_, i) => ({
      x: (width / 5) * i + (Math.random() - 0.5) * 100,
      y: height - Math.random() * (height * 0.7),
      radius: Math.random() * 80 + 120,
      maxRadius: Math.random() * 160 + 260,
      speedY: -(Math.random() * 0.35 + 0.15),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.04 + 0.02,
      growthRate: Math.random() * 0.15 + 0.08
    }));

    let frameCount = 0;

    const render = () => {
      frameCount++;
      ctx.clearRect(0, 0, width, height);

      // A. Bottom Smoldering Coal Bed Glow (Breathing Pulse)
      const pulse = Math.sin(frameCount * 0.025) * 0.06 + 0.14;
      const coalGlow = ctx.createLinearGradient(0, height, 0, height - 180);
      coalGlow.addColorStop(0, `rgba(220, 55, 18, ${pulse * 1.5})`);
      coalGlow.addColorStop(0.35, `rgba(180, 45, 15, ${pulse * 0.7})`);
      coalGlow.addColorStop(1, 'rgba(18, 15, 14, 0)');
      ctx.fillStyle = coalGlow;
      ctx.fillRect(0, height - 180, width, 180);

      // B. Smoldering Hickory Smoke Clouds
      smokePuffs.forEach(smoke => {
        smoke.y += smoke.speedY;
        smoke.x += smoke.speedX;
        smoke.radius += smoke.growthRate;

        // Reset if reached top or grew too large
        if (smoke.y + smoke.radius < 0 || smoke.radius > smoke.maxRadius) {
          smoke.y = height + 40;
          smoke.x = Math.random() * width;
          smoke.radius = Math.random() * 60 + 90;
          smoke.opacity = Math.random() * 0.045 + 0.02;
        }

        const smokeGrad = ctx.createRadialGradient(
          smoke.x,
          smoke.y,
          0,
          smoke.x,
          smoke.y,
          smoke.radius
        );
        smokeGrad.addColorStop(0, `rgba(45, 32, 28, ${smoke.opacity})`);
        smokeGrad.addColorStop(0.6, `rgba(30, 22, 20, ${smoke.opacity * 0.5})`);
        smokeGrad.addColorStop(1, 'rgba(18, 15, 14, 0)');

        ctx.fillStyle = smokeGrad;
        ctx.beginPath();
        ctx.arc(smoke.x, smoke.y, smoke.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // C. Rising Embers & Glowing Sparks
      embers.forEach(ember => {
        ember.y += ember.speedY;
        ember.angle += ember.oscillationSpeed;
        ember.x += Math.sin(ember.angle) * 0.4 + ember.speedX;

        // Fade in near bottom, fade out near top
        const relativeY = ember.y / height;
        if (relativeY < 0.2) {
          ember.opacity = (relativeY / 0.2) * ember.maxOpacity;
        } else if (relativeY > 0.85) {
          ember.opacity = ((1 - relativeY) / 0.15) * ember.maxOpacity;
        }

        // Reset if past top or out of bounds
        if (ember.y < -10) {
          ember.y = height + Math.random() * 20;
          ember.x = Math.random() * width;
          ember.opacity = 0;
          ember.speedY = -(Math.random() * 1.2 + 0.4);
        }

        if (ember.opacity > 0.01) {
          // Inner Hot Core & Radiant Glow
          let coreColor = `rgba(255, 235, 180, ${ember.opacity})`;
          let glowColor = `rgba(255, 120, 30, ${ember.opacity * 0.7})`;

          if (ember.hue === 'amber') {
            glowColor = `rgba(245, 158, 11, ${ember.opacity * 0.8})`;
          } else if (ember.hue === 'crimson') {
            glowColor = `rgba(220, 38, 38, ${ember.opacity * 0.8})`;
            coreColor = `rgba(255, 160, 100, ${ember.opacity})`;
          }

          // Subtle Glow halo
          ctx.beginPath();
          ctx.arc(ember.x, ember.y, ember.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = glowColor;
          ctx.fill();

          // Intense Hot Core
          ctx.beginPath();
          ctx.arc(ember.x, ember.y, ember.size * 0.85, 0, Math.PI * 2);
          ctx.fillStyle = coreColor;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPitFxActive]);

  if (!isPitFxActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-85 transition-opacity duration-700"
      style={{
        mixBlendMode: 'screen',
        willChange: 'transform'
      }}
      aria-hidden="true"
    />
  );
}
