// app/controller/home.js
const Controller = require('egg').Controller

class HomeController extends Controller {
  async index () {
    this.ctx.body = 'Hello world'
  }
  async list (ctx) {
    ctx.body = { list: 'list' }

    ctx.status = 200
  }

  async db (ctx) {
    ctx.body = await ctx.model.User.find({})
  }
}

module.exports = HomeController
