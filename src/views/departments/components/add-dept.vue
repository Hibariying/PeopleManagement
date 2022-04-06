<template>
  <!-- 新增部门的弹层 -->
  <el-dialog title="新增部门" :visible="showDialog" @close="btnCancel">
    <!-- 表单组件  el-form   label-width设置label的宽度   -->
    <!-- 匿名插槽 -->
    <!-- model绑定formData rules绑定rules -->
    <el-form ref="deptForm" label-width="120px" :model="formData" :rules="rules">
      <!-- 绑定prop数据 -->
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="formData.manager" style="width:80%" placeholder="请选择" @focus="getEmployeeSimple">
          <el-option v-for="item in peoples" :key="item.id" :label="item.username" :value="item.username" />
        </el-select>
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formData.introduce" style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <!-- el-dialog有专门放置底部操作栏的 插槽  具名插槽 -->
    <el-row slot="footer" type="flex" justify="center">
      <!-- 列被分为24 -->
      <el-col :span="6">
        <el-button type="primary" size="small" @click="btnOK">确定</el-button>
        <el-button size="small" @click="btnCancel">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getDepartments, addDepartments, getDepartDetail, updateDepartments } from '@/api/departments'
import { getEmployeeSimple } from '@/api/employees'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    // const { depts } = getDepartments()
    // if (this.treeNode.pid === '') { // 一级部门
    //   this.depart = depts[0].name
    // } else {
    //   const p = this.treeNode.pid
    //   depts.map((item, value) => {
    //     if (depts[item].id === p) {
    //       this.depart = depts[item].name
    //     }
    //   })
    // }
    // 现在定义一个函数 这个函数的目的是 去找 同级部门下 是否有重复的部门名称
    const checkNameRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      // item是depts数组的每一项
      // 返回true则找到了同级部门的所有子部门有相同的名字
      // console.log(depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value))

      //  检查重复规则 需要支持两种 新增模式 / 编辑模式
      // depts是所有的部门数据
      // 如何去找技术部所有的子节点
      // const isRepeat = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)

      let isRepeat = false
      if (this.formData.id) {
        // 编辑模式
        isRepeat = depts.filter(item => item.id !== this.formData.id && item.pid === this.treeNode.pid).some(item => item.name === value)
      } else {
        // 新增模式
        isRepeat = depts.filter(item => item.pid === this.treeNode.pid).some(item => item.name === value)
      }
      isRepeat ? callback(new Error(`同级部门下已经有${value}的部门了`)) : callback()
    }

    // 编码重复
    const checkCodeRepeat = async(rule, value, callback) => {
      const { depts } = await getDepartments()
      // console.log(depts.some(item => item.code === value && value))
      // const isRepeat = depts.some(item => item.code === value && value)
      let isRepeat = false
      if (this.formData.id) {
        // 编辑模式
        isRepeat = depts.some(item => item.id !== this.formData.id && item.code === value && value)
      } else {
        // 新增模式
        isRepeat = depts.some(item => item.code === value && value)
      }
      isRepeat ? callback(new Error(`组织架构中已经有部门使用${value}编码了`)) : callback()
    }

    return {
      formData: {
        // 表单数据
        name: '',
        code: '',
        manager: '',
        introduce: ''
      },
      depart: '',
      // 校验规则

      rules: {
        name: [
          { required: true, message: '部门名称不能为空', trigger: 'blur' },
          { min: 1, max: 50, message: '部门名称要求1-50个字符', trigger: 'blur' },
          { trigger: 'blur', validator: checkNameRepeat }
        ],
        code: [
          { required: true, message: '部门编码不能为空', trigger: 'blur' },
          { min: 1, max: 50, message: '部门编码要求1-50个字符', trigger: 'blur' },
          { trigger: 'blur', validator: checkCodeRepeat }
        ],
        manager: [
          { required: true, message: '部门负责人不能为空', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '部门介绍不能为空', trigger: 'blur' },
          { min: 1, max: 300, message: '部门介绍要求1-300个字符' }
        ]
      },
      peoples: []
    }
  },
  computed: {
    showTitle() {
      return this.formData.id ? '编辑部门' : '新增子部门'
    }
  },
  methods: {
    async getEmployeeSimple() {
      this.peoples = await getEmployeeSimple()
      console.log('this.peoples:')
      console.log(this.peoples)
    },
    async getDepartDetail(id) {
      this.formData = await getDepartDetail(id)
      console.log('this.formData:')
      console.log(this.formData)
      const { depts } = await getDepartments()
      console.log('depts')
      console.log(depts)
      console.log('当前treeNode')
      console.log(this.treeNode)
    },
    btnOK() {
      // 场景区分
      this.$refs.deptForm.validate(async isOK => {
        if (isOK) {
          // 现在编辑还是新增
          if (this.formData.id) {
            // 编辑模式,调用编辑接口
            await updateDepartments(this.formData)
          } else {
            // 新增模式,调用新增接口,添加父亲的id
            await addDepartments({ ...this.formData, pid: this.treeNode.id })
          }
          // 表示可以提交了,告诉父组件,新增数据成功,重新拉取数据
          this.$emit('addDepts')
          // update:props名称
          this.$emit('update:showDialog', false)
        }
      })
    },
    btnCancel() {
      // 重置数据  因为resetFields 只能重置 表单上的数据 非表单上的 比如 编辑中id 不能重置
      this.formData = {
        name: '',
        code: '',
        manager: '',
        introduce: ''
      }
      this.$emit('update:showDialog', false)
      this.$refs.deptForm.resetFields()
    }
  }

}
</script>

<style>

</style>
