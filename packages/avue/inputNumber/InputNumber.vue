<template>
  <el-input-number
    :model-value="value"
    :precision="precision"
    :placeholder="placeholder"
    :size="size"
    :min="minRows"
    :max="maxRows"
    :step="step"
    :clearable="disabled ? false : clearable"
    :readonly="readonly"
    :controls-position="controlsPosition"
    :controls="controls"
    :label="placeholder"
    :disabled="disabled"
    @click="handleClick"
    @focus="e => $emit('focus', e)"
    @blur="handleBlur"
  ></el-input-number>
</template>

<script>
export default {
  name: 'InputNumber',
  props: {
    size: {
      type: String,
      default: 'mini'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Number
    },
    readonly: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    controls: {
      type: Boolean,
      default: true
    },
    step: {
      type: Number,
      default: 1
    },
    controlsPosition: {
      type: String,
      default: 'right'
    },
    precision: {
      type: Number
    },
    minRows: {
      type: Number,
      default: -Infinity
    },
    maxRows: {
      type: Number,
      default: Infinity
    }
  },
  emits: ['focus', 'click', 'blur'],
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}
</script>
