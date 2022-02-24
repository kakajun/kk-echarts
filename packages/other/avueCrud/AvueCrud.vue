<template>
  <div>
    <el-button class="top-btn" size="mini" type="primary" @click="handleAdd"
      >Add</el-button
    >
    <el-table
      :border="option.border"
      :stripe="option.stripe"
      :size="option.size"
      ref="mytable"
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="option.index"
        type="index"
        width="50"
      ></el-table-column>
      <el-table-column
        v-if="option.selection"
        type="selection"
        width="55"
      ></el-table-column>
      <el-table-column
        v-for="(item, index, key) in option.column"
        :key="key"
        align="center"
        :item="item"
        :width="item.width"
        :index="index"
        :label="item.label"
      >
        <template #default="scope">
          <div v-if="scope.row.edit">
            <!-- 如果选择类型是颜色 -->
            {{ scope.row[item.type] }}
            <el-color-picker
              v-if="item.type && item.type === 'color'"
              v-model="scope.row[item.prop]"
            ></el-color-picker>
            <el-input
              v-else
              v-model="scope.row[item.prop]"
              size="small"
              :placeholder="'请输入' + item.label"
            ></el-input>
          </div>

          <span v-if="!scope.row.edit">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <!-- 全局控制的编辑 -->
          <div
            v-if="isEdit && scope.row.add == undefined"
            style="display: inline-block"
          >
            <!-- 编辑 -->
            <el-button
              v-if="!scope.row.edit"
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <!-- 保存 -->
            <el-button
              v-if="scope.row.edit"
              size="mini"
              type="success"
              :plain="true"
              @click="handleSave(scope.$index, scope.row)"
              >Save</el-button
            >
          </div>
          <!-- 添加控制 -->
          <div
            v-if="scope.row.add != undefined && scope.row.add"
            style="display: inline-block"
          >
            <!-- 保存 -->
            <el-button
              v-if="scope.row.edit"
              size="mini"
              type="success"
              :plain="true"
              @click="handleSave(scope.$index, scope.row)"
              >Save</el-button
            >
          </div>
          <!-- 全局控制删除 -->
          <el-button
            v-if="isDelete && scope.row.add == undefined"
            size="mini"
            :plain="true"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Del</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'AvueCrud',
  props: {
    isEdit: {
      //是否可编辑
      type: Boolean,
      default: true
    },
    isDelete: {
      //是否可删除
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default: () => {
        return {
          border: true, //边框
          stripe: true,
          showHeader: this.showHeader,
          index: false,
          size: 'small',
          selection: false,
          column: [
            {
              prop: 'date',
              label: '日期',
              width: '150'
            },
            {
              prop: 'name',
              label: '姓名',
              width: '150'
            },
            {
              prop: 'sex',
              label: '年龄',
              width: '150'
            },
            {
              prop: 'province',
              label: '省份',
              width: ''
            },
            {
              prop: 'city',
              label: '城市',
              width: '150'
            },
            {
              prop: 'address',
              label: '地址',
              width: '150'
            }
          ]
        }
      }
    },
    //表格数据
    data: {
      //是否可删除
      type: Array,
      default: () => {
        return [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333,
            sex: 18
          },
          {
            date: '2016-05-02',
            sex: 18,
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }
        ]
      }
    }
  },
  data() {
    return {
      newDateJson: {}, //数据结构
      multipleSelection: [], //复选框，数据
      radio: false, //单选变色
      spaceColor: true //隔行变色
    }
  },
  watch: {
    spaceColor() {
      //监听数据变化
      this.$nextTick(() => this.tableRowClassName())
    },
    data() {
      //监听数据变化f
      this.$nextTick(() => this.tableRowClassName())
    }
  },
  mounted() {
    this.initEditAttribute()
    //确保方法在页面渲染后调用
    this.$nextTick(() => this.tableRowClassName())
  },
  methods: {
    //隔行变色
    tableRowClassName() {
      //选取DOM节点
      const trs = this.$refs.mytable.$el
        .getElementsByTagName('tbody')[0]
        .getElementsByTagName('tr')
      for (const i in trs) {
        if (i % 2 == 0) {
          //当隔行变色未true时改变颜色
          if (this.spaceColor) {
            trs[i].style.backgroundColor = '#f0f9eb'
          } else {
            trs[i].style.backgroundColor = ''
          }
        }
      }
    },
    //多选框
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log('selection:', this.multipleSelection)
    },
    //编辑
    handleEdit(index, row) {
      console.log(index, row)
      row.edit = true
    },
    //删除
    handleDelete(index, row) {
      console.log(index, row)
      this.data.splice(index, 1)
      this.$message({
        message: '删除成功！',
        type: 'success'
      })
    },
    //保存
    handleSave(index, row) {
      console.log(index, row)
      row.edit = false
      delete this.data[index].add
      this.$message({
        message: '保存成功！',
        type: 'success'
      })
    },
    handleAdd() {
      const addDataJson = {}
      for (const key in this.newDateJson) {
        if (key === 'edit') {
          delete addDataJson[key]
        } else if (key === 'add') {
          delete addDataJson[key]
        } else {
          addDataJson[key] = ''
        }
      }
      addDataJson.edit = true
      addDataJson.add = true
      this.data.push(addDataJson)
    },
    //初始化编辑属性
    initEditAttribute() {
      if (this.data.length > 0) {
        //添加编辑事件
        for (const index in this.data) {
          this.data[index]['edit'] = false
        }
        if (Object.keys(this.newDateJson).length === 0) {
          //新增时，初始化数据结构
          this.initAddDataJson(this.data[0])
        }
      }
      console.log('this.data:', this.data)
    },
    initAddDataJson() {
      //新增时，初始化数据结构
      const dataJson = this.data
      const newDateJson = {}
      for (const key in dataJson) {
        key === 'edit' ? (newDateJson[key] = 'true') : (newDateJson[key] = '')
      }
      newDateJson['add'] = true
      this.newDateJson = newDateJson
    }
  }
}
</script>
<style scoped>
.top-btn {
  float: left;
}
</style>
