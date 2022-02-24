<!--这是一个公共的组件,前身是度量,但是后面发现散点图,列x,列Y,数值,都可以共用同一个模板,减少组件,使维护成本降到最低 -->
<template>
  <draggable
    v-model="oparateValue"
    v-bind="{ group: 'article', disabled: false }"
    class="dragArea11"
  >
    <div
      v-for="(element, index) in oparateValue"
      :key="index"
      class="list-complete-item"
    >
      <div class="list-complete-item-handle">
        <span>
          <i class="list-show-span">{{ element.text }}</i>
        </span>
        <i
          class="el-icon-close"
          @click="handleDel(index, oparateValue, 'oparateValue')"
        ></i>
      </div>
    </div>
  </draggable>
</template>
<script>
export default {
  name: 'DatasCreateTopDl',
  props: {
    cubeObject: {
      type: Object
    },
    vauleName: {
      type: String, // 这里传入代表的字段,可以是 'facts'
      default: 'facts'
    }
  },
  emits: ['setCloum'],
  data() {
    return {
      //   rend: 0
    }
  },
  computed: {
    oparateValue: {
      get() {
        console.log(
          JSON.parse(JSON.stringify(this.cubeObject[this.vauleName])),
          '获取的dims'
        )
        return JSON.parse(JSON.stringify(this.cubeObject[this.vauleName]))
      },
      set(val) {
        //   定义Z只能最多有一个,其他可以多
        if (this.vauleName === 'legend' && val.length > 1) {
          this.log('Z 最多只能放一个维度值')
          return
        }
        // 这里对放置的属性值做限定
        const tempLabel = this.cubeObject.tempLabel
        const arr = this.cubeObject[this.vauleName].map(item => item.text)
        // 只有拖拽增加时才有tempLabel
        console.log(val, arr, '666666666')

        if (tempLabel) {
          const tempName = tempLabel.text
          if (arr.includes(tempName)) {
            this.log(`请不要重复放置${tempName}！`)
            return
          }
          if (
            (this.vauleName === 'dims' || this.vauleName === 'legend') &&
            tempLabel.type !== 'text'
          ) {
            this.log('X 或者Z 只能放维度值')
            return
          } else if (this.vauleName === 'facts' && tempLabel.type === 'text') {
            this.log('Y 只能放度量值')
            return
          }
        }
        const copyVal = JSON.parse(JSON.stringify(val))
        // eslint-disable-next-line vue/no-mutating-props
        this.cubeObject[this.vauleName] = copyVal
        // eslint-disable-next-line vue/no-mutating-props
        this.cubeObject.tempLabel = null // 这里清空temp否则删除时会报错
        this.$nextTick(() => {
          // 一定是等顶部渲染完毕后再触发事件,计算高度,不然会有页面错乱的情况
          if (this.cubeObject.type === 'table') {
            this.$emit('setCloum')
          }
          // eslint-disable-next-line vue/no-mutating-props
          this.cubeObject.flag = true // 更新点,由于vue就近更新问题，还是用回更新点 gxb
          //   this.rend++
        })
      }
    },

    type() {
      return this.cubeObject.subtype
    }
  },
  methods: {
    log(text) {
      this.$message.warning(text)
      // eslint-disable-next-line vue/no-mutating-props
      this.cubeObject.tempLabel = null // 这里清空temp否则删除时会报错
    },
    /**
     * @desc    : 删除方法
     * @author  : mj
     */
    handleDel(index, datas, x) {
      //   console.log(index, datas, x, "444444444")
      datas.splice(index, 1)
      this[x] = datas
    }
  }
}
</script>
<style lang="scss">
.dragArea11 {
  display: inline-block;

  // height: auto !important;
  width: 80%;
  height: 60px;
}
.list-complete-item-handle {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 27px;
  padding: 0 10px;
  line-height: 27px;
  color: #fff;
  background: rgba(81, 130, 228, 1);
  border-radius: 4px;
  .list-show-span {
    margin: 0 8px;
  }
}
.list-complete-item {
  position: relative;
  display: inline-block;
  height: 35px;
  // width: 121px;
  margin-right: 30px;
  vertical-align: top;
  cursor: pointer;

  .el-icon-arrow-right {
    float: right;
    margin-top: 7px;
  }
}
</style>
