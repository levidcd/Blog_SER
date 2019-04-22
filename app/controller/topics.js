// app/controller/topics.js
const Controller = require('egg').Controller

// 定义创建接口的请求参数规则

const createRule = {
  accesstoken: 'string',
  title: 'string',
  tab: { type: 'enum', values: [ 'ask', 'share', 'job' ], required: false },
  content: 'string'
}

/**
 * @controller user 用户接口
 */
class TopicController extends Controller {
  /**
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /v1/users
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create () {
    const ctx = this.ctx
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body)
    // 调用 service 创建一个 topic
    const id = await ctx.service.topics.create(ctx.request.body)
    // 设置响应体和状态码
    ctx.body = {
      topic_id: id
    }
    ctx.status = 201
  }
}
module.exports = TopicController
