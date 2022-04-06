import Layoout from '@/layout'

export default {
  path: '/social',
  name: 'social',
  component: Layoout,
  children: [{
    path: '',
    component: () => import('@/views/social'),
    meta: {
      title: '社保',
      icon: 'table'
    }
  }]
}
