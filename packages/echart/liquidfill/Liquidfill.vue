<template>
  <!-- 水球图 -->
  <div :ref="id" :class="b()" :style="style"></div>
</template>
<script>
import common from '@s/mixins/common.js'
import { vaildData } from '@s/utils/util.js'
export default {
  name: 'Liquidfill',
  mixins: [common],

  methods: {
    updateChart() {
      console.log('我重新加载')
      if (isNaN(this.dataChart.value)) this.dataChart.value = 0 // pre-process value

      if (!this.option?.aboveColor) {
        this.option.aboveColor = 'rgba(35, 153, 105, 1)' // '#239969'
        this.option.belowColor = 'rgba(224, 62, 45, 1)' // '#e03e2d'
      }
      const fontColor =
        this.dataChart.value >= 0
          ? this.option.aboveColor
          : this.option.belowColor
      const option = {
        title: this.title(),
        animation: this.animation,
        series: [
          {
            type: 'liquidFill', // 类型
            // data: [this.dataChart, 0.4, 0.2], // 数据是个数组 数组的每一项的值是0-1
            data: [
              this.dataChart.value / 100,
              this.dataChart.value / 100,
              this.dataChart.value / 100 - 0.05
            ], // 数据是个数组 数组的每一项的值是0-1
            outline: {
              show: true, // 是否显示轮廓 布尔值
              borderDistance: 0, // 外部轮廓与图表的距离 数字
              itemStyle: {
                borderColor: 'rgba(255,0,0,0.09)', // 边框的颜色
                borderWidth: 0, // 边框的宽度
                shadowBlur: 5, // 外部轮廓的阴影范围 一旦设置了内外都有阴影
                shadowColor: '#000' // 外部轮廓的阴影颜色
              }
            },
            /* label的formater  */
            // label: {
            //   fontSize: 55,
            //   fontWeight: 400,
            //   color: fontColor
            // },
            label: {
              show: vaildData(this.option.labelShow, true),
              // position: 'top',
              formatter: params => {
                //   console.log(params.value, 'liquidFill - value || *NaN% Detector*')
                const val =
                  Math.abs(params.value * 100).toFixed(
                    this.option.digitalCount ?? 2
                  ) + '%' // this.numberFixed2(params.value) + "%";
                return val
              },
              fontSize: this.option.labelFontSize || 40,
              color: fontColor
            },
            backgroundStyle: {
              color: this.option.bgcolor || 'rgba(255,255,255,0.8)', // 图表的背景颜色
              borderWidth: this.option.borderWidth ?? '5', // 图表的边框宽度
              borderColor: this.option.borderColor || '#444' // 图表的边框颜色
            },
            itemStyle: {
              opacity: this.option.waterOpacity || 1, // 波浪的透明度
              shadowBlur: this.option.waterWidth ?? 10, // 波浪的阴影范围
              shadowColor: this.option.waveColor || 'rgba(255, 102, 0, 1)' // 阴影颜色
            },
            emphasis: {
              itemStyle: {
                opacity: 1 // 鼠标经过波浪颜色的透明度
              }
            },
            color: [
              //   this.option.waterColor1 || "rgba(23,66,77,0.3)",
              '',
              this.option.waterColor2 || 'rgba(255,0,0,0.3)',
              this.option.waterColor3 || 'rgba(255,0,0,0.3)'
            ], // 水波的颜色 对应的是data里面值
            shape: this.option.shape || 'circle', // 水填充图的形状 circle默认圆形  rect圆角矩形  triangle三角形  diamond菱形  pin水滴状 arrow箭头状  还可以是svg的path
            center: !this.option.titleShow ? ['50%', '50%'] : ['50%', '58%'], // 图表相对于盒子的位置 第一个是水平的位置 第二个是垂直的值 默认是[50%,50%]是在水平和垂直方向居中 可以设置百分比 也可以设置具体值
            radius: '80%', // 图表的大小 值是圆的直径 可以是百分比 也可以是具体值 100%则占满整个盒子 默认是40%; 百分比下是根据宽高最小的一个为参照依据
            amplitude: 3, // 振幅 是波浪的震荡幅度 可以取具体的值 也可以是百分比 百分比下是按图标的直径来算
            waveLength: '50%', // 波的长度 可以是百分比也可以是具体的像素值  百分比下是相对于直径的 取得越大波浪的起伏越小
            phase: 0, // 波的相位弧度 默认情况下是自动
            period: (value, index) => {
              // 控制波的移动速度 可以是函数 也可以是数字 两个参数  value 是data数据里面的值 index 是data值的索引
              //   console.log(index * this.option.waterSpeed * 1000, index * 6000);
              return index * (this.option.waterSpeed * 1000 || 6000)
            },
            direction: this.option.direction || 'right' // 波移动的速度 两个参数  left 从右往左 right 从左往右
          }
        ]
      }
      if (sessionStorage.isSaving === '1') {
        // 保存的时候不开动画,截图可能不完全)
        option.series[0].animationDuration = 0
        option.series[0].animationDurationUpdate = 0
      }
      this.myChart.resize()
      this.myChart.setOption(option)
    }
  }
}
</script>
