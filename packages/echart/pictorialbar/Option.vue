<!-- 象形图配置 -->
<template>
  <div>
    <slot></slot>
    <el-form-item label="图标">
      <img
        v-if="main.activeOption.symbol"
        :src="main.activeOption.symbol"
        alt=""
        width="100%"
      />
      <el-input v-model="main.activeOption.symbol">
        <template #append>
          <div @click="main.handleOpenImg('activeOption.symbol')">
            <i class="iconfont icon-img"></i>
          </div>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="图标字体大小">
      <avue-input-number
        v-model="main.activeOption.symbolSize"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="期间字体颜色">
      <el-color-picker v-model="main.activeOption.nameColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="间距">
      <el-slider v-model="main.activeOption.split"></el-slider>
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="X轴设置">
        <el-form-item label="显示">
          <el-switch v-model="main.activeOption.xAxisShow"> </el-switch>
        </el-form-item>
        <el-form-item label="字体大小">
          <avue-input-number v-model="main.activeOption.xNameFontSize">
          </avue-input-number>
        </el-form-item>
      </el-collapse-item>
      <el-collapse-item title="Y轴设置">
        <el-form-item label="显示">
          <el-switch v-model="main.activeOption.yAxisShow"> </el-switch>
        </el-form-item>
        <el-form-item label="字体大小">
          <avue-input-number v-model="main.activeOption.yNameFontSize">
          </avue-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Pictorialbar',
  inject: ['main']
}
</script>
