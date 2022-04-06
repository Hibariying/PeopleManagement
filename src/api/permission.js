import request from '@/utils/request'

/*
***获取权限
*/
export function getPermissionList(params) {
  return request({
    url: '/sys/permission',
    params
  })
}

/*
***新增权限
*/
export function addPermissionList(data) {
  return request({
    url: '/sys/permissiion',
    method: 'post',
    data
  })
}

/*
*** 更新权限
*/
export function updatePermissionList(data) {
  return request({
    url: `/sys/permission/${data.id}`,
    method: 'put',
    data
  })
}

/*
*** 删除权限
*/
export function delPermissionList(id) {
  return request({
    url: `/sys/permission.${id}`,
    method: 'delete'
  })
}

/*
*** 获取权限详情
*/
export function getPermissionDetail(id) {
  return request({
    url: `/sys/permission/${id}`
  })
}
