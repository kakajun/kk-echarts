<template>
  <div class="imgborder">
    <el-form-item label="背景色">
      <el-color-picker
        v-model="main.activeOption.backgroundColor"
        show-alpha
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="透明度">
      <el-input-number
        v-model="main.activeOption.imgborderOpacity"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :max="100"
        :step="1"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="图片圆角">
      <el-input-number
        v-model="main.activeOption.imgborderRadius"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :step="1"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="边框宽度">
      <el-input-number
        v-model="main.activeOption.borderWidth"
        controls-position="right"
        style="width: 100%"
        :max="100"
        :step="1"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="边框类型">
      <el-select
        v-model="main.activeOption.borderStyle"
        style="width: 100%"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="边框颜色">
      <el-color-picker
        v-model="main.activeOption.borderColor"
        show-alpha
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="渐变开启">
      <el-switch
        v-model="main.activeOption.switchjb"
        type="textarea"
      ></el-switch>
    </el-form-item>
    <div v-if="main.activeOption.switchjb">
      <el-form-item label="渐变方向">
        <div class="cradio-select">
          <el-radio v-model="main.activeOption.selectDrection" label="z">
            纵向
          </el-radio>
          <el-radio v-model="main.activeOption.selectDrection" label="h">
            横向
          </el-radio>
          <el-radio v-model="main.activeOption.selectDrection" label="x">
            斜向
          </el-radio>
        </div>
      </el-form-item>

      <el-form-item label="渐变颜色">
        <div class="cradio-cpick">
          <div class="cradio-font">开始</div>
          <el-color-picker
            v-model="main.activeOption.firClor"
            show-alpha
          ></el-color-picker>
        </div>

        <div class="cradio-cpick">
          <div class="cradio-font">结束</div>
          <el-color-picker
            v-model="main.activeOption.secClor"
            show-alpha
          ></el-color-picker>
        </div>
      </el-form-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Imgborder',
  inject: ['main'],
  data() {
    return {
      options: [
        {
          value: 'solid',
          label: '实线'
        },
        {
          value: 'dashed',
          label: '虚线'
        },
        {
          value: 'dotted',
          label: '点状'
        },
        {
          value: 'double',
          label: '双线'
        },
        {
          value: 'groove',
          label: '3D 凹槽'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.imgborder {
  .cradio-select {
    // display: flex;
    margin-bottom: 18px;
    // flex-direction: row;
  }
  .cradio-cpick {
    display: flex;
    margin-bottom: 18px;
    margin-left: -30px;
  }
  .cradio-font {
    width: 50px;
    //font-size: 12px;
    color: #606266;
  }
}
</style>
