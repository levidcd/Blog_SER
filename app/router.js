/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.post('/login', '/login', controller.login.login)
  router.post('/register', '/register', controller.login.register)
  // router.resources('topics', '/api/v2/topics', controller.topics)
}
