<!-- iframe配置 -->
<template>
  <div>
    <el-form-item label="地址">
      <el-input
        v-model="main.activeObj.data.value"
        style="width: 100%"
      ></el-input>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Iframea',
  inject: ['main']
}
</script>
