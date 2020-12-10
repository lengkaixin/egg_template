/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1603503765493_842';

  // add your middleware config here
  config.middleware = [ 'params' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '81.69.13.123',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'b3e2fac9c6397622',
      // 数据库名
      database: 'Tencent',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      // 命名空间（即如果有两个业务用到了socket，可以分别用不同的命名空间去管理，如果只用到一个写一个及可）
      '/': {
        connectionMiddleware: [
          // 'auth',
          'connection', // 这个是连接中间件， 只在 connection 的时候触发
        ],
        packetMiddleware: [], // 这个会在每次消息的时候触发
      },
      // '/example': {
      //   connectionMiddleware: [
      //     'connection',
      //   ],
      //   packetMiddleware: [],
      // },
    },
  };

  // config.cluster = {
  //   listen: {
  //     port: 7001,
  //     // hostname: '81.69.13.123', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
  //     // path: '/var/run/egg.sock',
  //   },
  // };

  return {
    ...config,
    ...userConfig,
  };
};

/**
 * nginx 配置
 *
    location /socket.io/ {
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade";
      proxy_http_version 1.1;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $host;
      proxy_pass http://localhost:7001/socket.io/;

      # http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_bind
      # proxy_bind       $remote_addr transparent;
    }
 *
 */
