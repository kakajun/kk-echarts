<template>
  <!-- 注意,这里面的xmlns,width ,height都必须保留,否则导出图片会不全,原因未知!!!  mj  2021/3/6-->
  <svg
    :style="style"
    :fill="option.fillColor"
    viewBox="0 0 1024 1024"
    :preserveAspectRatio="option.preserveAspectRatio"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="200"
    height="200"
    @click="handleOpen"
    v-html="svgCode"
  ></svg>
</template>

<script>
import divCommon from '@s/mixins/divCommon.js'
export default {
  name: 'Shape', // 必须加名称
  mixins: [divCommon],
  emits: ['handleOpen'],
  data() {
    return {
      svgCode: ''
    }
  },

  computed: {
    remoteJSAddress() {
      return this.option.remoteJSAddress
    },
    iconName() {
      return this.option.iconName
    }
  },
  watch: {
    remoteJSAddress() {
      if (this.remoteJSAddress) this.getJS(this.remoteJSAddress)
    },
    iconName() {
      if (this.remoteJSAddress) this.getJS(this.remoteJSAddress)
    }
  },
  mounted() {
    if (this.remoteJSAddress) this.getJS(this.remoteJSAddress)
  },
  methods: {
    handleOpen() {
      this.$emit('handleOpen')
    },
    // 获取源文件, 这里说明下rollup里面sync打包不正常,这里换成.then的形式
    getJS(param) {
      this.$axios.get('/iconfont' + param).then(res => {
        this.AnalyseJS(res.data || res)
      })
    },
    // 获取code
    AnalyseJS(p) {
      let svgCode
      let getId
      let matched = false
      const tmp = p.match(/(?<=<svg>).*?(?=<\/svg>)/) // 只截取svg标签之间的内容
      if (tmp) {
        tmp.toString().replace(/<symbol.*?<\/symbol>/g, match => {
          match.toString().replace(/(?<=id=").*?(?=")/g, match1 => {
            getId = match1 // 拿id的内容
          })
          if (getId === this.iconName) {
            match.toString().replace(/<path.*<\/path>/g, match2 => {
              svgCode = match2.replace('"  >', '">').replace(/fill=".*?"/g, '')
              // 拿<path></path>,删除自带的fill颜色设置
            })
            matched = true
          }
          // console.log(getId, this.option.iconName, 'getId')
        })
      }
      // 如果上面都没获取到匹配的,走这里
      if (!matched) svgCode = ''
      this.svgCode = svgCode
    }
  }
}
</script>
<style lang="scss" scoped>
.app {
  height: 100vh;
  background-color: #f8f8f8;
}

.activity-tab {
  display: flex;
  overflow: auto;
}

.activity-tab__item {
  .bb {
    background: #000;
  }
  // width: 160px;
  height: 60px;
  padding: 0 28px;
  margin-left: 24px;
  line-height: 60px;
  text-align: center;
  white-space: nowrap;
  background: #fff;
  border-radius: 30px;

  &.active {
    color: #fff;
    background: linear-gradient(179deg, rgba(246, 154, 82, 0) 0%, #ff6142 100%);
  }
}

// .title {
// transform: rotate(45deg);
// }
</style>
