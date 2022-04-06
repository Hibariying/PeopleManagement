import PageTools from './PageTools'
import UploadExcel from './UploadExcel'
import UploadImg from './UploadImg'
import Print from 'vue-print-nb'

export default {
  // Vue的全局对象通过install传入
  install(Vue) {
    // 组件的注册
    Vue.component('PageTools', PageTools)
    Vue.component('UploadExcel', UploadExcel) // 注册导入excel组件
    Vue.component('UploadImg', UploadImg)
    Vue.use(Print)
  }
}
