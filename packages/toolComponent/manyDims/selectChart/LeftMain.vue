<!--mj 新建资源区左侧 by ht -->
<template>
  <div class="view DatasCreateLeft">
    <el-scrollbar class="scrollbar--hidden-x">
      <div class="title">维度</div>
      <datasCreateLeftGrag
        v-slot="{ element }"
        :get-date-text="dims"
        :cube-object="cubeObject"
      >
        <div v-if="element.type == 'text'" class="add-dimension">
          <i class="iconfont icon-text"></i>
          <span class="dimensionPoint">{{ element.text }}</span>
        </div>
        <div v-if="element.type == 'date'" class="add-dimension">
          <i class="iconfont table_shijiantubiaotubiao"></i>
          <span style="margin-left: 6px">{{ element.text }}</span>
        </div>
      </datasCreateLeftGrag>
      <div class="title">度量</div>
      <datasCreateLeftGrag
        v-slot="{ element }"
        :get-date-text="factsArrs"
        :cube-object="cubeObject"
      >
        <div v-if="element.type == 'number'">
          <i class="iconfont icon-bar"></i>
          <el-tooltip
            v-if="element.text.length > 15"
            class="item"
            effect="dark"
            :content="element.text"
            placement="right-start"
          >
            <el-button class="tooltip-btn">
              {{ element.text }}
            </el-button>
          </el-tooltip>
          <span v-else class="dimensionPoint">{{ element.text }}</span>
        </div>
      </datasCreateLeftGrag>
    </el-scrollbar>
  </div>
</template>
<script>
import datasCreateLeftGrag from './LeftDrag' // 公共拖拽组件
export default {
  name: 'DatasCreateLeft',
  components: {
    datasCreateLeftGrag
  },
  props: {
    cubeObject: {
      type: Object
    },
    factsArrs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dims: [
        { id: 'company_name', text: '公司', type: 'text', width: null },
        { id: 'period_name', text: '期间', type: 'text', width: null },
        { id: 'item_name', text: '指标', type: 'text', width: null }
      ]
    }
  },
  computed: {}
}
</script>
<style lang="scss" scoped>
.title {
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: rgba(52, 77, 127, 1);
}
// 新建资源区左侧
.DatasCreateLeft {
  flex-direction: column;
  background-color: #fff;
}

// 去掉默认浏览器选中文字的样式
*::selection {
  background: none;
}

*::-moz-selection {
  background: none;
}

*::-webkit-selection {
  background: none;
}

.el-button {
  padding: 0;
  color: #626c7f !important;
  background: none;
  border: none;
  outline: none;
  span {
    width: 190px !important;
    color: #626c7f;
  }
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-icon-plus {
  margin-left: 75%;
}

.aside-top {
  padding: 0;
}

.draggable-div {
  display: inline-block;
}

.datas-create-left-ul div {
  height: 32px;
  font-size: 14px;
  line-height: 32px;
  cursor: pointer;
}

.datas-create-left-ul div:hover {
  background: rgba(232, 240, 250, 1);
  border-right: 2px solid rgba(81, 130, 228, 1);
}

.dimensionPoint {
  margin-left: 10px;
  cursor: pointer;
}
.text-icon {
  margin-right: 12px;
  color: #5182e4;
}
.text-icon-active {
  margin-right: 14px;
  color: #5182e4;
}
</style>
