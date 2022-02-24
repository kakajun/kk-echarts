<!-- 表格配置 -->
<template>
  <div>
    <el-form-item label="开启滚动">
      <el-switch v-model="main.activeOption.scroll"> </el-switch>
    </el-form-item>

    <template v-if="main.activeOption.scroll">
      <el-form-item label="滚动时间">
        <avue-input-number v-model="main.activeOption.scrollTime">
        </avue-input-number>
      </el-form-item>
      <el-form-item label="滚动行数">
        <avue-input-number v-model="main.activeOption.scrollCount">
        </avue-input-number>
      </el-form-item>
    </template>
    <el-form-item label="开启排名">
      <el-switch v-model="main.activeOption.index"></el-switch>
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="表头设置">
        <el-form-item label="开启显隐">
          <el-switch v-model="main.activeOption.columnShow"> </el-switch>
        </el-form-item>
        <el-form-item label="详情显隐">
          <el-switch v-model="main.activeOption.columnViews"> </el-switch>
        </el-form-item>
        <el-form-item label="背景">
          <el-color-picker
            v-model="main.activeOption.headerBackground"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
        <el-form-item label="字体颜色">
          <el-color-picker
            v-model="main.activeOption.headerColor"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="表格设置">
        <el-form-item label="字体大小">
          <avue-input-number v-model="main.activeOption.fontSize">
          </avue-input-number>
        </el-form-item>
        <el-form-item label="显示行数">
          <avue-input-number v-model="main.activeOption.count">
          </avue-input-number>
        </el-form-item>
        <el-form-item label="开启下边框">
          <el-switch v-model="main.activeOption.showBorder"> </el-switch>
        </el-form-item>
        <el-form-item label="边框颜色">
          <el-color-picker
            v-model="main.activeOption.borderColor"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
        <el-form-item label="字体颜色">
          <el-color-picker
            v-model="main.activeOption.bodyColor"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
        <el-form-item label="奇行颜色">
          <el-color-picker
            v-model="main.activeOption.nthColor"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
        <el-form-item label="偶行颜色">
          <el-color-picker
            v-model="main.activeOption.othColor"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
        <el-form-item label="激活颜色">
          <el-color-picker
            v-model="main.activeOption.selectClor"
            show-alpha
            type="textarea"
          >
          </el-color-picker>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="表格列设置">
        <avue-crud
          :option="tableOption"
          :data="main.activeOption.column"
          @row-save="rowSave"
          @row-del="rowDel"
          @row-update="rowUpdate"
        ></avue-crud>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Table',
  inject: ['main'],
  data() {
    return {
      tableOption: {
        menuWidth: 150,
        refreshBtn: false,
        columnBtn: false,
        labelWidth: 100,
        column: [
          {
            label: '名称',
            prop: 'label'
          },
          {
            label: 'key值',
            prop: 'prop'
          },
          {
            label: '宽度',
            prop: 'width'
          }
        ]
      }
    }
  },
  methods: {
    rowSave(row, done) {
      this.main.activeOption.column.push(row)
      done()
    },
    rowDel(row, index) {
      this.main.activeOption.column.splice(index, 1)
    },
    rowUpdate(row, index, done) {
      this.main.activeOption.column.splice(index, 1, row)
      done()
    }
  }
}
</script>
