import Layoout from '@/layout'

export default {
  path: '/approvals',
  name: 'approvals',
  component: Layoout,
  children: [{
    path: '',
    component: () => import('@/views/approvals'),
    meta: {
      title: '审批',
      icon: 'tree-table'
    }
  }]
}
