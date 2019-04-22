/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  // router.post('/list', '/list', controller.home.list)
  // router.post('/db', '/db', controller.home.db)
  router.post('/login', '/login', controller.login.login)
  // router.resources('topics', '/api/v2/topics', controller.topics)
}
