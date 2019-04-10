const Koa = require('koa')
const app = new Koa()
// demos/04.js
const fs = require('fs')

const main = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./src/demos/template.html')
}

app.use(main)
app.listen(3000)
