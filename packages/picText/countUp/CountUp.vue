<template>
  <div class="">{{ opt }}</div>
</template>

<script>
import { ref } from 'vue'
import { useTransition, TransitionPresets } from '@vueuse/core'
import { currencyF } from '@s/utils/util.js'
export default {
  name: 'AvueCountUp',
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    decimals: Number,
    end: Number
  },
  computed: {
    opt() {
      return currencyF(this.output)
    }
  },
  setup(props) {
    const count = ref(0)
    const output = useTransition(count, {
      duration: props.duration,
      transition: TransitionPresets.easeOutExpo
    })
    // eslint-disable-next-line vue/no-setup-props-destructure
    count.value = props.end

    return {
      output
    }
  }
}
</script>
