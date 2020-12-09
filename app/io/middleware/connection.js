'use strict';

// io模块的中间件， 在 config/config.default 里配置成 connectionMiddleware， 只在 connection 的时候触发

module.exports = function robotMiddleware() {
  return async (ctx, next) => {
    // 向客户端推送 exchange 事件
    ctx.socket.emit('exchange', ' ====== 有新成员加入 ====== ');
    await next();
  };
};
