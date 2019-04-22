// app/controller/home.js
const Controller = require('egg').Controller

/**
 * @controller user 用户接口
 */
class HomeController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async list (ctx) {
    ctx.body = { list: 'list' }

    ctx.status = 200
  }
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async addUser (ctx) {
    const params = { username: 'evan', password: 'evan' }
    await this.service.user.addUser(params)
    // this.ctx.body = await ctx.model.User.find({ username: 'evan' })
    this.ctx.body = ctx.request.body
    ctx.status = 200
  }

  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async db (ctx) {
    ctx.body = 'It`s Work!'
  }
}

module.exports = HomeController
