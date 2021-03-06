/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true
  },
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  validate: {
    enable: true,
    package: 'egg-validate'
  },
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  },
  swaggerdoc: {
    enable: true,
    package: 'egg-swagger-doc'
  }
}
