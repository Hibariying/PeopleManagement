import request from '@/utils/request'// promise对象

/** *
* 登陆接口的封装
* **/
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
/** *
* 获取用户资料结果接口的封装
* **/
export function getUserInfo(token) {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

/** *
* 获取用户基本信息接口的封装
* **/
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}
/** *
* 登出接口的封装
* **/
export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

/** *
* 获取用户基本信息接口的封装
* **/
