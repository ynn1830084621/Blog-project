'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default')(app);
  // const { router, controller } = app;
  // router.get('/', controller.home.index);
  // router.get('/list', controller.home.list);
};
