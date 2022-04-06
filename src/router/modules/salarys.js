import Layoout from '@/layout'

export default {
  path: '/salarys',
  name: 'salarys',
  component: Layoout,
  children: [{
    path: '',
    component: () => import('@/views/salarys'),
    meta: {
      title: '工资',
      icon: 'money'
    }
  }]
}
