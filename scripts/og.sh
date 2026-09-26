#!/bin/sh
# Renders scripts/og/og.html to public/og.png (1200x630), the image link previews show.
cd "$(dirname "$0")/.." || exit 1
cp src/assets/headshot-halftone.png scripts/og/headshot.png
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --virtual-time-budget=8000 \
  --screenshot="$(pwd)/public/og.png" "file://$(pwd)/scripts/og/og.html" 2>&1 | grep -i written
