<template>
  <div :ref="id" :class="b()" :style="style"></div>
</template>

<script>
import common from '@s/mixins/common.js'
import { deepClone } from '@s/utils/util.js'
export default {
  name: 'Common',
  mixins: [common],
  methods: {
    updateChart() {
      const optionData = deepClone(this.dataChart) || []
      const option = this.dataFormatter(optionData)
      this.myChart.resize()
      this.myChart.setOption(option, true)
    }
  }
}
</script>
