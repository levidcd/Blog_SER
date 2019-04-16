const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const router = require('./router')

const app = new Koa()
app.use(bodyParser()) // 解析request的body
app.use(router)

app.listen(1210)
console.log('app started at port 1210...')
