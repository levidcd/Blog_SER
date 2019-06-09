module.exports = {
  baseResponse ({ code = 200, errorMessage = '', data = {} }) {
    return {
      data,
      code,
      errorMessage
    }
  }
}
