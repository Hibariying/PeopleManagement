import Layoout from '@/layout'

export default {
  path: '/attendances',
  name: 'attendances',
  component: Layoout,
  children: [{
    path: '',
    component: () => import('@/views/attendances'),
    meta: {
      title: '考勤',
      icon: 'skill'
    }
  }]
}
