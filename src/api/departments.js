import request from '@/utils/request'

/*
***获取组件departments的数据
*/

export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

/*
***根据id找到部门，删除对应部门
接口满足restful，同样的地址，不同的方法，执行不同的业务
删除：delete
新增：post
修改：put
获取：get
*/

export function delDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'delete'
  })
}

/*
*** 新增部门
*/
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}

/*
*** 获取部门详情
*/
export function getDepartDetail(id) {
  return request({
    url: `/company/department/${id}`
  })
}

/*
*** 编辑部门
*/
export function updateDepartments(data) {
  return request({
    url: `/company/department/${data.id}`,
    method: 'put',
    data
  })
}
