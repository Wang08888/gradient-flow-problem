// markdown + LaTeX -> self-contained HTML (KaTeX server-rendered).
//   node md2html.js in.md out.html "Title"
// Math spans ($...$, $$...$$, \(...\), \[...\]) are stashed BEFORE markdown so
// markdown-it never mangles _ * { } inside a formula; restored + KaTeX-rendered
// after (throwOnError:false => a broken formula degrades to raw tex, never kills
// the whole render). The KaTeX stylesheet is vendored from the local node_modules
// (no CDN) so PDF render works offline / air-gapped.
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const MarkdownIt = require('markdown-it');
const katex = require('katex');
const [, , inF, outF, title] = process.argv;
let text = fs.readFileSync(inF, 'utf8');
const md = new MarkdownIt({ html: false, linkify: true, breaks: false });
// protect math so markdown doesn't mangle _ * { }
const store = [];
const stash = (tex, disp) => { store.push({ tex, disp }); return `@@MATH${store.length - 1}@@`; };
text = text.replace(/\\\[([\s\S]+?)\\\]/g, (_, x) => stash(x, true));
text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, x) => stash(x, true));
text = text.replace(/\\\(([\s\S]+?)\\\)/g, (_, x) => stash(x, false));
text = text.replace(/\$([^\n$]+?)\$/g, (_, x) => stash(x, false));
let body = md.render(text);
body = body.replace(/@@MATH(\d+)@@/g, (_, i) => {
  const { tex, disp } = store[i];
  try { return katex.renderToString(tex, { displayMode: disp, throwOnError: false }); }
  catch (e) { return tex; }
});
// Vendor the KaTeX CSS from the local install (offline; no CDN). katex.min.css
// references its sibling dist/fonts/, so a file:// link to it renders fully local.
let katexHref = '';
try {
  const cssPath = path.join(path.dirname(require.resolve('katex')), 'katex.min.css');
  if (fs.existsSync(cssPath)) katexHref = pathToFileURL(cssPath).href;
} catch (e) { /* leave empty; math still renders, only unstyled */ }
const css = `
body{font-family:"Noto Serif CJK SC","Source Han Serif SC","Songti SC",serif;font-size:11.5pt;line-height:1.72;color:#1a202c;max-width:760px;margin:0 auto;padding:24px 8px;}
h1{font-size:21pt;line-height:1.32;color:#0f2742;border-bottom:2.5px solid #4f7da5;padding-bottom:10px;margin:0 0 16px;letter-spacing:.02em;}
h2{font-size:15pt;line-height:1.4;margin:24px 0 9px;color:#17395c;border-bottom:1px solid #d9e5ef;padding-bottom:5px;break-after:avoid;page-break-after:avoid;}
h3{font-size:12.5pt;margin:17px 0 6px;color:#2d5275;break-after:avoid;page-break-after:avoid;} h4{font-size:11.5pt;margin:12px 0 4px;color:#475569;break-after:avoid;page-break-after:avoid;}
p{margin:0 0 9px;} ul,ol{margin:5px 0 9px;padding-left:22px;} li{margin:3px 0;}
code{background:#f1f5f9;padding:1px 5px;border-radius:4px;font-size:.9em;}
pre{background:#f8fafc;border:1px solid #e2e8f0;padding:10px 12px;border-radius:6px;overflow-x:auto;}
blockquote{border-left:4px solid #5f88ad;background:#f4f8fb;margin:10px 0 14px;padding:8px 15px;color:#334e68;break-inside:avoid-page;page-break-inside:avoid;}
table{border-collapse:collapse;margin:12px 0 14px;font-size:10.4pt;width:100%;break-inside:avoid-page;page-break-inside:avoid;} th,td{border:1px solid #c7d6e3;padding:6px 9px;text-align:left;vertical-align:top;} th{background:#eaf1f7;color:#17395c;font-weight:600;}
.katex{font-size:1.04em;} .katex-display{margin:11px 0;overflow-x:auto;overflow-y:hidden;break-inside:avoid-page;page-break-inside:avoid;}
hr{border:0;border-top:1px solid #d8e3ec;margin:18px 0;}
strong{color:#142f4b;}
@page{margin:18mm 16mm;}`;
const link = katexHref ? `<link rel="stylesheet" href="${katexHref}">` : '';
const html = `<!doctype html><html><head><meta charset="utf-8">
${link}
<title>${title || ''}</title><style>${css}</style></head><body class="md">${body}</body></html>`;
fs.writeFileSync(outF, html);
console.log('wrote', outF, html.length, 'chars');
