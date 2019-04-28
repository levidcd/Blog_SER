const Controller = require('egg').Controller
const response = require('../../utils/response')

/**
 * @controller login-v1 用户接口
 */
class LoginController extends Controller {
  /**
   * @summary 登录
   * @description 登录账号
   * @router post /v1/login
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
    const { username, password } = ctx.request.body

    const result = await ctx.model.User.findOne({ username, password })
    console.log(result)

    let data = ''

    if (result) {
      await this.service.user.addUser({ username, password })
      data = '校验成功'
    } else {
      data = '用户名或密码错误'
    }

    ctx.body = response.baseResponse({ data })
  }

  /**
   * @summary 注册
   * @description 注册账号
   * @router post /v1/register
   * @param ctx 上下文
   * @request body registerRequest *body
   * @response 200 baseResponse 成功
   */
  async register (ctx) {
    const rule = {
      username: 'string',
      password: 'string'
    }
    ctx.validate(rule, ctx.request.body)
    const { username, password } = ctx.request.body

    const result = await ctx.model.User.findOne({ username })

    let data = ''

    if (!result) {
      await this.service.user.addUser({ username, password })
      data = '成功'
    } else {
      data = '用户名已存在'
    }

    ctx.body = response.baseResponse({ data })
  }

  async forgetPassword (ctx) {
    ctx.body = 'ojbk'
  }
}

module.exports = LoginController
