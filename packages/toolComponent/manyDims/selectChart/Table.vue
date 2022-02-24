<template>
  <!-- 本组件只供数据源表格展示,仅仅简单的数据展示,不接受其他块使用  mj 2019/9/19-->
  <div>
    <el-table
      class="source-table"
      :data="datas"
      border
      style="width: 100%; height: 100%"
      highlight-current-row
    >
      <slot name="first"></slot>
      <el-table-column
        v-for="col of columns"
        :key="col.id"
        sortable
        :prop="col.id"
        :label="col.text"
        :min-width="columnsWidth(col)"
        :align="aligner(col)"
        header-align="center"
      >
      </el-table-column>
      <slot></slot>
      <slot name="last"></slot>
    </el-table>
  </div>
</template>
<script type="text/ecmascript-6">
import common from '@s/mixins/common.js'

import computerMixin from './computerMixin'
export default {
  name: 'SourceTable',
  mixins: [computerMixin, common],
  props: {
    cubeObject: {
      type: Object
    },
  },
  computed: {
    columns() {
      return [...this.dims, ...this.facts]
    }
  },
  methods: {
    /**
     * @desc    : 根据type类型判断是靠左还是靠右,当然也可以直接传aligner属性
     * @param   col   每一项
     * @author  : mj
     */
    aligner(col) {
      if (col.aligner) {
        return col.aligner
      }
      switch (col.type) {
        case 'index':
          return 'center'
        case 'string':
          return 'left'
        case 'number':
          return 'right'
        case 'date':
          return 'center'
        case 'normal':
          return 'center'
        default:
          break
      }
    },
    /**
     * @desc    : 根据type类型判断列宽,当然也可以直接传width
     * @param   {}
     * @param   {}
     * @author  : mj
     */
    columnsWidth(col) {
      if (col.width) {
        return col.width
      }
      switch (col.type) {
        case 'index':
          return 80
        case 'string':
          return 150
        case 'number':
          return 120
        case 'decimal':
          return 140
        case 'date':
          return 120
        case 'normal':
          return 120
        default:
          break
      }
    }
  }

}
</script>
<style lang="scss" scoped>
/* ***********表格相关*************************** */

.el-table__header-wrapper :deep(th.is-leaf) {
  font-weight: bold;
  color: rgba(98, 108, 127, 1);
  background: rgba(222, 227, 236, 1);
}

:deep(.el-table th > .cell) {
  height: 30px !important;
  line-height: 30px;
  color: #2a2f38;
  text-align: center;
  // font-weight: normal;
}

.el-table :deep(.cell) {
  padding: 0 8px !important;
  //font-size: 12px;
}

.el-table--striped .el-table__body :deep(tr) .el-table__row--striped :deep(td) {
  background: rgba(243, 246, 251, 1);
}

.el-table--border :deep(td, th) {
  border-bottom: 1px solid #b3bdce !important;
  border-left: 1px solid #b3bdce !important;
}

.el-table--border :deep(td:last-child) {
  border-right: 1px solid #b3bdce !important;
}

:deep(.el-table--border) {
  border-left: none;
}

:deep(.el-table--border::after, .el-table--group::after, .el-table::before) {
  background: none;
}
.el-table :deep(td),
.el-table th {
  padding: 0 0 !important;
}
:deep(.el-table td, .el-table th) {
  height: 28px !important;
  padding: 0 0 !important;
}

:deep(.el-table--striped .el-table__body) {
  background-color: transparent;
}

:deep(.el-table) {
  color: #626c7f;
  background: none;
  border-top: 1px solid #b3bdce !important;
  .el-table__row {
    height: 28px;
  }
}
</style>
