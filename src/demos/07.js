const Koa = require('koa')
const app = new Koa()
// demos/06.js
const route = require('koa-route')

const about = ctx => {
  ctx.response.type = 'html'
  ctx.response.body = '<a href="/">Index Page</a>'
}

const main = ctx => {
  console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
  ctx.response.body = 'Hello World'
}

app.use(route.get('/', main))
app.use(route.get('/about', about))
app.listen(3000)
