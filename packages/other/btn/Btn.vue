<template>
  <div ref="main" :class="b()" :style="style">
    <el-button
      :type="option.btnType"
      :icon="btnIcon"
      :style="fontStyle"
      :size="option.btnSize"
      disabled
    >
      {{ option.text }}
    </el-button>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
export default {
  name: 'Btn',
  mixins: [common],
  props: {},
  data() {
    return {}
  },
  computed: {
    fontStyle() {
      return {
        fontSize: this.option.textSize + 'px',
        color: this.option.color
      }
    }
  },
  watch: {},
  methods: {
    handleClick() {
      this.clickFormatter({
        data: this.dataChart
      })
    }
  }
}
</script>
