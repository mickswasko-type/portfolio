#!/bin/sh
# CI only. Removes the /local pages from the checkout unless LOCAL_MODE is preview or live,
# and the Slop Test page unless LOCAL_SLOP_TEST is on.
# Never run this on your working copy: it deletes the source files.
cd "$(dirname "$0")/.." || exit 1
case "$LOCAL_MODE" in
  preview|live) echo "/local is $LOCAL_MODE: building it." ;;
  *) rm -rf src/pages/local public/local; echo "/local is off: removed before the build." ;;
esac
if [ "$LOCAL_SLOP_TEST" != "on" ]; then
  rm -f src/pages/local/slop-test.astro public/local/qr-slop-test.svg public/local/qr-slop-test.png
  echo "Slop Test is off: removed before the build."
fi
