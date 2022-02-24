/**
 * @desc    : 专门渲染echart的,把公共部分全部弄这里省的代码重复,但要求书写方式一样,ref=ecahrts ,方法名字都是init
 * @author  : mj
 * @date  : 2020/08/30
 * @update   by
 */
export default {
  data() {
    return {
      myChart: null
    }
  },

  mounted() {
    this.myChart = this.$echarts.init(this.$refs.echarts)
    this.init()
  },
  methods: {
    updateData() {
      this.$nextTick(() => {
        this.myChart.clear()
        this.init()
        this.myChart.resize()
      })
    }
  }
}
