import Cookies from 'js-cookie'

const TokenKey = 'hrsaas-ihrm-token'// 唯一的key

// 从缓存读取token
export function getToken() {
  return Cookies.get(TokenKey)
}

// 写入token缓存
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

// 删除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
/* *********  主动处理token超时start ********* */
const timeKey = 'hrsaas-timestamp-key' // 设置一个独一无二的key

// 获取时间戳
export function getTimeStamp() {
  return Cookies.get(timeKey)
}
// 设置时间戳
export function setTimeStamp() {
  Cookies.set(timeKey, Date.now())
}
