import Layoout from '@/layout'

export default {
  path: '/employees',
  name: 'employees',
  component: Layoout,
  children: [{
    path: '',
    component: () => import('@/views/employees'),
    meta: {
      title: '员工管理',
      icon: 'people'
    }
  }, {
    path: 'detail/:id?',
    component: () => import('@/views/employees/detail.vue'),
    hidden: true,
    meta: {
      title: '员工详情'
    }
  }, {
    path: 'print/:id',
    component: () => (import('@/views/employees/print')),
    hidden: true,
    meta: {
      title: '打印',
      icon: 'people'
    }
  }]
}
