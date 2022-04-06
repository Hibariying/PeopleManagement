<template>
  <div>
    <el-upload
      :before-upload="beforeUpload"
      :on-preview="preview"
      :on-remove="handleRemove"
      :on-change="changeFile"
      :file-list="fileList"
      list-type="picture-card"
      :limit="1"
      action="#"
      :class="{disabled:fileComputed}"
      :http-request="upload"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <!-- 进度条 -->
    <el-progress v-if="showPercent" style="width: 180px" :percentage="percent" />
    <!-- 弹层 -->
    <el-dialog title="图片" :visible.sync="showDialog">
      <img :src="imgUrl" alt="" style="width:100%">
    </el-dialog>
  </div>
</template>

<script>
import COS from 'cos-js-sdk-v5'// 引入腾讯云的包
// 实例化腾讯云的包
const cos = new COS({
  SecretId: 'AKIDTlodDXcT4QWMdfT2MQFo8C3g3B3f2A3h',

  SecretKey: 'RdZGiwud6JI1UhgPs65oHUSAdqpZ4JJ4'
})
export default {
  data() {
    return {
      fileList: [], // 图片地址设置为数组
      showDialog: false, // 控制显示弹层
      imgUrl: '',
      currentFileUid: null,
      percent: 0,
      showPercent: false
    }
  },
  computed: {
    // 判断是否已经上传完了一张
    fileComputed() {
      return this.fileList.length === 1
    }
  },
  methods: {
    // 弹层
    preview(file) {
      this.imgUrl = file.url
      this.showDialog = true
    },
    // 删除图片
    handleRemove(file, fileList) {
      // console.log('handleRemove的file是：')
      // console.log(file)
      // 新的数组 = 新的数组的uid不等于原来的id
      this.fileList = this.fileList.filter(item => item.uid !== file.uid)
    },
    changeFile(file, fileList) {
      // console.log(123 + file)
      // console.log('changeFile的fileList是：')
      // console.log(fileList)
      //
      this.fileList = fileList.map(item => item)
    },

    // 上传之前检查文件的类型和大小
    beforeUpload(file) {
      const types = ['image/jpeg', 'image/gif', 'image/bmp', 'image/png']
      if (!types.some(item => item === file.type)) {
        this.$message.error('上传的图片格式错误')
        return false
      }

      const maxSize = 5 * 1024 * 1024// 5M
      if (file.size > maxSize) {
        this.$message.error('上传图片过大')
        return false
      }
      this.currentFileUid = file.uid
      this.showPercent = true
      // 检查合格，返回true，不然为undefined
      return true
    },

    // 上传操作
    upload(params) {
      console.log('this is upload`s params:')
      console.log(params)
      if (params.file) {
        cos.putObject({
          Bucket: 'ly-hibariying-1310488767', // 存储桶
          Region: 'ap-beijing', // 地域
          Key: params.file.name, // 文件名
          Body: params.file, // 要上传的文件对象
          StorageClass: 'STANDARD', // 上传的模式类型 直接默认 标准模式即可
          // 上传到腾讯云 =》 哪个存储桶 哪个地域的存储桶 文件  格式  名称 回调
          onProgress: (params) => {
            this.percent = params.percent * 100
          }
        }, (err, data) => {
          // console.log(err || data)
          if (!err && data.statusCode === 200) {
            this.fileList = this.fileList.map(item => {
              if (item.uid === this.currentFileUid) {
                // console.log(data.Location)
                return { url: 'http://' + data.Location, upload: true }
              }
              return item
            })

            // console.log('this.fileList')
            // console.log(this.fileList)
            setTimeout(() => {
              this.showPercent = false // 隐藏进度条
              this.percent = 0 // 进度归0
            }, 2000)
          }
        })
      }
    }
  }

}
</script>

<style>
.disabled .el-upload--picture-card {
  display: none
}
</style>
