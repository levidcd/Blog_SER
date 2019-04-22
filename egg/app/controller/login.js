const Controller = require('egg').Controller

/**
 * @controller user 用户接口
 */
class LoginController extends Controller {
  async login (ctx) {
    ctx.body = 'ojbk'
  }
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async register (ctx) {
    ctx.body = 'ojbk'
  }
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async forgetPassword (ctx) {
    ctx.body = 'ojbk'
  }
}

module.exports = LoginController
