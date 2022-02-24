<template>
  <!-- 资源区右侧工具栏 -->
  <div v-if="cubeObject" class="data-area-right">
    <div class="icon_type_top">
      <div class="text">图表类型</div>
      <div class="icon_type_ul">
        <div
          v-for="(item, itemIndex) in allIcon"
          :key="item.varName"
          :class="[
            'chart-item',
            { isAble: isAble(item.varName), defaultClass: isActive(item) }
          ]"
          @click="changeIconShow(isAble(item.varName), item, itemIndex)"
        >
          <el-tooltip placement="left" effect="light" :offset="50">
            <template #content>
              <div>
                <span>{{ item.name }}</span>
                <br />
                <span v-html="item.notes"></span>
              </div>
            </template>
            <i :class="'icon iconfont ' + item.avatar" />
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import computerMixin from './computerMixin'
export default {
  name: 'DataAreaRight',
  mixins: [computerMixin],
  props: {
    cubeObject: {
      type: Object
    }
  },
  data() {
    return {
      allowCharts: [], // 可以使用的图表
      activeName: '', // 点击图标的名字
      allIcon: [
        {
          varName: 'table',
          avatar: 'icon-table',
          notes: '多个维度<br/>多个度量',
          name: '表格'
        },
        {
          varName: 'bar',
          avatar: 'icon-shujuzhanshi2',
          notes: '多个纬度，多个度量',
          name: '常规柱状图'
        },
        {
          varName: 'stackbar',
          avatar: 'icon-duidiezhuzhuangtu',
          notes: '多个纬度，多个度量',
          name: '堆积柱状图'
        },
        {
          varName: 'biaxial',
          avatar: 'icon-shuangzhoutu',
          notes: '多个纬度，多个度量',
          name: '双轴图'
        },
        {
          varName: 'line',
          avatar: 'icon-shujuzhexiantu',
          notes: '多个纬度，多个度量',
          name: '折线图'
        },
        {
          varName: 'pie',
          avatar: 'icon-bingtu',
          notes: '1个纬度，1个度量<br/>0个纬度，多个度量',
          name: '饼图'
        },
        {
          varName: 'progresscircle',
          avatar: 'icon-huanxingtu',
          notes: '1个纬度，1个度量',
          name: '环形图'
        },
        {
          varName: 'funnel',
          avatar: 'icon-loudoutu',
          notes: '1个纬度，1个度量<br/>0个纬度，多个度量',
          name: '漏斗图'
        },
        {
          varName: 'radar',
          avatar: 'icon-leidatu',
          notes: '1个纬度<br/>多个度量',
          name: '雷达图'
        },
        // {
        //   varName: 'gauge',
        //   avatar: 'icon-icon',
        //   notes: '1个纬度<br/>1个度量',
        //   name: '仪表盘'
        // },
        {
          varName: 'liquidfill',
          avatar: 'icon-waterpolo',
          notes: '1个纬度<br/>1个度量',
          name: '水球图'
        },
        {
          varName: 'gauge2',
          avatar: 'icon-yibiaopan1',
          notes: '1个纬度<br/>1个度量',
          name: '仪表盘'
        }
      ]
    }
  },
  computed: {
    categoryLentgh() {
      return this.dims && this.dims.length // 维度长度
    },
    valueLength() {
      return this.facts && this.facts.length // 度量长度
    },
    type() {
      return this.cubeObject.type
    }
  },
  watch: {
    categoryLentgh: {
      handler() {
        this.initIcon() // 维度度量变化后重新1
      },
      immediate: true
    },
    valueLength: {
      handler() {
        this.initIcon() // 维度度量变化后重新1
      },
      immediate: true
    }
  },
  created() {
    this.initIcon() // 初始化点亮类型图标
  },

  methods: {
    initIcon() {
      this.activeName = this.type // 初始化点亮图标的名字
      this.activeIcon() // 初始化点亮图标
    },
    isActive(item) {
      const flag = item.varName === this.activeName
      return flag
    },
    isAble(item) {
      const flag = this.allowCharts.indexOf(item) > -1
      return flag
    },
    /**
     * @desc    : 判断图标的显隐
     * @author  : cxy
     * @date  : 2019/08/15
     * @update   by
     */
    activeIcon() {
      // 维度长度 度量长度
      const categoryLentgh = this.categoryLentgh
      const valueLength = this.valueLength
      // console.log(categoryLentgh, valueLength, ' 维度长度 度量长度')
      this.allowCharts = []
      if (categoryLentgh === 0 && valueLength === 0) {
        // 没有维度度量,全黑
        return
      }
      if (categoryLentgh === 0 && valueLength === 1) {
        // 当0个纬度','1个度量时右侧图表列表
        this.allowCharts = [
          'table',
          'bar',
          'stackbar',
          'pie',
          'tire',
          'rose',
          'number',
          'gauge',
          'gauge2',
          'funnel'
        ]
      }
      if (categoryLentgh === 0 && valueLength === 2) {
        // 当0个纬度','2个度量时右侧图表列表
        this.allowCharts = [
          'table',
          'stackbar',
          'pie',
          'tire',
          'rose',
          'funnel'
        ]
      }
      if (categoryLentgh === 0 && valueLength >= 3 && valueLength <= 5) {
        // 当0个纬度', '3个度量和3个以上时右侧图表列表显示
        this.allowCharts = [
          'table',
          'stackbar',
          'pie',
          'tire',
          'rose',
          'funnel'
        ]
      }
      if (categoryLentgh === 0 && valueLength > 5) {
        // 当0个纬度', '3个度量和3个以上时右侧图表列表显示
        this.allowCharts = [
          'table',
          'stackbar',
          'pie',
          'tire',
          'rose',
          'funnel'
        ]
      }
      if (categoryLentgh === 1 && valueLength === 0) {
        // 当1个纬度', '0个度量时右侧图表列表显示，
        this.allowCharts = ['table', 'word', 'tree']
      }
      if (categoryLentgh === 1 && valueLength === 1) {
        // 当1个纬度', '1个度量时右侧列表显示，
        this.allowCharts = [
          'table',
          'tree',
          'bar',
          'bar1',
          'stackbar',
          'bar3',
          'line',
          'line1',
          'pie',
          'tire',
          'funnel',
          'rose',
          'map',
          'gauge',
          'gauge2',
          'air-map',
          'tree',
          'biaxial',
          'radar',
          'progresscircle',
          'liquidfill'
        ]
      }
      if (categoryLentgh === 1 && valueLength === 2) {
        // 当1个纬度', '2个度量时右侧列表显示：
        this.allowCharts = [
          'point',
          'table',
          'bar',
          'bar1',
          'stackbar',
          'bar3',
          'line',
          'line1',
          'biaxial',
          'contrast',
          'radar'
        ]
      }
      if (categoryLentgh === 1 && valueLength >= 3) {
        // 当1个纬度', '3个和3个以上度量时右侧图表列表显示，
        this.allowCharts = [
          'table',
          'bar',
          'bar1',
          'stackbar',
          'bar3',
          'line',
          'line1',
          'biaxial',
          'radar'
        ]
      }
      if (categoryLentgh === 2 && valueLength === 0) {
        // 当2个纬度', '度量0时右侧图表列表显示，
        this.allowCharts = ['table', 'tree', 'bar', 'line']
      }
      if (categoryLentgh === 2 && valueLength === 1) {
        // 当2个纬度', '1个度量时右侧图表列表显示，
        this.allowCharts = ['table', 'tree', 'bar', 'line', 'biaxial'] // 'bar',
      }
      if (categoryLentgh === 2 && valueLength === 2) {
        // 当2个纬度', '2个度量时右侧图表列表显示，
        this.allowCharts = ['table', 'bar', 'stackbar', 'line', 'biaxial'] // 'bar', , 'point'
      }
      if (categoryLentgh === 2 && valueLength >= 3) {
        // 当2个纬度', '3个和3个以上度量时右侧图表列表显示，
        this.allowCharts = ['table', 'bar', 'stackbar', 'line']
      }
      if (categoryLentgh > 2 && (valueLength === 0 || valueLength === 1)) {
        // 当3个和3个以上纬度', '0个度量时右侧图表列表显示，
        this.allowCharts = ['table', 'tree']
      }
      if (categoryLentgh >= 3 && valueLength >= 2) {
        // 当3个和3个以上纬度', '3个和3个以上度量时右侧图表列表显示 预警功能，
        this.allowCharts = ['table']
      }
      const flag = this.isAble(this.activeName)
      if (!flag) {
        // 如果激活的名字都不在允许的范围内,直接跳表格
        this.cubeObject.type = 'table'
      }
    },
    /**
     * @desc    : 图标点击事件
     */
    changeIconShow(isAble, item) {
      if (isAble) {
        this.activeName = item.varName
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.chart-item {
  display: inline-block;
  width: 46px;
  height: 46px;
  padding: 10px;
}
.defaultClass {
  border: 1px solid rgba(81, 130, 228, 1);
  border-radius: 8px;
}

.iconfont {
  font-size: 46px;
}
.chart-item.isAble {
  .icon {
    color: rgba(81, 130, 228, 1);
  }
}

.icon_type_top {
  width: 100%;
  height: 100%;
  padding-right: 0;
  padding-left: 0;
  color: #626c7f;
  text-align: left;
  .text {
    line-height: 48px;
  }
  .icon_type_ul {
    width: 100%;
  }
}
.icon_type_ul li {
  margin: 0 8px 8px 0;
  text-align: center;
}
.icon_type_ul li:nth-child(5n) {
  margin: 0 0 8px 0;
}
</style>
