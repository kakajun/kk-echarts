<template>
  <div :style="wrapperstyle" class="company-tree-wrapper">
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行过滤"
      size="mini"
      suffix-icon="el-icon-search"
    />
    <el-tree
      ref="treedata"
      class="company-tree"
      :data="treeData"
      show-checkbox
      node-key="id"
      :auto-expand-parent="true"
      :expand-on-click-node="true"
      :check-on-click-node="true"
      :default-checked-keys="checkedIndex"
      :default-expanded-keys="checkedIndex"
      :check-strictly="false"
      accordion
      :props="defaultProps"
      :filter-node-method="filterNode"
      @check="getCheckedNode"
    >
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'Measureselect',
  props: {
    width: {
      type: Number,
      default: 400
    },
    checkedIndex: {
      type: Array,
      default: () => []
    },
    treeData: {
      type: Array,
      default: () => []
    }
  },
  emits: ['setIndexParams'],
  data() {
    return {
      defaultProps: { children: 'children', label: 'sname' },
      filterText: '' // 搜索指标值
    }
  },
  computed: {
    wrapperstyle() {
      return {
        width: this.width + 10 + 'px',
        overflow: 'auto' // 哪里给宽度就哪里给overflow
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.treedata.filter(val)
    }
  },
  methods: {
    // 搜索过滤
    filterNode(value, data) {
      if (!value) return true
      return data.sname.indexOf(value) !== -1
    },
    // 选择指标
    getCheckedNode(checkedNode, { checkedKeys, halfCheckedNodes }) {
      console.log(checkedNode, 'checkedNode')
      this.$emit('setIndexParams', checkedKeys, checkedNode, halfCheckedNodes)
    }
  }
}
</script>

<style lang="scss" scoped>
.company-tree {
  height: 90%;
  padding-top: 10px;
}
:deep(.el-tree-node__label) {
  font-size: 16px;
}
:deep(.el-tree-node) {
  padding-bottom: 3px;
}
.el-tree-node__expand-icon {
  border: 0;
}
:deep(.el-dialog__body) {
  padding: 10px 20px !important;
}
.is-current > .el-tree-node__content {
  background-color: #ddd !important;
}
.el-tree-node.is-current > :deep(.el-tree-node__content) {
  color: #fff;
  background-color: #3b63b0;
}
.company-tree-wrapper {
  box-sizing: border-box;
}
</style>
