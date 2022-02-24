<template>
  <el-dialog
    v-model="visible"
    title="指标选择"
    :modal="true"
    top="100px"
    append-to-body
    width="1350px"
    :before-close="handleCloseDialog"
  >
    <div class="measure">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form>
            <el-form-item label="度量选择" style="user-select: none">
              <el-select
                v-model="cubeObject.preFacts"
                multiple
                style="width: 80%"
                value-key="sname"
                size="mini"
                placeholder="请选择"
                @change="getFacts"
              >
                <el-option
                  v-for="item in measureOptions"
                  :key="rondomKey(item.sfactfield)"
                  :disabled="item.disabled"
                  :label="item.sname"
                  :value="item"
                >
                  <!-- 自定义内容,既展示表不同,又不影响label的取值 -->
                  <span style="float: left">{{ item.sname }}</span>
                  <span class="item-subject">{{ item.subject }}</span>
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <!-- 期间选择 -->
          <el-form>
            <el-form-item label="期间选择">
              <div class="companyPeriod">
                <el-select
                  v-model="cubeObject.slectyear"
                  style="width: 80%"
                  multiple
                  :disabled="disabledY"
                  size="mini"
                  placeholder="请选择"
                  @change="changePeriod"
                >
                  <el-option
                    v-for="item in yearOptions"
                    :key="item.value"
                    value-key="value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="cubeObject.slectmonth"
                  size="mini"
                  :disabled="disabledM"
                  style="width: 80%"
                  multiple
                  placeholder="请选择"
                  @change="changePeriod"
                >
                  <el-option
                    v-for="item in monthOptions"
                    :key="item.value"
                    value-key="id"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </el-form-item>
          </el-form>
          <!-- 公司选择 -->
          <el-form>
            <el-form-item label="期间选择">
              <companyTree
                ref="refcompany"
                :companytree-data="companytreeData"
                :show-checkbox="true"
                style="height: 500px"
                :checked="cubeObject.companys"
                @checkedKeys="checkedKeys"
              />
            </el-form-item>
          </el-form>
        </el-col>
        <!-- 指标选择 -->
        <el-col :span="9">
          <el-form-item>
            <measure-select
              :checked-index="cubeObject.checkedIndex"
              style="height: 720px"
              :tree-data="filterTreeData"
              @setIndexParams="setIndexParams"
            />
          </el-form-item>
        </el-col>
        <!-- 度量编辑 -->
        <el-col :span="7">
          <source-edit
            ref="source"
            :cube-object="cubeObject"
            :active-obj="activeObj"
            :facts-arrs="factsArrs"
            @postPrams="postPrams"
          ></source-edit>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
</template>
<script>
import measureSelect from '@p/toolComponent/measureSelect/MeasureSelect'
import { getMonthListB, getYearListYB } from '@s/utils/period'
import companyTree from '@p/toolComponent/companyTree/Companytree'
import sourceEdit from './selectChart/SourceEdit'
import { deepClone } from '@s/utils/util.js'

export default {
  name: 'Manydims',
  components: { companyTree, sourceEdit, measureSelect },
  props: {
    baseList: {
      type: Array,
      default: () => []
    },
    measureOptions: {
      type: Array,
      default: () => []
    },
    companytreeData: {
      type: Array,
      default: () => []
    },
    activeObj: {
      // 为什么不直接传CubeObject,因为后面改了type后,还必须要把里面的option也换掉,包括请求参数也要换,格局要大点兄弟!!!!
      type: Object
    },
    visible: Boolean,
    treeData: {
      type: Array,
      default: () => []
    }
  },
  emits: ['handleRefresh', 'update:visible'],
  data() {
    return {
      cubeObject: {}, // 需要修改的
      disabledY: false, // 禁用年
      disabledM: false, // 禁用月
      copyTreeData: [], // 复制指标树
      filterTreeData: [], // 过滤指标树
      origen: {
        type: '',
        companys: ['1010'],
        slectmonth: ['03'], // 选择月
        flag: false,
        slectyear: ['2018', '2019', '2020'], // 选择年
        dims: [{ id: 'period_name', text: '期间', type: 'text', width: null }], // 顶部选的度量
        facts: [{ id: 'fact_a', text: '本期数', type: 'number', width: null }], // 度量设置
        legend: [], // 系列
        preFacts: [{ sname: '本期数', subject: '0002', sfactfield: 'A' }], // 预选择的度量,有了facts,为什么还要preFacts,因为度量可以是维度,维度可以是度量,并且前面选了度量,不一定后面全部都要用
        perList: [], // 日期传参数
        checkedIndex: ['lx_1416001'], // 选中指标
        factParams: { lxFaList: ['A'] }, // 度量传参数
        zbPrames: { lxCodList: ['1416001'] } // 指标的参数
      },
      factsArrs: [
        { id: 'fact_a', text: '本期数', type: 'number', width: null }
      ], // 带中文名字的
      companyArrs: [], // 选择的公司,这个是带中文的用于展示
      company: localStorage.dims && JSON.parse(localStorage.dims).company.scode,
      openDialogVisible: false,
      yearOptions: getYearListYB(),
      monthOptions: getMonthListB()
    }
  },
  watch: {
    filterText(val) {
      this.$refs.treedata.filter(val)
    }
  },
  mounted() {
    if (!this.activeObj.cubeObject) {
      this.cubeObject = this.origen
    } else {
      this.cubeObject = JSON.parse(JSON.stringify(this.activeObj.cubeObject))
    }
    this.initdata()
    const obj = this.cubeObject
    const val = obj.slectmonth.length > 0 ? obj.slectmonth : obj.slectyear
    this.changePeriod(val) // 这里要把期间的禁用启用判断处理一下
  },
  methods: {
    /**
     *@desc: 对选了连续期间的年月做一个限制
     *@author:mj
     *@date:2021/07/06
     *@updateby
     */
    changePeriod(val) {
      const reg2 = /\$[0-9][a-z]/
      if (val.length > 1) {
        val.forEach((ele, index) => {
          if (reg2.test(ele)) {
            this.$message.error('连续期间只能单选一个')
            val.splice(index, 1)
          }
        })
      } else if (val.length === 1) {
        if (reg2.test(val[0])) {
          if (val[0].indexOf('q') > -1) {
            this.disabledM = true // 禁用月
            // 限制了月,且已经选择的月要清空
            this.cubeObject.slectmonth = []
          } else {
            // 限制了年,且已经选择的年要清空
            this.cubeObject.slectyear = []
            this.disabledY = true // 禁用年
          }
        }
      } else {
        this.disabledY = false // 禁用年
        this.disabledM = false // 禁用月
      }
      //   console.log(val, "nnnnnnnnnnnnn")
    },
    // 初始化数据
    async initdata() {
      this.copyTreeData = [].concat(this.treeData) // 复制而不影响原来数组
      this.filterTreeData = this.treeData
      // this.filterIndex() // 度量确定,那么就把指标按表过滤一下
      this.getFactArrs(this.cubeObject.preFacts) // 获取度量右侧待选列表
      if (!this.cubeObject.type)
        this.cubeObject.type = this.activeObj.component.prop // 初始化时,跟前面使用的类型做一样
    },

    // 由于重复key会报错影响渲染,这里搞个随机key
    rondomKey(val) {
      return Math.random() * 100 + val
    },
    /**
    *@desc:1. 根据参数查数据,存两套配置,一套用于发送参数到后端,一套用于前端展示,其实可以只用一套,为什么两套?为了方便统一管理,减少代码复杂度
     尽可能业务代码在自己的组件内部实现,不动框架上的东西
     2. 配置切换
    *@author:mj
    *@date:2021/05/31
    *@updateby
    */
    postPrams() {
      const obj = {}
      const { companys, perList, zbPrames, factParams } = this.cubeObject
      obj.comList = companys
      obj.perList = perList
      Object.assign(obj, zbPrames, factParams)
      this.activeObj.dataQueryb = obj // 这里插个参数保存起来
      this.activeObj.cubeObject = this.cubeObject
      // 并且要设置type和对应option,什么时候设置? 当cubeObject的type与自身的prop不一样时触发
      if (this.cubeObject.type !== this.activeObj.component.prop) {
        this.setOption()
      }
      // 重新设置一下dataType,因为被新的覆盖了
      this.activeObj.dataType = 4
      this.$emit('handleRefresh')
      this.handleCloseDialog()
    },

    // 设置对应type的option ,注意不能像新建那样整体替换
    setOption() {
      let obj
      const originalHeight = this.activeObj.component.height
      const originalWidth = this.activeObj.component.width
      // console.log(this.baseList, this.cubeObject.type, 'DEBUGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG')
      const list = deepClone(this.baseList) // 这里一定要深度复制,否则会影响所有的图形
      // 共用prop导致的问题,属性被覆盖了,还得现在补救
      list.map(b => {
        b.children.map(c => {
          if (
            RegExp(/柱形图-/).test(c.label) &&
            c?.option?.component?.prop === 'bar'
          ) {
            // delete c?.option
            delete c?.option?.component?.prop
          } else {
            delete c?.option?.dataType
            delete c?.option?.top
            delete c?.option?.left
            delete c?.option?.component?.width
            delete c?.option?.component?.height
          }
        })
      })

      setTimeout(() => {
        list.forEach(element => {
          element.children.forEach(item => {
            if (item?.option?.component?.prop === this.cubeObject.type) {
              // 要干掉这些属性,否则前面的配置白费了
              obj = item?.option
              if (obj?.dataQueryb) delete obj.dataQueryb
              if (obj?.cubeObject) delete obj.cubeObject
              // 下面给原始宽高
              obj.component.height = originalHeight
              obj.component.width = originalWidth
            }
          })
        })
        if (obj) {
          Object.assign(this.activeObj, obj)
        } else {
          alert('该图形正在开发中!')
        }
        if (this.cubeObject.type === 'table') {
          // console.log(this.$refs.source, 'this.$refs.measure')
          this.$refs.source.setCloum()
        }
      }, 300)
    },

    /**
     *@desc:度量改变后
     *@author:mj
     *@date:2021/05/28
     *@updateby
     */
    getFacts(val) {
      console.log(val, '度量改变后')
      // 度量确定,那么就把指标按表过滤一下
      // this.filterIndex()
      this.cubeObject.preFacts = val
      this.getFactArrs(this.cubeObject.preFacts)
      this.setIndexParams(this.cubeObject.checkedIndex)
    },
    // 度量自己限制自己的选择
    handlerDims() {
      if (this.cubeObject.preFacts.length > 0) {
        const subject = this.cubeObject.preFacts[0].subject
        this.measureOptions.forEach(element => {
          element.disabled = element.subject !== subject
        })
      } else {
        this.measureOptions.forEach(element => {
          element.disabled = false
        })
      }
    },
    // 度量确定,那么就把指标按表过滤一下
    filterIndex() {
      const subarrs = this.cubeObject.preFacts.map(item => item.subject)
      const tempArr = [].concat(this.copyTreeData)
      if (subarrs.length > 0) {
        this.filterTreeData = tempArr.filter(item =>
          subarrs.includes(item.subject)
        )
      } else {
        // 度量都清空了,那么选择的指标也要清空
        this.cubeObject.checkedIndex = []
        this.filterTreeData = tempArr
      }
      // this.handlerDims()  // todo 暂时全部放开
    },
    /**
     *@desc:获取度量右侧待选列表
     *@author:mj
     *@date:2021/06/28
     *@updateby
     */
    getFactArrs(val) {
      const arr = []
      val.forEach(ele => {
        arr.push({
          id: 'fact_' + ele.sfactfield.toLowerCase(),
          text: ele.sname,
          width: null,
          type: 'number'
        })
      })
      //   console.log(val, "选择的度量")
      this.factsArrs = arr
    },

    // 设置post的传参
    setIndexParams(checkedKeys) {
      // 选了几张表的指标就会有几个参数
      const obj = {}
      const factObj = {}
      checkedKeys.forEach(ele => {
        const arrs = ele.split('_')
        if (!obj[arrs[0] + 'CodList']) {
          obj[arrs[0] + 'CodList'] = []
          factObj[arrs[0] + 'FaList'] = []
        }
        obj[arrs[0] + 'CodList'].push(arrs[1])
        //注意,这里需要做一下适配,因为两个表存在同名,但key值不一样的情况,所以这里需要适配一下,由于同名,勾选其中任何一个,都要查出另外一个的key值对应的赋值进去
        // 1016-L-累计同比增加率----->002-I-同名
        // 1016-K-累计同比增加e----->002-H-同名, 经过下面适配,能保证zc里面,只要选择不是1016就一定做替换,选择1016,那么其他必须做替换222
        //   if (arrs[0]==='zb') {
        //     factObj[arrs[0] + 'FaList'] = this.cubeObject.preFacts.map((item) => {
        //       if (item.sfactfield==='I'&&item.subject!=='1016') return 'L'
        //       if (item.sfactfield==='H'&&item.subject!=='1016') return 'K'
        //       else return item.sfactfield
        //     })
        //   }else
        //     factObj[arrs[0] + 'FaList'] = this.cubeObject.preFacts.map((item) =>{
        //       if (item.sfactfield==='L'&&item.subject==='1016') return 'I'
        //       if (item.sfactfield==='K'&&item.subject==='1016') return 'H'
        //       return  item.sfactfield
        //     })
        factObj[arrs[0] + 'FaList'] = this.cubeObject.preFacts.map(
          item => item.sfactfield
        )
      })

      this.cubeObject.zbPrames = obj
      this.cubeObject.checkedIndex = checkedKeys
      this.cubeObject.factParams = factObj
    },
    // 关闭弹窗
    handleCloseDialog() {
      this.$emit('update:visible', false)
    },
    checkedKeys(arr, checkedNodes) {
      // 这是发给后端的公司参数
      this.cubeObject.companys = arr
      // console.log(checkedNodes,arr,"treeDatatreeDatatreeData");
      const names = arr.map((ele, index) => {
        return { id: ele, name: checkedNodes[index].sname }
      })
      // 这个是带中文的用于展示
      this.companyArrs = names
    }
  }
}
</script>

<style lang="scss" scoped>
.item-subject {
  float: right;
  padding-right: 40px;
  font-size: 13px;
  color: #8492a6;
}
:deep(.el-radio) {
  display: inline-block;
  width: 40px;
  padding-left: 20px;
}
:deep(.el-select__tags) {
  max-width: 300px !important;
}
.filter-tree {
  width: 400px;
}

:deep(.el-tag__close) {
  top: -11px !important;
}
.measureTag {
  color: black;
  cursor: pointer;
  transform: translate(0, 11px);
}
.measureTag-isactive {
  font-weight: bold;
  color: blue !important;
  outline: 1px solid blue;
  user-select: none;
}
.openpriod {
  display: inline-block;
  //   padding-top: 9px;
  user-select: none;
}

:deep(.el-dialog__body) {
  padding: 10px 10px 0 10px;
}
:deep(.el-form-item__label) {
  padding: 4px;
  // font-size: 20px;
  font-weight: bold;
}
.el-tag {
  margin: 3px 3px;
}
.measure {
  width: 100%;
  height: 720px;
  padding: 0 10px;
  .treeBox {
    width: 350px;
    max-height: 600px;
    overflow: auto;
  }
  .tagBox {
    float: left;
    .measureTag {
      margin-left: 6px;
      color: black;
      cursor: default;
      border: 1px solid red;
      &hover {
        color: #fff;
        cursor: pointer;
        background-color: #409eff;
      }
    }
  }
  .companyPeriod {
    width: 100%;
  }
}
:deep(.el-form-item) {
  margin-top: 0;
  margin-bottom: 6px;
}
:deep(.el-dialog__footer) {
  height: 160px;
  text-align: left;
}
.selectedIndex {
  display: flex;
  width: 1060px;
  //   width: 1120px;
  height: 60px;

  //   overflow: hidden;
}
.selectedIndex_parent {
  //   outline: 1px solid red;
  height: 71px;
  // overflow-x: auto;
  overflow-y: hidden;
}
.bottom-btn {
  margin-top: 10px;
  text-align: right;
  //   transform: translate(0px, -11px);
}
.button-new-tag {
  height: 32px;
  margin-top: 14px;
  margin-left: 1px;
  color: black;
  background-color: #d8e6f5;
  border: 1px solid #d9ecff;
  border-radius: 5px;
}
</style>
