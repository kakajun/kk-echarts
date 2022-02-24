<template>
  <div class="company-tree-wrapper" :style="wrapperstyle">
    <el-input
      v-model="filterText"
      placeholder="输入关键字进行过滤"
      size="mini"
      suffix-icon="el-icon-search"
    ></el-input>
    <el-tree
      ref="navcomtree"
      class="company-tree"
      :data="companytreeData"
      check-on-click-node
      check-strictly
      :default-checked-keys="checked"
      :show-checkbox="showCheckbox"
      :filter-node-method="filterNode"
      accordion
      :default-expanded-keys="expandKeys"
      node-key="scode"
      :highlight-current="true"
      @check="getCheckedKeys"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>
<script>
export default {
  name: 'Companytree',
  props: {
    companytreeData: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 400
    },
    /* 默认没有多选 */
    showCheckbox: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Array,
      default: () => []
    }, // 默认选中
    company: {
      type: String,
      default: '1'
    },
    showCompanyDilog: {
      type: Boolean,
      default: false
    }
  },
  emits: ['checkedKeys', 'callchangecompany'],
  data() {
    return {
      selectedCompany: null,
      filterText: '',
      expandKeys: []
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
      this.$refs.navcomtree.filter(val)
    },
    companytreeData(val) {
      // 不能放到mounted,因为当时还没有数据
      this.expandKeys = [val[0].scode]
    }
  },
  async mounted() {
    // 默认高亮选择第一行
    this.$nextTick(function () {
      this.$refs.navcomtree.setCurrentKey(this.company) // "reportTree"是你自己在树形控件上设置的 ref="reportTree" 的名称
    })
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },

    handleNodeClick(e) {
      // 父组件通过这个获取该选项 this.$refs.refcompany.selectedCompany
      this.selectedCompany = e
      this.$emit('callchangecompany')
    },
    getCheckedKeys(data, { checkedKeys, checkedNodes }) {
      this.$emit('checkedKeys', checkedKeys, checkedNodes)
      // console.log(checkedKeys,checkedNodes,"vvvvvvvvvbbbbbbbb");
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
.is-current > :deep(.el-tree-node__content) {
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
