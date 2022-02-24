<template>
  <el-container>
    <!-- 头部 -->
    <el-header class="top">
      <el-row>
        <el-col :span="12">
          <div class="top-content">组件库</div>
        </el-col>
      </el-row>
    </el-header>
    <el-container style="height: 100%">
      <!-- 侧边栏 -->
      <el-aside>
        <Aside />
      </el-aside>
      <div id="container"></div>
      <!-- 内容区 -->
      <el-main>
        <div v-if="activeObj.option" class="wrapper__grade">
          <!-- <avue-crud :option="option" :data="data"></avue-crud> -->
          <!-- <avue-radio v-model="selectData" :dic="selectList"></avue-radio> -->
          <div
            v-if="!toolList.includes(activeObj.component.prop)"
            :style="'width:' + width"
          >
            <component
              :is="componentName"
              :data="activeObj.data"
              :width="activeObj.component.width"
              :height="activeObj.component.height"
              :option="activeObj.option"
            />
          </div>
          <div v-else :style="'width:' + width">
            <el-button type="text" @click="visibleDia = true"
              >点击打开 Dialog</el-button
            >
            <AvueCountUp
              v-if="activeObj.component.prop === 'avuecountup'"
              :end="50000"
              :style="copustyle"
            ></AvueCountUp>

            <!-- <MonacoEditor :editorValue="activeObj.code" @change="onChange" /> -->
            <!-- <editor
              v-if="activeObj.component.prop === 'editor' && visibleDia"
              v-model:visibleDia="visibleDia"
              :modelValue="activeObj.code"
              :monaco="monaco"
              :showTips="true"
              :language="activeObj.language"
              @submit="codeClose"
            /> -->
            <!-- <monacoeditors
              v-if="activeObj.component.prop === 'monacoeditors'"
              v-model="activeObj.code"
              :monaco="monaco"
              :theme="activeObj.option.theme"
              :height="500"
            ></monacoeditors> -->
            <animationedit
              v-if="activeObj.component.prop === 'animationedit'"
            ></animationedit>
            <!-- <manydims
              v-if="activeObj.component.prop === 'manydims'"
              :companytreeData="[]"
              :measureOptions="[]"
              :baseList="[]"
              :treeData="[]"
              :visibleDia.sync="visibleDia"
              :activeObj="{}"></manydims> -->

            <avue-echart-flaymap
              v-else-if="flag && activeObj.component.prop === 'flaymap'"
              :option="activeOption"
              :data="apiData"
            />
            <avue-sketch-rule
              v-if="flag && activeObj.component.prop === 'AvueSketchRule'"
              ref="sketchRule"
              :palette="palette"
              v-model="scale"
              :ruleWidth="ruleWidth"
              :config="config"
            ></avue-sketch-rule>
            <avue-select
              v-if="flag && activeObj.component.prop === 'AvueSelect'"
              v-model="selectData"
              style="width: 100%"
              :dic="selectList"
            />
            <div v-else>
              {{ '什么组件都没有' }}
            </div>
          </div>
          <div class="params" :style="styheight">
            <right-config v-if="!activeObj.isTools" :active-obj="activeObj" />
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Aside from './LeftAside.vue' // 导入组件
import RightConfig from './RightConfig.vue'
import toolList from './toolList'
import base from '../option/base'
import 'echarts-liquidfill'
// import * as monaco from 'monaco-editor'
// import { monaco } from './customMonaco.js'
// import MonacoEditor from './MonacoEditor.vue'

export default {
  name: 'MainView',
  components: {
    RightConfig,
    Aside
    // MonacoEditor
  },
  provide() {
    return {
      // monaco,
      main: this
    }
  },
  //
  data() {
    return {
      display: false,
      currentTab: { value: 'javascript' },
      po: '',
      config: {
        width: 500,
        height: 500
      },
      scale: 1,
      ruleWidth: 500,
      /* 标尺用的 */
      palette: {
        bgColor: '#181b24', // ruler bg color
        longfgColor: '#BABBBC', // ruler longer mark color
        shortfgColor: '#9C9C9C', // ruler shorter mark color
        fontColor: '#DEDEDE', // ruler font color
        shadowColor: '#525252', // ruler shadow color
        lineColor: '#EB5648',
        borderColor: '#B5B5B5',
        cornerActiveColor: '#fff'
      },
      option: {
        border: true, //边框
        stripe: true,
        showHeader: this.showHeader,
        index: false,
        size: 'medium',
        selection: false,
        column: [
          {
            prop: 'date',
            type: 'color',
            label: '日期',
            width: '250'
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
      },
      //表格数据
      data: [
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
      ],

      selectData: '选项1',
      selectList: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        }
      ],
      flag: false,
      visibleDia: true,
      // monaco,
      toolList,
      base,
      activeObj: {},
      apiData: {
        geoCoordMap: {
          // 可以在地图上显示的城市的坐标信息
          安徽省铜陵: [117.81154, 30.945515],
          长春: [125.8154, 44.2584],
          长沙: [113.0823, 28.2568],
          贵阳: [106.6992, 26.7682],
          杨凌: [109.1162, 34.2004],
          深圳: [114.5435, 22.5439],
          济南: [117.1582, 36.8701],
          海口: [110.3893, 19.8516],
          沈阳: [123.1238, 42.1216],
          武汉: [114.3896, 30.6628],
          红安: [114.23, 31.1],
          昆明: [102.9199, 25.4663],
          杭州: [119.5313, 29.8773],
          成都: [103.9526, 30.7617],
          拉萨: [91.1865, 30.1465],
          天津: [117.4219, 39.4189],
          合肥: [117.29, 32.0581],
          呼和浩特: [111.4124, 40.4901],
          哈尔滨: [127.9688, 45.368],
          北京: [116.4551, 40.2539],
          南京: [118.8062, 31.9208],
          南宁: [108.479, 23.1152],
          南昌: [116.0046, 28.6633],
          乌鲁木齐: [87.9236, 43.5883],
          上海: [121.4648, 31.2891],
          三亚: [109.5, 18.2]
        },
        series: [
          {
            name: '合肥',
            data: [
              [{ name: '合肥' }, { name: '长春', value: 66 }],
              [{ name: '合肥' }, { name: '长沙', value: 66 }],
              [{ name: '合肥' }, { name: '贵阳', value: 66 }],
              [{ name: '合肥' }, { name: '杨凌', value: 66 }],
              [{ name: '合肥' }, { name: '深圳', value: 66 }],
              [{ name: '合肥' }, { name: '济南', value: 66 }],
              [{ name: '合肥' }, { name: '海口', value: 66 }],
              [{ name: '合肥' }, { name: '沈阳', value: 66 }],
              [{ name: '合肥' }, { name: '武汉', value: 66 }],
              [{ name: '合肥' }, { name: '昆明', value: 66 }],
              [{ name: '合肥' }, { name: '合肥', value: 118 }],
              [{ name: '合肥' }, { name: '杭州', value: 66 }],
              [{ name: '合肥' }, { name: '成都', value: 66 }],
              [{ name: '合肥' }, { name: '拉萨', value: 66 }],
              [{ name: '合肥' }, { name: '天津', value: 66 }],
              [{ name: '合肥' }, { name: '呼和浩特', value: 66 }],
              [{ name: '合肥' }, { name: '哈尔滨', value: 66 }],
              [{ name: '合肥' }, { name: '北京', value: 66 }],
              [{ name: '合肥' }, { name: '南宁', value: 66 }],
              [{ name: '合肥' }, { name: '南昌', value: 66 }],
              [{ name: '合肥' }, { name: '乌鲁木齐', value: 66 }],
              [{ name: '合肥' }, { name: '上海', value: 66 }]
            ]
          }
        ]
      }
    }
  },
  computed: {
    copustyle() {
      return { display: this.display ? 'block' : 'none' }
    },
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date()
    },
    styheight() {
      return `height:${window.innerHeight - 60}px;`
    },

    activeOption() {
      return this.activeObj.option
    },
    container() {
      return `height:${window.innerHeight}px;`
    },
    mainStyle() {
      return `height:${window.innerHeight - 94}px;`
    },
    componentName() {
      const prop = this.activeObj.component.prop
      //   console.log(this.activeObj.component.prop, 'this.activeObj')
      return 'avue-echart-' + prop
    }
  },
  watch: {
    // eslint-disable-next-line object-shorthand
    '$route.params'() {
      this.getActiveObj()
    }
  },
  async created() {
    this.width = window.innerWidth - 180 - 300 + 'px'
    this.getActiveObj()
    sessionStorage.isDebugging = 'debugFuncIsAllowed' // 组件案例库的演示专用,否则不给打开快速手动处理option的功能
    if (this.activeOption.mapData) {
      const res = await this.$axios(this.activeOption.mapData)
      const data = res.data.content
      this.activeOption.chinaData = JSON.parse(data)
    }
    this.flag = true
  },
  methods: {
    onChange(val) {
      console.log(val)
    },
    handleSelectionChange(arr) {
      console.log(arr)
    },
    // 编辑判断是否有效,因为不是预览也要用,所以不放mixin里面
    vaildProp(name, list) {
      if (this.activeObj.lock) return true // 如果已经上锁了,那么直接返回true不给到具体的配置
      if (list) return list.includes(this.activeObj.component.prop)
      if (!this.activeObj.component.prop) return false // 空的直接return false
      let flag
      if (name === 'currencyTypeList') {
        // console.log(this.dicOption, '8888')
      }
      if (this.dicOption[name]) {
        flag = this.dicOption[name].includes(this.activeObj.component.prop)
      } else {
        console.error('不包含这个选项--->', name)
      }
      // console.log(this.activeObj, 'this.activeObjthis.activeObjthis.activeObj')
      return flag
    },
    getActiveObj() {
      const val = this.$route.params.id
      base.forEach(ele => {
        // console.log(ele, 'eleele')
        const obj = ele.children.find(
          item => item.option && item.option.component.prop === val
        )
        if (obj) {
          this.activeObj = obj.option
        }
        // console.log(this.activeObj, 'this.activeObjthis.activeObj')
      })
    },
    codeClose(val) {
      console.log(val, '00000000')
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  background: #000;
}

.top-content {
  width: 210px;
  height: 54px;
  font-size: 30px;
  line-height: 54px;
  color: #fff;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-header {
  text-align: left;
  // background-color: #171b22;
  box-sizing: border-box;
  // border-bottom: 2px solid #ccc;
  .logout {
    text-align: right;
  }
}
.el-main {
  padding: 0;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
}
.wrapper__grade {
  flex-direction: row;
  display: flex;
  width: 100%;
  padding: 0 0 0 20px;
  box-sizing: border-box;
}
.params {
  z-index: 3;
  width: 300px;
  height: 900px;
  background: rgb(240, 239, 239);
  border: 3px solid rgb(240, 239, 239);
  box-sizing: border-box;
  flex-shrink: 0;
}
.content-style {
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
