const Service = require('egg').Service

class UserService extends Service {
  async findUser () {
    const result = await this.ctx.model.User.find()
    return result
  }

  async addUser (payload) {
    const user = new this.ctx.model.User(payload)
    user.save()
  }

  async updateUser () {
    const result = await this.ctx.model.User.updateOne(
      {
        _id: '5c00f0ce862e9227acb56d22'
      },
      {
        password: 'cccccccccc'
      }
    )
    return result
  }

  async deleteUser () {
    const result = await this.ctx.model.User.deleteOne({
      _id: '5c00f0ce862e9227acb56d22'
    })
    return result
  }
}

module.exports = UserService
