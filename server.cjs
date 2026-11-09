const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, 'dist');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.png':'image/png','.mp4':'video/mp4'};
http.createServer((req,res)=>{
  const pathname = decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const file = path.resolve(root, '.' + pathname);
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403).end(); return; }
  const target = fs.existsSync(file) && fs.statSync(file).isFile() ? file : path.join(root,'index.html');
  const stat = fs.statSync(target);
  const range = req.headers.range;
  res.setHeader('Content-Type',mime[path.extname(target)] || 'application/octet-stream');
  res.setHeader('Accept-Ranges','bytes');
  if (range) {
    const m = /^bytes=(\d+)-(\d*)$/.exec(range);
    if (m) { const start=+m[1], end=m[2]?+m[2]:stat.size-1; res.writeHead(206,{'Content-Range':`bytes ${start}-${end}/${stat.size}`,'Content-Length':end-start+1}); fs.createReadStream(target,{start,end}).pipe(res); return; }
  }
  res.writeHead(200,{'Content-Length':stat.size}); fs.createReadStream(target).pipe(res);
}).listen(Number(process.env.PORT || 4173),'127.0.0.1',()=>console.log(`http://127.0.0.1:${process.env.PORT || 4173}`));
