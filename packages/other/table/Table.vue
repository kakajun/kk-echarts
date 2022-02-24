<template>
  <div
    :class="b()"
    :style="[style, { overflow: scroll ? 'hidden' : 'inherit' }]"
  >
    <el-dialog
      v-model="visible"
      append-to-body
      title="数据显隐"
      width="30%"
    >
      <avue-checkbox
        v-model="columnData"
        :dic="columnOption"
        :props="{ value: 'prop' }"
      ></avue-checkbox>
    </el-dialog>
    <el-dialog
      v-model="listVisible"
      :class="b('allview')"
      title="详细数据"
      append-to-body
      width="80%"
    >
      <avue-crud :option="listOption" :data="dataTabel"></avue-crud>
    </el-dialog>
    <div :style="styleTdName" :class="b('Table')">
      <div :class="b('tr')">
        <div
          v-if="index"
          :class="b('td')"
          :style="[styleThName, styleWidth(indexWidth)]"
        >
          <div :class="b('menu')" :style="styleMenuName">
            <i
              v-if="columnShow"
              class="el-icon-menu"
              @click="visible = true"
            ></i>
            <i
              v-if="columnViews"
              class="el-icon-view"
              @click="listVisible = true"
            ></i>
          </div>
        </div>
        <template v-for="(item, i) in columnOption">
          <div
            v-if="(columnData || []).includes(item.prop)"
            :key="i + 'p'"
            :class="b('td')"
            :style="[styleThName, styleWidth(item.width)]"
            @click="handleSortable(item.prop)"
          >
            {{ item.label }}
          </div>
        </template>
      </div>
      <div v-if="totalFlag" :class="b('tr')">
        <div v-if="index" :class="[b('td')]" :style="[styleWidth(indexWidth)]">
          合计
        </div>
        <template v-for="(item, j) in columnOption">
          <div
            v-if="(columnData || []).includes(item.prop)"
            :key="j + 'y'"
            :class="b('td')"
            :style="[styleWidth(item.width)]"
          >
            {{ totalData[item.prop] }}
          </div>
        </template>
      </div>
      <div
        ref="body"
        :class="b('body')"
        :style="style"
        @mouseover="stopScroll"
        @mouseleave="startScroll"
      >
        <transition-group
          :enter-active-class="option.enterActiveClass"
          :leave-active-class="option.leaveActiveClass"
          tag="div"
        >
          <div
            v-for="(citem, cindex) in dataTabel"
            :key="dataTabelLen - cindex"
            :class="b('tr', ['line'])"
            :style="[
              styleTrName(cindex),
              shadowClor(cindex),
              { top: setPx(cindex * lineHeight + top) }
            ]"
            @click="rowClick2(citem, cindex)"
          >
            <!-- 排名 -->
            <div
              v-if="index"
              :key="index"
              :class="b('td')"
              :style="[styleTdtableName, styleWidth(indexWidth)]"
            >
              <div :class="b('index', [cindex + 1 + ''])">
                {{ cindex + 1 }}
              </div>
            </div>
            <template v-for="(item, k) in columnOption">
              <div
                v-if="(columnData || []).includes(item.prop)"
                :key="k + 'y'"
                :class="b('td')"
                :style="[styleTdtableName, styleWidth(item.width)]"
              >
                <!-- <el-tooltip class="item"
                            effect="dark"
                            :content="citem[item.prop] + ''"
                            placement="top"> -->
                <span v-html="citem[item.prop]"></span>
                <!-- </el-tooltip> -->
              </div>
            </template>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'

import { currencyF, setPx } from '@s/utils/util.js'
export default {
  name: 'Table',
  mixins: [common],
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      setPx,
      firstFlag: true,
      lineCounter: 0, // 第几行
      visible: false,
      listVisible: false,
      columnData: [],
      indexWidth: 80,
      top: 0,
      prop: '',
      scrollCheck: '',
      activeIndex: 0,
      query: {}
    }
  },
  computed: {
    listOption() {
      return Object.assign(
        {
          align: 'center',
          headerAlign: 'center',
          size: 'mini',
          menu: false,
          header: false,
          height: 500,
          sumText: '合计',
          showSummary: true,
          column: this.option.column
        },
        (() => {
          return {
            sumColumnList: this.totalList.map(column => {
              return {
                name: column,
                type: 'sum'
              }
            })
          }
        })()
      )
    },
    totalList() {
      return this.option.totalList || []
    },
    totalFlag() {
      return !this.validatenull(this.totalList)
    },
    totalData() {
      const obj = {}
      this.totalList.forEach(prop => {
        this.dataChart.forEach(ele => {
          obj[prop] = (obj[prop] || 0) + Number(ele[prop])
          obj[prop] = Number(obj[prop].toFixed(2))
        })
      })
      return obj
    },
    columnShow() {
      return this.option.columnShow
    },
    columnViews() {
      return this.option.columnViews
    },
    columnShowWhite() {
      return this.option.columnShowWhite || []
    },
    columnShowList() {
      return this.option.columnShowList || []
    },
    dataTabelLen() {
      return this.dataChart.length
    },
    dataTabel() {
      // 表格数据这里接收
      let list = this.dataChart
      // 这里做单位转换
      this.option.column.forEach(obj => {
        const prop = obj.prop
        list.forEach(ele => {
          // 如果是文本,且列头没有%,那么放心做单位转换
          if (typeof ele[prop] !== 'string' && obj.label.indexOf('%') < 0) {
            if (this.option.currencyType) {
              ele[prop] = currencyF(ele[prop] / this.option.currencyType)
            }
          }
        })
      })
      if (!this.validatenull(this.prop)) {
        list = this.sortArrys(list, this.prop)
      }
      return list
    },
    allHeight() {
      const count = this.count - (this.totalFlag ? 2 : 1)
      const calcState = this.dataChartLen - count
      return calcState * this.lineHeight
    },
    count() {
      return (this.option.count || 10) + 1
    },
    dataChartLen() {
      return (this.dataChart || []).length
    },
    lineHeight() {
      return parseInt(this.height / this.count)
    },
    index() {
      return this.option.index
    },
    scroll() {
      return this.option.scroll
    },
    scrollTime() {
      return this.option.scrollTime || 5000
    },
    fontSize() {
      return this.option.fontSize || 14
    },
    scrollCount() {
      return this.option.scrollCount || this.count
    },
    speed() {
      return this.scrollCount * this.lineHeight
    },
    styleThName() {
      return {
        fontSize: this.setPx(this.fontSize),
        background: this.option.headerBackground || 'rgba(0, 0, 0, 0.01)',
        color: this.option.headerColor || 'rgba(154, 168, 212, 1)'
      }
    },
    columnOption() {
      return this.crudOption.column || []
    },
    styleTdName() {
      return {
        fontSize: this.setPx(this.fontSize),
        lineHeight: this.setPx(this.lineHeight),
        height: this.setPx(this.lineHeight),
        color: this.option.bodyColor || 'rgba(154, 168, 212, 1)'
      }
    },
    styleTdtableName() {
      return {
        borderBottom: `1px solid ${
          this.option.borderColor || 'rgba(0, 0, 0, 0)'
        }`,
        fontSize: this.setPx(this.fontSize),
        lineHeight: this.setPx(this.lineHeight),
        height: this.setPx(this.lineHeight - 1),
        color: this.option.bodyColor || 'rgba(154, 168, 212, 1)'
      }
    },
    styleMenuName() {
      return {
        lineHeight: this.setPx(this.lineHeight),
        color: this.option.headerColor || 'rgba(154, 168, 212, 1)'
      }
    },
    sortableProp() {
      return this.option.sortableProp || 'order'
    },
    crudOption() {
      return Object.assign(this.option, {
        menu: false,
        align: 'center',
        headerAlign: 'center',
        header: false
      })
    },
    isLinkage() {
      return this.eventConfig.openLinkage
    }
  },
  watch: {
    // 保证进到表格后第一次就有联动显示
    dataChartLen(val) {
      if (val > 0 && this.firstFlag) {
        this.firstFlag = false
        this.rowClick(this.dataTabel[0]) // 出发0项显示
      }
    },
    columnOption: {
      handler() {
        this.columnData = []
        this.columnOption.forEach(ele => {
          if (ele.hide !== true) {
            this.columnData.push(ele.prop)
          }
        })
      },
      immediate: true
    },
    scrollCount() {
      this.setTime()
    },
    count() {
      this.setTime()
    },
    scrollTime() {
      this.setTime()
    },

    scroll: {
      handler() {
        this.setTime()
      },
      immediate: true
    }
  },
  beforeUnmount() {
    clearInterval(this.scrollCheck)
  },
  methods: {
    shadowClor(k) {
      if (this.lineCounter === k) {
        return { background: this.option.selectClor || '#fff' }
      }
    },
    styleWidth(width) {
      return {
        width: this.setPx(width),
        flex: width ? 'initial' : 1
      }
    },
    resetData() {
      this.top = 0
    },
    handleSortable(prop) {
      this.propQuery[this.sortableProp] = prop
      this.updateData()
    },
    stopScroll() {
      clearInterval(this.scrollCheck)
      // console.log(this.scrollCheck, '停止动!')
    },
    startScroll() {
      this.setscroll()
      // console.log(this.scrollCheck, '开始动!')
    },
    setTime() {
      this.top = 0
      clearInterval(this.scrollCheck)
      this.setscroll()
    },
    setscroll() {
      // setTimeout(() => {
      if (this.scroll) {
        this.scrollCheck = setInterval(() => {
          if (this.top <= -this.allHeight) {
            this.lineCounter++
            if (this.lineCounter === this.dataTabel.length) {
              this.top = 0
              this.lineCounter = 0
              this.rowClick(this.dataTabel[0]) // 出发0项显示
            } else {
              // 滚到哪一行,就默认联动到哪一行
              this.isLinkage && this.rowClick(this.dataTabel[this.lineCounter])
            }
          } else {
            this.top = this.top - this.speed
            this.lineCounter = Math.abs(this.top / this.speed)
            this.isLinkage && this.rowClick(this.dataTabel[this.lineCounter]) // 滚到哪一行,就默认联动到哪一行
          }
          // console.log(this.lineCounter, this.dataTabel.length, 'this.top')
        }, this.scrollTime)
      }
      // }, 2000)
    },
    styleTrName(index) {
      const result = {
        lineHeight: this.setPx(this.lineHeight)
      }
      if (index % 2 === 0) {
        result.background = this.option.othColor
      } else {
        result.background = this.option.nthColor
      }
      return result
    },
    rowClick2(item, index) {
      this.lineCounter = index
      if (this.eventConfig.openDrill) {
        // 解析下钻
        this.parseDrill(item)
      } else {
        this.rowClick(item, index)
      }
    },
    rowClick(item, index) {
      // console.log(this.linkageFormatter, 'this.linkageFormatterthis.linkageFormatter')
      // 点到这一行,那么下次滚动,就从这一行开始滚   TODO 暂时不做(客户提出来再搞)
      this.eventConfig.openLinkage &&
        this.linkageClick({
          indexs: this.eventConfig.childIndexs, // 联动子类id数组
          value: item, // 行对象
          column: this.columnOption // 列头
        })
      this.clickFormatter &&
        this.clickFormatter({
          type: index,
          value: item,
          data: this.dataChart
        })
    },
    handleClick(value, index) {
      this.activeIndex = index
      this.query.type = value
      this.updateData()
    }
  }
}
</script>
<style lang="scss" scoped>
.Table {
  $size: '14px';
  &__body {
    position: relative;
    overflow: hidden;
  }
  &__menu {
    position: absolute;
    padding: 0 5px;
    text-align: right;
    i {
      margin-right: 10px;
      font-size: 20px;
    }
  }
  &__allview {
    opacity: 0.9;
    .el-table--enable-row-hover .el-table__body tr:hover > td {
      background-color: #333;
    }
  }
  &__tr {
    display: flex;
    &--line {
      position: absolute;
      width: 100%;
      transition: all 0.5s;
    }
  }
  &__td {
    display: flex;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
  &__header {
    display: flex;
    margin-bottom: 20px;
    border-bottom-width: 0;
    justify-content: flex-end;
  }
  &__index {
    width: $size;
    height: $size;
    margin: 0 auto;
    line-height: $size;
    color: #fff;
    text-align: center;
    background-color: #144280;
    border-radius: 100%;
    $size: 30px;
    &--1 {
      background-color: #fdd706;
    }
    &--2 {
      background-color: #1f94f4;
    }
    &--3 {
      background-color: #1f94f4;
    }
  }
  &__item {
    display: inline-block;
    padding: 5px 10px;
    border-style: solid;
    border-width: 1px;
    &--active {
      color: #fff !important;
    }
  }
  table {
    width: 100%;
    border-style: solid;
    border-width: 1px;
  }
  td,
  th {
    font-size: 16px;
    font-weight: 300;
    border-style: solid;
    border-width: 0;
    border-bottom-width: 1px;
  }
}
</style>
