
import Router from 'koa-router'
let home = new Router()

// 子路由1
home.get('/', async (ctx) => {
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  console.log('访问了主路由')
  ctx.body = html
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
