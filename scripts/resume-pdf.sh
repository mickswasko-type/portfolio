#!/bin/sh
# Prints /resume/ to public/mick-swasko-resume.pdf. Needs `npm run dev` running.
# Usage: npm run resume:pdf [-- <port>]
PORT="${1:-4321}"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf=public/mick-swasko-resume.pdf \
  "http://localhost:$PORT/portfolio/resume/" 2>&1 | grep written
