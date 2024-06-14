<!-- 高德地图配置 -->
<template>
  <div>
    <slot></slot>
    <el-form-item label="标签显示">
      <el-switch
        v-model="main.activeOption.labelShow"
        type="textarea"
      ></el-switch>
    </el-form-item>
    <el-form-item label="填充形状">
      <el-select
        v-model="main.activeOption.shape"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option label="圆形" value="circle" />
        <el-option label="矩形" value="rect" />
        <el-option label="三角形" value="triangle" />
        <el-option label="菱形" value="diamond" />
        <el-option label="水滴状" value="pin" />
        <el-option label="箭头状" value="arrow" />
      </el-select>
    </el-form-item>
    <el-form-item label="文字色(增加)">
      <el-color-picker v-model="main.activeOption.aboveColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="文字色(减少)">
      <el-color-picker v-model="main.activeOption.belowColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="字体大小">
      <el-input-number
        v-model="main.activeOption.labelFontSize"
        style="width: 100%"
        controls-position="right"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="背景色">
      <el-color-picker v-model="main.activeOption.bgcolor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="边框宽度">
      <avue-input-number
        v-model="main.activeOption.borderWidth"
        :min-rows="0"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker v-model="main.activeOption.borderColor" show-alpha>
      </el-color-picker>
    </el-form-item>

    <el-form-item label="波浪宽度">
      <avue-input-number
        v-model="main.activeOption.waterWidth"
        :min-rows="0"
        :max-rows="100"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="波浪颜色">
      <el-color-picker v-model="main.activeOption.waveColor" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="水颜色1">
      <el-color-picker v-model="main.activeOption.waterColor2" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="水颜色2">
      <el-color-picker v-model="main.activeOption.waterColor3" show-alpha>
      </el-color-picker>
    </el-form-item>
    <el-form-item label="水流速度(s)">
      <avue-input-number
        v-model="main.activeOption.waterSpeed"
        :min-rows="1"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="水流方向">
      <el-select
        v-model="main.activeOption.direction"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option label="左边" value="left" />
        <el-option label="右边" value="right" />
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
export default {
  inject: ['main'],
  data() {
    return {
      featureOptions: [
        {
          label: '区域面',
          value: 'bg'
        },
        {
          label: '道路',
          value: 'road'
        },
        {
          label: '建筑物',
          value: 'building'
        },
        {
          label: '标注',
          value: 'point'
        }
      ],
      checkedList: ['bg', 'road']
    }
  },
  methods: {
    changeList(checkedArr) {
      this.main.activeOption.features = checkedArr
    }
  }
}
</script>
