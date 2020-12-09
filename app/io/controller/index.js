'use strict';

const Controller = require('egg').Controller;

class NspController extends Controller {
  async sendMsg() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    // 向客户端广播消息， 在客户端监听 broadcast 事件就可以获取消息了
    nsp.emit('broadcast', message);
  }
}

module.exports = NspController;
