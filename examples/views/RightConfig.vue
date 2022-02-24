<template>
  <!-- 右侧工具栏 -->
  <div style="transform: transateX(17px)">
    <p class="title">操作</p>
    <el-tabs v-model="tabsActive" class="tabs optTabs" stretch>
      <el-tab-pane name="0">
        <el-tooltip effect="dark" content="配置" placement="top">
          <div>
            <i class="el-icon-setting" />
          </div>
        </el-tooltip>
        <el-form
          label-width="120px"
          label-position="left"
          size="mini"
          class="formCustomStyle"
        >
          <!-- 组件配置 -->
          <p class="title" style="padding-top: 4px">
            {{ activeObj.title }}
          </p>
          <el-form-item
            v-if="isDebugging === 'debugFuncIsAllowed'"
            label="获取option参数"
          >
            <el-button @click="copyToClipboard"> 一键复制 </el-button>
            <el-button @click="monacoShow"> 编辑 </el-button>
          </el-form-item>
          <el-form-item label="组件名称">
            <div>{{ main.activeObj.component.prop }}</div>
          </el-form-item>

          <main-option />
          <component :is="componentName" :option="activeObj.option" />
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
// import * as monaco from 'monaco-editor'
// import option from '../../lib/option/option.es.js'
import option from '@/option.js'
export default {
  name: 'Rightconfig',
  inject: ['main'],
  components: option,
  props: {
    activeObj: {
      type: Object
    }
  },
  data() {
    return {
      tabsActive: '0',
      monacoVisible: false
      // monaco: monaco,
      // code: ''
    }
  },
  mounted() {
    // console.log(option, '6666666666666')
  },
  computed: {
    code() {
      return JSON.stringify(this.activeObj.option)
    },
    componentName() {
      return this.activeObj.component.prop + '-option'
    },
    isDebugging() {
      // console.log(sessionStorage.isDebugging, 'sessionStorage.isDebugging')
      // this.code =
      return sessionStorage.isDebugging
    }
  },
  watch: {},
  methods: {
    monacoShow() {
      // console.log(this, 'this')
      this.monacoVisible = true
    },
    handleClose(done) {
      done()
    },
    dialogSaveOptions() {
      this.activeObj.option = JSON.parse(this.code)
      this.monacoVisible = false
    },
    copyToClipboard() {
      this.$Clipboard({
        text: JSON.stringify(this.activeObj.option)
      })
        .then(() => {
          this.$message.success('复制成功')
        })
        .catch(() => {
          this.$message.error('复制失败')
        })
    }
  }
}
</script>
