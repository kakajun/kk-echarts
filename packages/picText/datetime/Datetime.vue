<template>
  <div :ref="id" :class="b()" :style="style" @click="handleClick">
    <p :style="styleName">
      {{ nowDate }}
    </p>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
import dayjs from 'dayjs'
import { getDayText } from '@s/utils/date'
import { setPx } from '@s/utils/util.js'
export default {
  name: 'Datetime',
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
      tm: '',
      date: new Date()
    }
  },
  computed: {
    nowDate() {
      if (this.option.format === 'day') {
        return '星期' + getDayText()
      }
      const format = (this.option.format || 'yyyy-MM-dd hh:mm:ss')
        .replace('dd', 'DD')
        .replace('yyyy', 'YYYY')
      return dayjs(this.date).format(format)
    },
    styleName() {
      return {
        width: '100%',
        height: '100%',
        textAlign: this.option.textAlign,
        letterSpacing: this.setPx(this.option.split),
        textIndent: this.setPx(this.option.split),
        backgroundColor: this.option.backgroundColor,
        fontWeight: this.option.fontWeight || 'normal',
        fontSize: (this.option.fontSize || 30) + 'px',
        color: this.option.color || '#333'
      }
    }
  },
  created() {
    this.tm = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },
  beforeUnmount() {
    clearInterval(this.tm)
  },
  methods: {
    handleClick() {
      this.clickFormatter({
        data: this.dataChart
      })
    }
  }
}
</script>
