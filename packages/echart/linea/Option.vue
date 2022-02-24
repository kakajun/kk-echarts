<!--折线图配置 -->
<template>
  <div>
    <slot></slot>
    <el-collapse accordion>
      <el-collapse-item title="折线设置">
        <el-form-item label="面积堆积">
          <el-switch v-model="main.activeOption.areaStyle"></el-switch>
        </el-form-item>
        <el-form-item label="线条宽度">
          <el-slider v-model="main.activeOption.lineWidth" :max="100" :min="1">
          </el-slider>
        </el-form-item>
        <el-form-item label="点的大小">
          <el-slider v-model="main.activeOption.symbolSize" :max="100" :min="1">
          </el-slider>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Linea',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {
    logs() {
      console.log(this.main.activeOption, 'this.option---line')
    }
  }
}
</script>
