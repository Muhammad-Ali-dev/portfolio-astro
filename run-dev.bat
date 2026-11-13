@echo off
cd /d "%~dp0"
echo Installing dependencies...
npm ci
echo Starting Astro dev server...
npx astro dev --host --port 4321

