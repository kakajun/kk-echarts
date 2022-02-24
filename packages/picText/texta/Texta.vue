<template>
  <div ref="main" :class="b()" :style="style">
    <div ref="box" :class="b('box')">
      <a ref="box" :class="b('text')" :style="styleName" v-html="content" />
      <!-- :href="linkHref" -->
      <!-- :target="linkTarget" -->
    </div>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
import { currencyF, vaildData, setPx } from '@s/utils/util.js'

export default {
  name: 'Text',
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
      check: '',
      left: 0
    }
  },
  computed: {
    content() {
      try {
        if (this.option.percentile) {
          return currencyF(this.dataChart.value, this.option.digitalCount)
        } else if (this.option.evarlShow) {
          // 如果开启了代码显示
          // eslint-disable-next-line no-eval
          return eval(this.dataChart.value)
        } else return this.dataChart.value
      } catch (error) {
        this.$message.warning('文本内容请不要千分位显示！')
        return 0
      }
    },
    scroll() {
      return vaildData(this.option.scroll, false)
    },
    // linkHref() {
    //   return this.option.linkHref || '#'
    // },
    linkTarget() {
      return this.option.linkTarget || '_self'
    },
    step() {
      return this.option.step || 5
    },
    speed() {
      return this.option.speed || 100
    },
    lineHeight() {
      return this.option.fontSize + this.option.lineHeight || 0
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
    fontFamily() {
      return this.option.fontFamily
    },
    textShadow() {
      if (this.option.textShadow) {
        return `${this.option.textShadowDistance}px ${this.option.textShadowDistanceY}px ${this.option.textShadowblur}px ${this.option.textShadowColor}`
      } else {
        return ''
      }
    },
    styleName() {
      return {
        width: this.scroll ? setPx(this.textWidth) : 'auto',
        transform: 'translateX(' + this.left + 'px)',
        textAlign: this.option.textAlign,
        letterSpacing: setPx(this.split),
        textIndent: setPx(this.split),
        backgroundColor: this.option.backgroundColor,
        fontFamily: this.option.fontFamily,
        fontWeight: this.option.fontWeight || 'normal',
        fontSize: this.fontSize + 'px',
        lineHeight: this.lineHeight + 'px',
        color: this.option.color || '#333',
        textShadow: this.textShadow,
        borderRadius: this.option.borderRadius + 'px'
      }
    }
  },
  watch: {
    scroll() {
      this.move()
    },
    speed() {
      this.move()
    }
  },
  beforeUnmount() {
    clearInterval(this.check)
  },
  mounted() {
    if (!this.dataChart || this.dataChart.length === 0)
      this.dataChart = { value: 123456789 }
    this.move()
  },
  methods: {
    handleClick() {
      this.clickFormatter({
        data: this.dataChart
      })
    },
    move() {
      clearInterval(this.check)
      if (this.scroll) {
        this.check = setInterval(() => {
          if (this.left < -this.textWidth) {
            this.left = this.width
          }
          this.left = this.left - this.step
        }, this.speed)
      } else {
        this.left = 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.Text {
  overflow: hidden;

  &__box {
    width: 100%;
    height: 100%;
  }

  &__text {
    display: block;
    text-decoration: none;
  }
}
</style>
