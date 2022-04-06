// 权限拦截在路由跳转  即路由守卫

// 不需要导出，只要让代码执行就可以
import router from '@/router'
import store from '@/store' // ===this.store
import nprogress from 'nprogress'// 引入进度条
import 'nprogress/nprogress.css'
// 白名单，不受token的影响
const whiteList = ['/login', '/404']
// 前置守卫
// next是前置守卫必须要执行的钩子，next必要要执行，如果不执行，页面就不会跳转
// next()   跳过
// next(false)  跳转终止
// next(地址)   跳转到地址
// 流程图转换代码
router.beforeEach(async(to, from, next) => {
  // 开启进度条
  nprogress.start()
  // 访问权限拦截——是否有token
  if (store.getters.token) {
    // 有token——是否在登录页
    // console.log(this.token)
    if (to.path === '/login') {
      // console.log('有token，在登录页')
      // 登录页——跳转到主页
      // console.log(store.getters.token)
      next('/')
    } else {
      // console.log('有token，不在登录页')
      // console.log(store.getters.token)
      // 不是登录页——放过通行
      // 如果当前vuex中有用户资料，则已有资料
      if (!store.getters.userId) {
        // 用户资料
        const { roles } = await store.dispatch('user/getUserInfo')
        // 筛选得到的动态路由
        const routes = await store.dispatch('permission/filterRoutes', roles.menus)
        // 添加到路由表
        router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
        // addRoutes之后必须用next(地址)
        next(to.path)
      } else {
        next()
      }
      // 在添加路由之后应该使用 **next(to.path)**， 否则会使刷新页面之后 权限消失，这属于一个vue-router的**已知缺陷**
    }
  } else {
    // 没有token
    // 是否在白名单
    // -1即有值
    if (whiteList.indexOf(to.path) > -1) {
      // 在白名单——跳过通行
      // console.log('没有token，在白名单')
      next()
    } else {
      // console.log('没有token，不在白名单')
      // 跳到登录页
      next('/login')
    }
  }
  nprogress.done()// 手动关闭一次，为了解决手动切换地址时，进度条的不关闭的问题
})

// 后置守卫
router.afterEach(() => {
  // console.log('进入后置守卫')
  // 关闭进度条
  nprogress.done()
})
