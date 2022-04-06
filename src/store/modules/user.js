import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getUserInfo, getUserDetailById } from '@/api/user'
import { resetRouter } from '@/router'
const state = {
  token: getToken(), // 设置token为共享状态，初始化vuex的时候，就先从缓存中读取
  userInfo: {}// 定义一个空对象
}
// Mutations(同步操作)--数据写入缓存，Vuex数据持久化//state共享状态
const mutations = {
  setToken(state, token) {
    state.token = token // 将数据设置给vuex
    // 将数据同步给缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null // 将vuex置空
    removeToken() // 将数据同步给缓存
  },
  setUserInfo(state, result) {
    state.userInfo = result // 响应式
    // state.userInfo = {...result} // 浅拷贝响应式
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }

}

// Action(异步)调用后端API--commit--Mutations(同步操作)
const actions = {
  async login(context, data) {
    // 调用api接口，promise对象
    const result = await login(data)
    // console.log(result)
    // axios默认加了一层data
    // if (result) {
    // 如果为true,表示登录成功
    context.commit('setToken', result)
    setTimeStamp()
    // }
  },
  async getUserInfo(context) {
    const result = await getUserInfo()
    const baseInfo = await getUserDetailById(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo })// 提交到mutations
    return result // 给权限留的
  },
  // 登出的action
  logout(context) {
  // 删除token
    context.commit('removeToken') // 不仅仅删除了vuex中的 还删除了缓存中的
    // 删除用户资料
    context.commit('removeUserInfo') // 重置路由
    resetRouter()
    // mutations名称  载荷  {root:true}//调用根级mutations或action
    context.commit('permission/setRoutes', [], { root: true })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
