<template>
  <div class="permission-container">
    <div class="app-container">
      <!-- 靠右的按钮 -->
      <page-tools>
        <template v-slot:after>
          <el-button type="primary" size="small">添加权限</el-button>
        </template>
      </page-tools>
      <!-- 指定id为唯一属性 -->
      <el-table :data="list" border="" row-key="id">
        <el-table-column label="名称" prop="name" />
        <el-table-column label="标识" prop="code" />
        <el-table-column label="描述" prop="description" />
        <el-table-column label="操作">
          <template :v-slot="{row}">
            <!-- 添加按钮只在访问权的层级显示 -->
            <!-- 当type为1时为访问权限，type为2时为功能权限 -->
            <el-button v-if="row.type===1" type="text" @click="addPermission(row.id)">添加</el-button>
            <el-button type="text" @click="editPermission(row.id)">编辑</el-button>
            <el-button type="text" @click="delPermission(row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增和编辑弹层 -->
    <el-dialog
      :title="`${showText}权限点`"
      :visible="showDialog"
      @close="btnCancel"
    >
      <el-form ref="perform" v-model="formData" :rules="rules" label-width="120px">
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="formData.name" style="width:90%" />
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="formData.code" style="width:90%" />
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input v-model="formData.description" style="90%" />
        </el-form-item>
        <!-- 1开0关 -->
        <el-form-item label="开启">
          <el-switch
            v-model="formData.enVisible"
            active-color="1"
            inactive-color="0"
          />
        </el-form-item>
      </el-form>
      <!-- 底部确定和提交 -->
      <!-- <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-button
            type="primary"
            size="small"
            @click="btnOK"
          >确 定</el-button>
          <el-button size="small" @click="btnCancel">取 消</el-button>
        </el-col>
      </el-row> -->

    </el-dialog>
  </div>
</template>

<script>
import { getPermissionList, updatePermissionList, delPermissionList, getPermissionDetail } from '@/api/permission'
import { tranListToTreeData } from '@/utils'

export default {
  data() {
    return {
      list: [],
      formData: {
        name: '', // 名称
        code: '', // 标识
        description: '', // 描述
        type: '', // 类型 该类型 不需要显示 因为点击添加的时候已经知道类型了
        pid: '', // 因为做的是树 需要知道添加到哪个节点下了
        enVisible: '0' // 开启
      },
      rules: {
        name: [{ required: true, message: '权限名称不能为空', trigger: 'blur' }],
        code: [{ required: true, message: '权限标识不能为空', trigger: 'blur' }]
      },
      showDialog: false

    }
  },
  computed: {
    showText() {
      return this.formData.id ? '编辑' : '新增'
    }
  },
  created() {
    this.getPermissionList()
  },
  methods: {
    // 获取权限
    async getPermissionList() {
      // 将数据转换成树形
      this.list = tranListToTreeData(await getPermissionList(), '0')
    },
    // 添加权限
    async addPermission(pid, type) {
      this.formData.pid = pid
      this.formData.type = type
      this.showDialog = true
    },
    // 编辑权限
    async editPermission(id) {
      this.formData = await updatePermissionList(id)
      this.showDialog = true
    },
    // 删除权限
    async delPermission(id) {
      try {
        await this.$confirm('确定要删除该数据吗')
        await delPermissionList(id)
        this.getPermissionList()
        this.$message.success('删除成功')
        getPermissionDetail(id)
      } catch (error) {
        console.log(error)
      }
    },
    // 确认
    btnOK() {
      this.$refs.perForm.validate().then(() => {
        if (this.formData.id) {
          return updatePermissionList(this.formData)
        }
        return this.addPermission(this.formData)
      }).then(() => {
        // 提示消息
        this.$message.success('新增成功')
        this.getPermissionList()
        this.showDialog = false
      })
    },
    btnCancel() {
      this.formData = {
        name: '', // 名称
        code: '', // 标识
        description: '', // 描述
        type: '', // 类型 该类型 不需要显示 因为点击添加的时候已经知道类型了
        pid: '', // 因为做的是树 需要知道添加到哪个节点下了
        enVisible: '0' // 开启
      }
      this.$refs.perForm.resetFields()
      this.showDialog = false
    }
  }

}
</script>

<style>

</style>
