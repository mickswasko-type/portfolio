#!/bin/sh
# Flip the /local site on or off. Takes about a minute to go live.
#   npm run local -- status
#   npm run local -- preview   built, reachable by URL, hidden from search
#   npm run local -- live      built and indexable
#   npm run local -- off       gone from the site
#   npm run local -- slop-test on|off   the Slop Test page and every mention of it
cd "$(dirname "$0")/.." || exit 1
case "$1" in
  status)
    echo "LOCAL_MODE: $(gh variable get LOCAL_MODE 2>/dev/null || echo off)"
    echo "LOCAL_SLOP_TEST: $(gh variable get LOCAL_SLOP_TEST 2>/dev/null || echo off)"
    ;;
  off|preview|live)
    gh variable set LOCAL_MODE --body "$1" || exit 1
    gh workflow run "Build & deploy" || exit 1
    echo "LOCAL_MODE is now '$1'. Deploying; watch it with: gh run watch"
    ;;
  slop-test)
    case "$2" in
      on|off)
        gh variable set LOCAL_SLOP_TEST --body "$2" || exit 1
        gh workflow run "Build & deploy" || exit 1
        echo "LOCAL_SLOP_TEST is now '$2'. Deploying; watch it with: gh run watch"
        ;;
      *) echo "usage: npm run local -- slop-test on|off"; exit 1 ;;
    esac
    ;;
  *) echo "usage: npm run local -- status|off|preview|live|slop-test on|off"; exit 1 ;;
esac
