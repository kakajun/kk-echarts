<template>
  <el-collapse accordion>
    <slot></slot>
    <el-collapse-item title="外部设置">
      <el-form-item label="指针颜色">
        <el-color-picker v-model="main.activeOption.gColor"></el-color-picker>
      </el-form-item>
      <el-form-item label="边框大小">
        <avue-input-number
          v-model="main.activeOption.borderwidth"
          :min-rows="0"
          :max-rows="200"
        ></avue-input-number>
      </el-form-item>
    </el-collapse-item>

    <el-collapse-item title="文字设置">
      <el-form-item label="字体颜色">
        <el-color-picker
          v-model="main.activeOption.detailColor"
        ></el-color-picker>
      </el-form-item>
      <el-form-item label="字体大小">
        <avue-input-number
          v-model="main.activeOption.detailFontSize"
          :min-rows="0"
          :max-rows="200"
        ></avue-input-number>
      </el-form-item>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  name: 'Gauge',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
