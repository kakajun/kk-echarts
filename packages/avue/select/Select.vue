<template>
  <el-select
    ref="main"
    v-model="value"
    class="avue-select"
    :size="size"
    :multiple="multiple"
    @click="handleClick"
  >
    <el-option
      v-for="(item, index) in dic"
      :key="index"
      :disabled="item.disabled"
      :label="item.label"
      :value="item.value"
    >
      <span>{{ item.label }}</span>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'mini'
    },
    value: {
      type: [String, Number]
    },
    dic: {
      type: Array,
      default: () => []
    }
  },
  emits: ['click'],

  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
.avue-select {
  .el-tag {
    cursor: pointer;
  }
  &__desc {
    float: right;
    font-size: 13px;
    color: #8492a6;
  }
}
</style>
