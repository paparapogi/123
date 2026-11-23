// Wraps pamasko-dice.html (the page body) in a full HTML document so it can be
// opened directly or hosted anywhere as index.html.   Usage: node build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const src = readFileSync(new URL('./pamasko-dice.html', import.meta.url), 'utf8');
const title = (src.match(/<title>([^<]*)<\/title>/) || [null, 'Pamasko Dice'])[1];
const body = src.replace(/<title>[^<]*<\/title>\s*/, '');

const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${title}</title>
<style>:root{color-scheme:light;padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${body}</body>
</html>
`;

writeFileSync(new URL('./index.html', import.meta.url), page);
console.log(`index.html written (${page.length} bytes)`);
