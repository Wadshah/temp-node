const http = require('http');

const nahi = http.createServer((req,res)=>{
 if(req.url ==='/'){
     res.end('mat aana')
 }
 if(req.url === '/about'){
     res.end('chalaja')
 }
 res.end(`
 <h1>Kahan aa gya</h1>
 <p>Hushhh</p>
 <a href ="/"back home </a>
 `)
})

nahi.listen(5000)