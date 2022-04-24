/* eslint-disable @typescript-eslint/no-var-requires */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const timeUpdate = new Date().getTime()
const path = require('path')
const NODE_ENV = process.env.NODE_ENV || ''
console.log('vue.config.js 中环境：', NODE_ENV)

const vueConfig = {
  lintOnSave: true,
  outputDir: 'dist', // build输出目录 ，默认dist
  publicPath: './', // 配置项目路径
  assetsDir: 'static',
  devServer: {
    open: false, // 在服务器启动时打开浏览器
    public: process.env.VUE_APP_BASE_URL,
    hotOnly: false // 是否开启热更新
  },
  configureWebpack: {
    output: {
      filename: `[name].${timeUpdate}.js`,
      chunkFilename: `[name].${timeUpdate}.js`
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: false // 注释是否会被保留
            },
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      ]
    }
  },
  chainWebpack: config => {
    // prefetch 会在浏览器空闲时提前预加载，理论上不会影响速度，但实际上会影响一点，所以此处删除
    config.plugins.delete('prefetch')
    // 配置别名
    config.resolve.alias.set('@', path.join(__dirname, './src/'))

    // 开启js、css压缩
    if (NODE_ENV.includes('prod')) {
      console.log('开启js、css压缩')
      // js、css代码的最小化压缩
      config.optimization.minimize(true)
    }
  }
}

if (NODE_ENV !== 'development') {
  vueConfig.devServer.proxy = {
    '/api': {
      target: process.env.VUE_APP_REQUEST_URL,
      ws: true, // 代理websockets
      changOrigin: true // 虚拟的站点需要更管origin
    }
  }
}

module.exports = vueConfig
