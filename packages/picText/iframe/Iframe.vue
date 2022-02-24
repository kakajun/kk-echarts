<template>
  <div :ref="id" :class="b()" :style="style" @click="handleClick">
    <iframe :src="dataChart.value" draggable="false"></iframe>
  </div>
</template>

<script>
import common from '@s/mixins/common.js'
export default {
  name: 'Iframe',
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
    return {}
  },
  computed: {},
  methods: {
    handleClick() {
      this.clickFormatter({
        data: this.dataChart
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.Iframe {
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
