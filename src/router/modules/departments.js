import Layoout from '@/layout'

export default {
  path: '/departments',
  name: 'departments',
  component: Layoout,
  children: [{
    path: '',
    component: () => import('@/views/departments'),
    meta: {
      title: '组织架构',
      icon: 'tree'
    }

  }]
}
