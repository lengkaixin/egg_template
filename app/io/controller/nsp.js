'use strict';

const Controller = require('egg').Controller;

class NspController extends Controller {
  // 初始获取数据
  async exchange() {
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    const message = ctx.args[0] || {};
    const socket = ctx.socket;
    const client = socket.id;
    console.log('exchange', ctx.args);

    try {
      const { target, payload } = message;
      if (!target) return;
      const msg = ctx.helper.parseMsg('exchange', payload, { client, target });
      nsp.emit(target, msg);
    } catch (error) {
      app.logger.error(error);
    }
  }

  async sendMsg() {
    const { ctx, app } = this;
    const nsp = app.io.of('/ws');
    const message = ctx.args[0] || {};
    console.log('sendMsg', message);
    // 向客户端广播消息， 在客户端监听broadcast事件就可以获取消息了
    nsp.emit('broadcast', message);
  }
}

module.exports = NspController;
