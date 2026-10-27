<#
.SYNOPSIS
  Tisdale's Southern BBQ — 1-Click "Closed-Lid Dell E5550" Pit Box Launcher
  1. Disables sleep when the Dell E5550 lid is closed (AC & Battery).
  2. Displays all active Wi-Fi / Hotspot IPv4 addresses (including Windows Mobile Hotspot 192.168.137.1).
  3. Starts the local Wi-Fi Phone-to-TV Sync Server on port 3000.
#>

Write-Host "=================================================================" -ForegroundColor Yellow
Write-Host " 🔥 TISDALE'S SOUTHERN BBQ — DELL E5550 CLOSED-LID PIT BOX RIG 🔥" -ForegroundColor Yellow
Write-Host "=================================================================" -ForegroundColor Yellow

# 1. Configure Windows Power Settings so closing the laptop lid does NOT sleep the PC
Write-Host "`n[1/3] Configuring Dell E5550 Lid-Close Policy -> 'DO NOTHING'..." -ForegroundColor Cyan
try {
    # SUB_BUTTONS = 4f971e89-eebd-4455-a8de-9e59040e7347, LIDACTION = 5ca83367-6e45-459f-a27b-476b1d01c936
    powercfg /setacvalueindex SCHEME_CURRENT 4f971e89-eebd-4455-a8de-9e59040e7347 5ca83367-6e45-459f-a27b-476b1d01c936 0
    powercfg /setdcvalueindex SCHEME_CURRENT 4f971e89-eebd-4455-a8de-9e59040e7347 5ca83367-6e45-459f-a27b-476b1d01c936 0
    powercfg /setactive SCHEME_CURRENT
    Write-Host "  ✅ Lid-Close Sleep DISABLED! You can safely close the Dell E5550 lid." -ForegroundColor Green
} catch {
    Write-Host "  ⚠️ Could not auto-set powercfg (run as Administrator if needed)." -ForegroundColor DarkYellow
}

# 2. Show Built-In Wi-Fi Hotspot instructions & active IP addresses
Write-Host "`n[2/3] Built-In Laptop Wi-Fi Billboard & Control Network:" -ForegroundColor Cyan
Write-Host "  • Tip: In Windows Settings -> Network & Internet -> Mobile Hotspot:" -ForegroundColor Gray
Write-Host "    Set Network Name (SSID) to:  🔥 Tisdale_BBQ_Smoked_Brisket" -ForegroundColor White
Write-Host "  • Active Local IPv4 Addresses on this Dell E5550:" -ForegroundColor Gray

Get-NetIPAddress -AddressFamily IPv4 | Where-Object {
    $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.254.*"
} | ForEach-Object {
    Write-Host ("    👉 Phone Controller URL: http://{0}:3000/#trailer-sim" -f $_.IPAddress) -ForegroundColor Green
    Write-Host ("    👉 1080p HDMI TV URL:    http://{0}:3000/?tv=1#tv-display" -f $_.IPAddress) -ForegroundColor Amber
}

# 3. Launch Vite Local Wi-Fi Sync Server
Write-Host "`n[3/3] Starting Live Phone-to-TV Sync Server on Port 3000..." -ForegroundColor Cyan
Set-Location -Path $PSScriptRoot
npm.cmd run dev
