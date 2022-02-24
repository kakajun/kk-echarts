<!--编辑资源视图 -->
<template>
  <div :key="reRenderIndex" style="height: 100%">
    <div class="layout-left-side">
      <!--新建资源左边栏 -->
      <left
        v-if="cubeObject"
        v-model:cube-object="cubeObject"
        :facts-arrs="factsArrs"
      />
    </div>
    <!-- 头部 渲染完成之后才能渲染主内容区域-->
    <top
      v-if="cubeObject"
      v-model:cube-object="cubeObject"
      @setCloum="setCloum"
    ></top>
    <div class="data-area-right">
      <area-right
        v-if="cubeObject"
        ref="areaRight"
        v-model:cube-object="cubeObject"
        @setCloum="setCloum"
      />
    </div>
    <el-button
      class="serchbtn"
      type="primary"
      icon="el-icon-search"
      @click="submit"
    >
      确定
    </el-button>
  </div>
</template>

<script>
import Left from './LeftMain' // 新建资源左边栏 By:jhb1
import Top from './TopTemp' // 资源区主页面的头部组件 By:ht
import AreaRight from './AreaRight' // 右边 By:ht
import computerMixin from './computerMixin'
export default {
  name: 'SourceEdit',
  components: { Left, Top, AreaRight },
  mixins: [computerMixin],
  props: {
    activeObj: {
      type: Object
    },
    factsArrs: {
      type: Array,
      default: () => []
    },
    cubeObject: {
      type: Object
    }
  },
  emits: ['postPrams'],
  data() {
    return {
      reRenderIndex: 1
    }
  },
  mounted() {
    // console.log(this.cubeObject, "cubeObjectcubeObjectcubeObject@@@@@@@@@@")
  },
  methods: {
    submit() {
      // 点击确定才真正改图形
      this.cubeObject.type = this.$refs.areaRight.activeName
      this.$emit('postPrams')
    },
    // 这里设置表格column
    setCloum() {
      const column = [...this.dims, ...this.facts]
      column.forEach(ele => {
        ele.label = ele.text
        ele.prop = ele.id
      })
      // console.log(column, this.dims, 'column设置表格')
      // eslint-disable-next-line vue/no-mutating-props
      this.activeObj.option.column = column
    }
    // handleChange(item) {
    //   this.tabtype = item.prop
    // },
    // handleClick(tab, event) {
    //   console.log(tab, event)
    // },
  }
}
</script>

<style lang="scss" scope>
.serchbtn {
  float: right;
  padding-top: 10px;
  margin: 30px 40px 0 0 !important;
}
.data-area-right {
  box-sizing: border-box;
}
.main-header {
  display: flex;
  border-bottom: 1px solid #ccc;
}
.layout-left-side {
  width: 100%;
}
</style>
