<!-- 通用形配置 -->
<template>
  <div>
    <el-form-item label="配置列表">
      <el-button size="mini" type="primary" @click="openCode"> 编辑 </el-button>
    </el-form-item>
    <monaco-editor
      v-model="code.obj"
      v-model:visible="code.box"
      :type="code.type"
      @submit="codeClose"
    />
  </div>
</template>

<script>
import MonacoEditor from '@/page/common/editor'
export default {
  components: {
    MonacoEditor
  },
  inject: ['main'],
  data() {
    return {
      code: {
        box: false,
        obj: {}
      }
    }
  },
  methods: {
    codeClose(value) {
      this.main.activeObj[this.code.type] = value
    },
    openCode() {
      this.code.type = 'dataFormatter'
      this.code.obj = this.main.activeObj[this.code.type]
      this.code.box = true
    }
  }
}
</script>
