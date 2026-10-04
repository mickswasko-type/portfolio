// Makes the QR codes for the /local Slop Test page (SVG for print, PNG for slides).
//   npm run qr                 -> uses the site URL from site.config.ts
//   npm run qr -- https://mickswasko.com/local/slop-test/?src=library   -> for a custom domain
// Re-run it whenever the address changes, then rebuild.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import QRCode from 'qrcode';

const cfg = readFileSync(new URL('../site.config.ts', import.meta.url), 'utf8');
const site = cfg.match(/site:\s*'([^']+)'/)[1];
const baseMatch = cfg.match(/base:\s*'([^']*)'/)[1].replace(/\/$/, '');
const url = process.argv[2] ?? `${site}${baseMatch}/local/slop-test/?src=library`;

const opts = {
  errorCorrectionLevel: 'Q', // survives a smudged photocopy
  margin: 4, // the quiet zone scanners need
  color: { dark: '#1a1613', light: '#ffffff' },
};
const out = new URL('../public/local/', import.meta.url);
mkdirSync(out, { recursive: true });
writeFileSync(new URL('qr-slop-test.svg', out), await QRCode.toString(url, { ...opts, type: 'svg' }));
await QRCode.toFile(new URL('qr-slop-test.png', out).pathname, url, { ...opts, width: 1200 });
console.log('QR codes written to public/local/ for', url);
