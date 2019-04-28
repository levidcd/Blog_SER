module.exports = {
  loginRequest: {
    username: {
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
  },
  registerRequest: {
    username: {
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
