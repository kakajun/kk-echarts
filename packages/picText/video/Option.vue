<!-- video配置 -->
<template>
  <div>
    <el-form-item label="地址">
      <el-input v-model="main.activeObj.data.value"></el-input>
    </el-form-item>
    <el-form-item label="循环播放">
      <el-switch v-model="main.activeOption.loop"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ['main']
}
</script>
