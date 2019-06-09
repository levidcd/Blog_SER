/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.post('/login', '/v1/login', controller.v1.login.login)
  router.post('/login', '/v2/login', controller.v2.login.login)
  router.post('/register', '/v1/register', controller.v1.login.register)
  router.post('/register', '/v2/register', controller.v2.login.register)
  // router.resources('topics', '/api/v2/topics', controller.topics)
}
