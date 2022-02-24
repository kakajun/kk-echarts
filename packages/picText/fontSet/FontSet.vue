<template>
  <!-- 炫彩文本 -->
  <div :style="style">
    <p :class="b()" :style="fontStyle">
      {{ option.content || '炫彩文本' }}
    </p>
  </div>
</template>
<script>
import divCommon from '@s/mixins/divCommon.js'
export default {
  name: 'Fontset',
  mixins: [divCommon],
  data() {
    return {
      fontStyle: ''
    }
  },
  watch: {},
  mounted() {
    this.updateData()
  },
  methods: {
    setColor() {
      let str = ''
      if (this.option.isGradual === '0' || !this.option.isGradual) {
        str = 'color:' + (this.option.waterColor1 || '#fff') + ';'
      } else if (
        this.option.isGradual === 'bottom' ||
        this.option.isGradual === 'right'
      ) {
        str =
          'background:linear-gradient(to ' +
          this.option.isGradual +
          ',' +
          (this.option.waterColor1 || '#fff') +
          ',' +
          (this.option.waterColor2 || '#fff') +
          ');color: transparent;-webkit-background-clip: text;'
      } else if (this.option.isGradual === '3') {
        str =
          'background:linear-gradient(to right bottom,' +
          (this.option.waterColor1 || '#fff') +
          ',' +
          (this.option.waterColor2 || '#fff') +
          ');color: transparent;-webkit-background-clip: text;'
      } else if (this.option.isGradual === '4') {
        str =
          'background:linear-gradient(to right top,' +
          (this.option.waterColor1 || '#fff') +
          ',' +
          (this.option.waterColor2 || '#fff') +
          ');color: transparent;-webkit-background-clip: text;'
      }
      return str
    },
    updateData() {
      const fontColor = this.setColor()
      const str = 'color:' + (this.option.waterColor1 || '#fff') + ';'
      const fontSize = 'font-size:' + this.option.titleFontSize + 'px;'
      const fontWeight = 'font-weight:' + this.option.weight + ';'
      this.fontStyle = str + fontWeight + fontSize + ''
      this.$nextTick(() => {
        this.fontStyle = fontColor + fontWeight + fontSize + ''
      })
    }
  }
}
</script>
<style scoped>
.FontSet {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
