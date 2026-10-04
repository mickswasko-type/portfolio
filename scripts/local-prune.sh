#!/bin/sh
# CI only. Removes the /local pages from the checkout unless LOCAL_MODE is preview or live.
# Never run this on your working copy: it deletes the source files.
cd "$(dirname "$0")/.." || exit 1
case "$LOCAL_MODE" in
  preview|live) echo "/local is $LOCAL_MODE: building it." ;;
  *) rm -rf src/pages/local public/local; echo "/local is off: removed before the build." ;;
esac
