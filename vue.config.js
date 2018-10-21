const path = require('path')
const fs = require('fs')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: './',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  /** 生产是否打开SourceMap*************************************/
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('style', resolve('src/style'))
  },
  // css: {
  //   loaderOptions: {
  //     // sass: {
  //     //   data: fs.readFileSync('./src/style/mixin.scss', 'utf-8')
  //     // }
  //   }
  // },
  /** webpack配置项 *******************************************/
  // 如果想要引入babel-polyfill可以这样写
  // configureWebpack: (config) => {
  //   config.entry = ["babel-polyfill", "./src/main.js"]
  // },
  /** vue-loader 配置项****************************************/
  // vueLoader: {},
  devServer: {
    port: 3000,
    // host: '192.168.0.104',
    host: '172.23.1.247',
    open: true // 配置自动启动浏览器
    // 配置代理(跨域)
  },
  // 第三方插件配置
  pluginOptions: {
  // ...
  }
}
