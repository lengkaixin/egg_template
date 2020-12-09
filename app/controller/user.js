'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 获取所有 用户信息
  async getUserTestDataAll(ctx) {
    await ctx.service.user.getUserTestDataAll()
      .then(res => {
        ctx.body = {
          data: res,
          code: 200,
        };
      })
      .catch(err => {
        ctx.body = {
          mess: '获取信息失败',
          code: 1,
          err,
        };
      });
  }
}

module.exports = UserController;
