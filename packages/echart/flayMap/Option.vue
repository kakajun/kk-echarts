<!-- 地图配置 -->
<template>
  <div>
    <el-form-item label="地图选择">
      <avue-select
        v-model="main.activeOption.mapData"
        :dic="main.DIC.MAP"
        placeholder="请选择地图"
      ></avue-select>
    </el-form-item>
    <el-form-item label="地图比例">
      <el-slider
        v-model="main.activeOption.zoom"
        :max="5"
        :step="0.1"
      ></el-slider>
    </el-form-item>
    <el-form-item label="字体大小">
      <avue-input-number
        v-model="main.activeOption.fontSize"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体高亮颜色">
      <el-color-picker v-model="main.activeOption.empColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="区域线">
      <avue-input-number
        v-model="main.activeOption.borderWidth"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="区域颜色">
      <el-color-picker v-model="main.activeOption.areaColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="区域高亮颜色">
      <el-color-picker v-model="main.activeOption.empAreaColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker v-model="main.activeOption.borderColor" show-alpha>
      </el-color-picker>
    </el-form-item>

    <template v-if="main.activeOption.type === 1">
      <el-form-item label="图片地址">
        <el-input v-model="main.activeOption.img"></el-input>
      </el-form-item>
      <el-form-item label="地图比例">
        <el-slider v-model="main.activeOption.scale" :max="300"></el-slider>
      </el-form-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Flaymap',
  inject: ['main']
}
</script>
