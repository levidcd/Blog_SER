const Controller = require('egg').Controller
const response = require('../../utils/response')

/**
 * @controller login-v2 用户接口
 */
class LoginController extends Controller {
  /**
   * @summary 登录
   * @description 登录账号
   * @router post /v2/login
   * @param ctx 上下文
   * @request body loginRequest *body
   * @response 200 baseResponse 成功
   */
  async login (ctx) {
    const rule = {
      username: 'string',
      password: 'string'
    }
    ctx.validate(rule, ctx.request.body)

    const data = 'v2'
    ctx.body = response.baseResponse({ data })
  }

  async register (ctx) {
    ctx.body = 'ojbk'
  }

  async forgetPassword (ctx) {
    ctx.body = 'ojbk'
  }
}

module.exports = LoginController
