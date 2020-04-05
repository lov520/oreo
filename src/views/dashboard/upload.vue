<template>
  <el-dialog
    :visible="visible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :title="'上传文件'"
    append-to-body
    destroy-on-close
    width="800px"
    custom-class="com-upload-dialog"
    @close="handleClose"
  >
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-success="handleSuccess"
      :on-error="handleError"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleClose">取 消</el-button>
      <el-button size="small" type="primary" @click="handleSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>

export default {
  data() {
    return {
      visible: false,
      fileList: []
    }
  },
  created() {
  },
  mounted() {
    this.visible = true
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    handleSubmit() {
      this.$emit('sure')
    },
    handleSuccess(res) {

    },
    handleError() {

    }
  }
}
</script>

<style lang="scss">
.com-upload-dialog {
  .el-dialog__body {
    max-height: 600px;
    overflow: auto;
  }
}
</style>
