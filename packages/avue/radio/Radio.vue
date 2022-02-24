<template>
  <div class="avue-radio">
    <el-radio-group
      v-model="value"
      :size="size"
      :disabled="disabled"
      @change="handleChange"
      @click="handleClick"
    >
      <el-radio
        v-for="(item, index) in dic"
        :key="index"
        :label="item[valueKey]"
        :border="border"
        :readonly="readonly"
        :disabled="item[disabledKey]"
        >{{ item[labelKey] }}</el-radio
      >
    </el-radio-group>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    dic: {
      type: Array
    },
    size: {
      type: String,
      default: 'mini'
    },
    value: {
      type: String
    }
  },
  emits: ['input', 'change', 'click'],
  data() {
    return {
      name: 'radio'
    }
  },
  watch: {},
  methods: {
    handleChange() {
      this.$emit('input', '')
      this.$emit('change', '')
    },

    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss">
.avue-radio {
  .el-radio + .el-radio {
    margin-left: 0;
  }
  .el-radio {
    margin-right: 10px;
  }
}
</style>
