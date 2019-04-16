
import Router from 'koa-router'
let home = new Router()

// 子路由1
home.get('/', async (ctx, next) => {
  let val = null
  const data = { username: 'ydj' }
  console.log('data', data)
  const result = {
    code: 200,
    response: data,
    ts: 12345
  }
  ctx.response.body = result
  return result
})

// 子路由page
let page = new Router()
page.get('/404', async (ctx) => {
  ctx.body = '404 page!'
}).get('/helloworld', async (ctx) => {
  ctx.body = 'helloworld page!'
})

let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

export default router.routes()
