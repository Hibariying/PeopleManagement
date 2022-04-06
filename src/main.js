import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
import checkPermission from './mixin/checkPermission'
import * as directives from '@/directives'
// 自定义组件
import Component from '@/components'
// 语言包
import i18n from '@/lang/index'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
// 注册自定义指令
// 遍历所有的导出的指令对象 完成自定义全局注册
// .keys把对象变成数组
Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})
// 将工具函数转换成过滤器
import * as filters from '@/filters'
Object.keys(filters).forEach(key => {
  // 注册自定义过滤器
  Vue.filter(key, filters[key])
})

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

// server.js

Vue.config.productionTip = false
// 注册全局自定义组件
Vue.use(Component)
Vue.mixin(checkPermission)
// 实例化Vue
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
