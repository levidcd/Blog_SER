/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {
    errorHandler: {
      match: '/api'
    }
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1555406097809_5160'

  // add your middleware config here
  config.middleware = [ 'errorHandler' ]

  config.validate = {
    convert: false,
    validateRoot: false
  }
  config.cors = {
    origin: '*',
    allowMethods: 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }

  return {
    ...config,
    ...userConfig
  }
}
