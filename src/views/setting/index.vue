<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <el-tab-pane label="角色管理">
            <!-- 左侧的内容 -->
            <el-row style="height:60px">
              <el-button type="primary" size="small" icon="el-icon-plus" @click="showDialog = true">新增角色</el-button>
            </el-row>
            <!-- 表格 -->
            <el-table border="" :data="list">
              <el-table-column label="序号" width="120" align="center" type="index" />
              <el-table-column label="名称" width="240" align="center" prop="name" />
              <el-table-column label="描述" align="center" prop="description" />
              <el-table-column label="操作" align="center">
                <template slot-scope="{row}">
                  <el-button type="success" size="small" @click="assignPerm(row.id)">分配权限</el-button>
                  <el-button type="primary" size="small" @click="editRole(row.id)">编辑</el-button>
                  <el-button type="danger" size="small" @click="deleteRole(row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 放置分页组件 -->
            <el-row type="flex" justify="center" align="middle" style="height:60px">
              <el-pagination
                :current-page="page.page"
                :page-size="page.pagesize"
                :total="page.total"
                layout="prev, pager, next"
                @current-change="changePage"
              />
            </el-row>
          </el-tab-pane>
          <!-- 右侧的内容 -->
          <el-tab-pane label="公司信息">
            <el-alert
              title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
              type="info"
              :show-icon="true"
              :closable="false"
            />
            <el-form label-width="120px" style="margin-top:50px">
              <el-form-item label="公司名称">
                <el-input v-model="formData.name" disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input v-model="formData.companyAddress" disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formData.mailbox" disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="formData.remarks" disabled :rows="3" type="textarea" style="width:400px" />
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <!-- 弹层 -->
    <el-dialog title="编辑弹层" :visible="showDialog" @close="btnCancel">
      <el-form ref="roleForm" :model="roleForm" :rules="rules" label-width="120px">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="roleForm.name" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="roleForm.description" />
        </el-form-item>
      </el-form>
      <!-- 底部 -->
      <el-row type="flex" justify="center">
        <el-col :span="8">
          <el-button size="small" @click="btnCancel">取消</el-button>
          <el-button size="small" type="primary" @click="btnOK">确定</el-button>
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 弹层 -->
    <el-dialog>
      <!-- 底部 -->
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <el-button
            type="primary"
            size="small"
            @click="btnOK"
          >确 定</el-button>
          <el-button size="small" @click="btnCancel">取 消</el-button>
        </el-col>
      </el-row>
    </el-dialog>

    <!-- 一个弹层 -->
    <el-dialog title="分配权限" :visible="showPermDialog" @click="btnPermCancel">
      <el-tree ref="permTree" :data="permData" :props="defaultProps" :show-checkbox="true" :check-strictly="true" :default-expand-all="true" node-key="id" :default-checked-keys="selectCheck" />
      <!-- 底部 -->
      <el-row slot="footer" type="flex" justify="center">
        <el-col :span="6">
          <el-button
            type="primary"
            size="small"
            @click="btnPermOK"
          >确 定</el-button>
          <el-button size="small" @click="btnPermCancel">取 消</el-button>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { getRoleList, getCompanyInfo, deleteRole, getRoleDetail, updateRole, addRole, assignPerm } from '@/api/setting'
import { mapGetters } from 'vuex'
import { getPermissionList } from '@/api/permission'
import { tranListToTreeData } from '@/utils'

export default {
  data() {
    return {
      list: [], // 承接数组
      page: {
      // 页码及相关数据
        page: 1,
        pagesize: 10,
        total: 0// 总数
      },
      showDialog: false,
      roleForm: {
        name: '',
        description: ''
      },
      rules: {
        name: [{ required: true, message: '角色，名称不能为空', trigger: 'blur' }]
      },
      formData: {
        // 公司信息
      },
      showPermDialog: false,
      roleId: null,
      permData: [],
      defaultProps: {
        label: 'name'
      },
      selectCheck: []
    }
  },
  computed: {
    ...mapGetters(['companyId'])
  },
  watch: {
    page: {
      deep: true, // 深度监听
      handler: function(val) {
        val = this.page
        if (val.total === (val.page - 1) * val.pagesize && val.total !== 0) {
          val.page -= 1
          this.getRoleList()
        }
      }
    }
  },
  created() {
    this.getRoleList()// 获取角色列表
    this.getCompanyInfo()// 获取公司信息
  },

  methods: {
    changePage(newPage) {
      this.page.page = newPage
      this.getRoleList()
    },
    async getRoleList() {
      const { total, rows } = await getRoleList(this.page)
      this.page.total = total
      this.list = rows
    },
    async getCompanyInfo() {
      this.formData = await getCompanyInfo(this.companyId)
    },
    async deleteRole(id) {
      try {
        await this.$confirm('确认删除该角色吗？')
        // 只有点击确定才能
        await deleteRole(id)
        this.getRoleList()// 重新加载
        this.$message.success('删除角色成功')
      } catch (error) {
        console.log(error)
      }
    },
    async editRole(id) {
      this.roleForm = await getRoleDetail(id)
      this.showDialog = true
    },
    btnCancel() {
      this.roleForm = {
        name: '',
        description: ''
      }
      // 移除校验
      this.$refs.roleForm.resetFields()
      this.showDialog = false
    },
    async btnOK() {
      try {
        await this.$refs.roleForm.validate()
        // 校验通过才会执行后面的代码
        // roleForm这个对象有id就是编辑，没有id就是新增
        if (this.roleForm.id) {
          await updateRole(this.roleForm)
        } else {
          await addRole(this.roleForm)
        }

        // 重新拉取数据
        this.getRoleList()
        console.log(this.getRoleList())
        this.$message.success('操作成功')
        this.showDialog = false
      } catch (error) {
        console.log(error)
      }
    },
    async assignPerm(id) {
      this.permData = tranListToTreeData(await getPermissionList(), '0') // 转化list到树形数据
      this.roleId = id
      // 应该去获取 这个id的 权限点
      // 有id 就可以 id应该先记录下来
      const { permIds } = await getRoleDetail(id) // permIds是当前角色所拥有的权限点数据
      this.selectCheck = permIds // 将当前角色所拥有的权限id赋值
      this.showPermDialog = true
    },
    async btnPermOK() {
      // console.log(this.$refs.roleForm.getCheckedKeys())
      await assignPerm({ permIds: this.$refs.permTree.getCheckedKeys(), id: this.roleId })
      this.$message.success('分配权限成功')
      this.showPermDialog = false
    },
    btnPermCancel() {
      this.selectCheck = []
      this.showPermDialog = false
    }
  }
}
</script>

<style>

</style>
