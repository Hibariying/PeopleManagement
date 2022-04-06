// vuex的权限模块
import { constantRoutes, asyncRoutes } from '@/router'

// vuex中的permission模块用来存放当前的  静态路由+当前用户的权限路由
const state = {
  // 设置静态路由，默认所有
  routes: constantRoutes
}
const mutations = {
  setRoutes(state, newRoutes) {
    state.routes = [...constantRoutes, ...newRoutes]
  }
}
const actions = {
  // 筛选路由
  // asyncRoutes是所有的动态路由
  // asyncRoutes[{path:'setting',name:'setting'},{}]
  filterRoutes(context, menus) {
    const routes = []
    // menus:['setting','permission']是当前用户所拥有的菜单权限
    menus.forEach(key => {
      // 筛选出动态路由中和menus中对应的路由
      // 得到的routes是模块中满足权限要求的路由数组
      routes.push(...asyncRoutes.filter(item => item.name === key))
    })
    // 提交动态路由给mutations
    context.commit('setRoutes', routes)
    return routes
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
