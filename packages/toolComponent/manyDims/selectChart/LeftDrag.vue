<template>
  <!--展现维度度量 这个是编辑侧边栏公共需要拖拽的组件 -->
  <draggable
    :list="getDateText"
    :options="{
      group: { name: 'article', pull: 'clone', handle: '.handle', put: false },
      filter: '.undraggable',
      sort: false,
      animation: 60
    }"
    :move="getdata"
  >
    <div
      v-for="element in getDateText"
      :key="element.index"
      :class="{ undraggable: element.flag }"
      class="list-complete-item datas-create-left-ul"
    >
      <slot :element="element"></slot>
    </div>
  </draggable>
</template>

<script type="text/ecmascript-6">

export default {
  name: '',
  props: {
    getDateText: {
      type: Array,
      default: () => []
    },
    cubeObject: {
      type: Object
    },
  },
  methods: {
    // 获取拖动后的块的数据
    /**
    * @desc    : 拖拽多表头时重要方法,把拖拽项存到vuex,一级拖拽用不到
    * @author  : mj
    * @creatdate : 2019-06-20
    * @upDate  :
    */
    getdata(evt) {
      const ele = evt.draggedContext.element
      this.cubeObject.tempLabel = ele// 改为tempLabel，并存到cubeObject中 gxb
      // console.log(this.cubeObject.tempLabel = ele, " this.cubeObject.tempLabel = ele")
    }
  }
}
</script>
<style lang="scss" scoped>
.list-complete-item {
  position: relative;
  display: inline-block;
  height: 35px;
  margin-right: 10px;
  vertical-align: top;
  cursor: pointer;

  .el-icon-arrow-right {
    float: right;
    margin-top: 7px;
  }

  .childrenLable {
    color: rgba(81, 130, 228, 1) !important;
    background: #fff !important;
    border: dashed 1px;
  }
}
.datas-create-left-ul div {
  padding-left: 24px;
  color: rgba(98, 108, 127, 1);
  span {
    width: 198px;
    overflow: hidden;
    color: #626c7f;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
  }
  .tooltip-btn {
    padding: 0;
    background: none;
    border: none;
    outline: none;
    span {
      display: inline-block;
      margin-left: 0;
    }
  }
  .tooltip-btn:hover {
    color: #626c7f !important;
  }
}
</style>
