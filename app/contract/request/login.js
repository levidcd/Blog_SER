module.exports = {
  loginRequest: {
    userName: {
      type: 'string',
      required: true,
      description: '用户姓名',
      example: 'evan'
    },
    password: {
      type: 'string',
      required: true,
      description: '密码',
      example: 'evan'
    }
  }
}
