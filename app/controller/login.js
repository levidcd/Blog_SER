const Controller = require('egg').Controller

/**
 * @controller login 用户接口
 */
class LoginController extends Controller {
  /**
   * @summary 登录
   * @description 登录账号，记录用户账户/密码/类型
   * @router post /login
   * @param
   * @request body loginRequest *body
   * @response 200 baseResponse 创建成功
   */
  async login (ctx) {
    ctx.body = await ctx.model.User.find({})
  }

  async register (ctx) {
    ctx.body = 'ojbk'
  }

  async forgetPassword (ctx) {
    ctx.body = 'ojbk'
  }
}

module.exports = LoginController
