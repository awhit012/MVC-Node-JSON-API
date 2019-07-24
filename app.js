const http   = require('http')
const router = require('./router')
const port   = process.env.port || 3000
const server = http.createServer(router);

server.listen(port,()=>{
  console.log(`Node server created at port ${port}`)
})
