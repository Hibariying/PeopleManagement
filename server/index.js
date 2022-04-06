// node
const express = require('express')
const path = require('path')
var compression = require('compression')
var history = require('connect-history-api-fallback')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')
// 2、history模式下刷新页面的问题
app.use(history())
// 在静态中间件前面进行压缩
// 3、压缩问题
app.use(compression())
// proxy middleware options
/** @type {import('http-proxy-middleware/dist/types').Options} */
// app托管静态资源
// express中间件语法:内置静态资源中间件
app.use(express.static(path.join(__dirname, 'public')))
// 中间件有顺序
// 1、服务器线上代理的配置
app.use('/prod-api', createProxyMiddleware({
  pathRewrite: {
    '^/prod-api': '/api' // rewrite path
  },
  target: 'http://ihrm-java.itheima.net', // target host
  changeOrigin: true // needed for

}))
app.listen(8080, () => {
  console.log('server start at port 8080')
})
