/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @LastEditors: Please set LastEditors
 * @Date: 2019-04-11 10:16:15
 * @LastEditTime: 2019-04-11 10:32:45
 */
const Koa = require('koa') // koa v2
// const convert = require('koa-convert')
// const loggerGenerator = require('./middleware/logger-generator')

/**
 * @description:只能koa2用
 * @param {type}
 * @return:
 */
const loggerAsync = require('./middleware/logger-async')
const app = new Koa()

// app.use(convert(loggerGenerator()))
app.use(loggerAsync())
app.use((ctx) => {
  ctx.body = 'hello world!'
})

app.listen(3000)
console.log('the server is starting at port 3000')
