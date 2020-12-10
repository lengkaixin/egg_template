'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/api/getUsersTestDataAll', controller.user.getUserTestDataAll);

  // socket.io
  io.of('/').route('exchange', io.controller.nsp.exchange);
  // 这里的 sendMsg 相当于一个接口， 负责处理客户端发送的 sendMsg 事件
  // 这个 controller 是 io 模块的 controller， 和 egg 的 controller 不同
  io.of('/').route('sendMsg', io.controller.nsp.sendMsg);
};
