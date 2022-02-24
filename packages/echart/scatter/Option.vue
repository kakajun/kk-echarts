<template>
  <div>
    <slot></slot>
    <el-form-item label="字体大小">
      <el-input-number
        v-model="main.activeOption.fontSize"
        style="width: 100%"
        :min="0"
        :max="200"
        controls-position="right"
      ></el-input-number>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Scatter',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
