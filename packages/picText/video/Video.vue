<template>
  <div ref="main" :class="b()" :style="style">
    <video
      ref="vidback"
      :loop="option.loop"
      :style="style"
      style="object-fit: fill"
      :src="dataChart.value"
      muted="muted"
      autoplay
    />
  </div>
</template>

<script>
import common from '@s/mixins/common.js'

export default {
  name: 'Video',
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
      paused: false
    }
  },
  computed: {},
  watch: {},

  mounted() {
    const dom = this.$refs.vidback
    if (this.App) {
      this.App.paused = true
      dom.oncanplay = () => {
        this.App.paused = false
      }
    }

    this.$watch('App', {
      handler(n) {
        n.paused ? dom.pause() : dom.play()
      },
      deep: true
    })
  },
  methods: {}
}
</script>
