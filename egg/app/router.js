/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.post('/list', '/list', controller.home.list)
  router.post('/db', '/db', controller.home.db)
  router.post('/addUser', '/addUser', controller.home.addUser)
  router.resources('topics', '/api/v2/topics', controller.topics)
}
