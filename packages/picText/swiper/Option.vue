<!-- 轮播配置 -->
<template>
  <div>
    <el-form-item label="类型">
      <avue-radio
        v-model="main.activeOption.type"
        :dic="dicOption.swiperType"
      ></avue-radio>
    </el-form-item>
    <el-form-item label="轮播时间">
      <el-input
        v-model="main.activeOption.interval"
        style="width: 100%"
      ></el-input>
    </el-form-item>
    <el-form-item label="选择器">
      <avue-radio
        v-model="main.activeOption.indicator"
        :dic="dicOption.swiperIndicator"
      >
      </avue-radio>
    </el-form-item>
    <el-form-item label="图片透明度">
      <el-slider v-model="main.activeOption.opacity"></el-slider>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  inject: ['main'],
  data() {
    return {}
  }
}
</script>
