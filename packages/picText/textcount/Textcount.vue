<template>
  <div :ref="id" :class="b()" :style="style">
    <div :id="targetId" ref="box" :style="styleName" :class="b('box')"></div>
    <!-- <span>{{option.frontContent||''}}</span> -->
    <!-- <span>{{option.backunit||''}}</span> -->
  </div>
</template>

<script>
import { CountUp } from 'countup.js'
import common from '@s/mixins/common.js'
import { setPx } from '@s/utils/util.js'
export default {
  name: 'Textcount',

  mixins: [common],
  props: {
    data: {
      type: Object
    }
  },
  data() {
    return {
      setPx,
      targetId: 'targetId' + Math.random(),
      countUp: '',
      check: '' // 延迟时间的句柄
    }
  },
  computed: {
    options() {
      const obj = {
        decimalPlaces: this.option.decimals ?? 2, // 小数位数
        duration: this.option.duration ?? 2, // animation duration in seconds
        useEasing: this.option.useEasing ?? true, // 过渡动画效果，默认true
        useGrouping: this.option.percentile ?? true, // 千分位效果，例：1000->1,000。默认true
        separator: this.option.separator || ',', // 使用千分位时分割符号
        decimal: this.option.decimal || '.', // 小数位分割符号
        prefix: this.option.frontContent || '', // 前置符号
        suffix: this.option.backunit || '' // 后置符号，可汉字
      }
      return obj
    },
    showData() {
      // 如果传来的是字符串,肯定不会动的,所以这里转一下
      let value = this.dataChart.value
      if (value) {
        if (this.option.currencyType) {
          value = (value / this.option.currencyType) * 1
        }
        return value * 1 || 0
      } else {
        return ''
      }
    },
    lineHeight() {
      return this.option.lineHeight || 40
    },
    fontSize() {
      return this.option.fontSize || 30
    },
    split() {
      return this.option.split
    },
    textWidth() {
      const textLen = (this.dataChart.value || '').length
      return textLen * this.fontSize
    },
    styleName() {
      return {
        transform: 'translateX(' + this.left + 'px)',
        textAlign: this.option.textAlign,
        letterSpacing: this.setPx(this.split),
        textIndent: this.setPx(this.split),
        backgroundColor: this.option.backgroundColor,
        fontWeight: this.option.fontWeight || 'normal',
        fontSize: this.fontSize + 'px',
        lineHeight: this.lineHeight + 'px',
        color: this.option.color || '#333',
        textShadow: this.textShadow,
        borderRadius: this.option.borderRadius + 'px'
      }
    },
    textShadow() {
      if (this.option.textShadow) {
        return `${this.option.textShadowDistance}px ${this.option.textShadowDistanceY}px ${this.option.textShadowblur}px ${this.option.textShadowColor}`
      } else {
        return ''
      }
    }
  },
  watch: {
    showData() {
      this.updateChart()
    }
  },
  beforeUnmount() {
    clearInterval(this.check)
  },

  methods: {
    move() {
      if (!this.countUp.error) {
        this.countUp.start()
      } else {
        console.error(this.countUp.error)
      }
    },
    decimals() {
      if (this.option.decimals * 1 !== 0) {
        return this.option.decimals * 1 || 2
      } else {
        return 0
      }
    },
    updateChart() {
      console.log('更新了')
      //   this.countUp = new CountUp('targetId', this.showData, this.options)
      this.countUp = new CountUp(this.targetId, this.showData, this.options)
      const delaytime = this.option.delaytime || 0
      this.check = setTimeout(() => {
        this.move()
      }, delaytime * 1000)
    }
  }
}
</script>
