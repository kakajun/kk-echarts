<template>
  <div :ref="id" :style="styleImgName"></div>
</template>

<script>
import { setPx } from '@s/utils/util'
import common from '@s/mixins/common.js'
export default {
  name: 'Imgborder',
  mixins: [common],
  data() {
    return {}
  },
  computed: {
    styleImgName() {
      const style = {
        width: setPx(this.width),
        height: setPx(this.height),
        boxSizing: 'border-box',
        borderWidth: setPx(this.option.borderWidth),
        borderStyle: this.option.borderStyle,
        borderColor: this.option.borderColor,
        backgroundColor:
          this.option.backgroundColor || 'rgba(180, 181, 198, 0)',
        backgroundClip: 'padding-box',
        opacity: 100 - this.option.imgborderOpacity + '%', // || 1,
        filter: 'blur(0px)',
        borderRadius: this.option.imgborderRadius + 'px' || 0
      }
      if (this.option.switchjb) {
        if (this.option.selectDrection === 'h') {
          style.backgroundImage = `linear-gradient(to right, ${this.option.firClor}, ${this.option.secClor})`
        } else if (this.option.selectDrection === 'x') {
          style.backgroundImage = `linear-gradient(to bottom right, ${this.option.firClor}, ${this.option.secClor})`
        } else {
          style.backgroundImage = `linear-gradient(${this.option.firClor}, ${this.option.secClor})`
        }
      }
      return style
    }
  },
  watch: {},
  methods: {}
}
</script>
