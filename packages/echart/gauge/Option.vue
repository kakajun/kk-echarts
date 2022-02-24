<template>
  <div>
    <slot></slot>
    <el-collapse accordion>
      <el-collapse-item title="数值设置">
        <el-form-item label="最小值">
          <el-input-number
            v-model="main.activeOption.gaugeMin"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="最大值">
          <el-input-number
            v-model="main.activeOption.gaugeMax"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="数值显示">
          <el-switch
            v-model="main.activeOption.detailShow"
            type="textarea"
          ></el-switch>
        </el-form-item>
        <el-form-item v-if="main.activeOption.detailShow" label="数值大小">
          <el-input-number
            v-model="main.activeOption.valueFontSize"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>

    <el-form-item label="开始角度数">
      <el-input-number
        v-model="main.activeOption.startAngle"
        style="width: 100%"
        controls-position="right"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="结束角度数">
      <el-input-number
        v-model="main.activeOption.endAngle"
        style="width: 100%"
        controls-position="right"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="结束角度数">
      <el-input-number
        v-model="main.activeOption.endAngle"
        style="width: 100%"
        controls-position="right"
      ></el-input-number>
    </el-form-item>

    <el-collapse accordion>
      <el-collapse-item title="刻度设置">
        <el-form-item v-if="main.activeOption.axisLabelShow" label="大刻度">
          <el-switch
            v-model="main.activeOption.splitLineShow"
            type="textarea"
          ></el-switch>
        </el-form-item>
        <el-form-item label="刻度数量">
          <el-input-number
            v-model="main.activeOption.SplitNumber"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="刻度线长度">
          <el-input-number
            v-model="main.activeOption.splitLineLength"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="小刻度">
          <el-switch
            v-model="main.activeOption.axisTickShow"
            type="textarea"
          ></el-switch>
        </el-form-item>
        <el-form-item v-if="main.activeOption.axisTickShow" label="刻度数量">
          <el-input-number
            v-model="main.activeOption.axisTickSplitNumber"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
        <el-form-item v-if="main.activeOption.axisTickShow" label="刻度线长度">
          <el-input-number
            v-model="main.activeOption.axisTickLength"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
        <!-- 刻度标签设置 -->
        <el-form-item label="显示刻度值">
          <el-switch v-model="main.activeOption.axisLabelShow"></el-switch>
        </el-form-item>
        <el-form-item
          v-if="main.activeOption.axisLabelShow"
          label="刻度字体大小"
        >
          <el-input-number
            v-model="main.activeOption.axisLabelFontSize"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>

        <el-form-item v-if="main.activeOption.axisLabelShow" label="纵向">
          <el-input
            v-model="main.activeOption.detailoffsetCenter"
            style="width: 100%"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="main.activeOption.axisLabelShow" label="标签位置">
          <el-input-number
            v-model="main.activeOption.axisLabeldDistance"
            style="width: 100%"
            controls-position="right"
          ></el-input-number>
        </el-form-item>
      </el-collapse-item>
    </el-collapse>

    <el-form-item label="刻度线粗度">
      <el-input-number
        v-model="main.activeOption.lineSize"
        style="width: 100%"
        controls-position="right"
      ></el-input-number>
    </el-form-item>

    <el-form-item label="指针长度">
      <el-input-number
        v-model="main.activeOption.pointLength"
        controls-position="right"
        style="width: 100%"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="指针宽度">
      <el-input-number
        v-model="main.activeOption.pointWidth"
        style="width: 100%"
        controls-position="right"
      ></el-input-number>
    </el-form-item>
  </div>
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
