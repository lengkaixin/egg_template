'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 获取所有 用户信息
  async getUserTestDataAll() {
    const result = await this.app.mysql.select('users', {});
    return result;
  }
}

module.exports = UserService;
