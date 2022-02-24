<template>
  <div>
    <el-form-item label="文本内容">
      <el-input
        v-model="main.activeObj.data.value"
        style="width: 100%"
      ></el-input>
    </el-form-item>
    <el-form-item label="字体">
      <el-select v-model="main.activeOption.fontFamily" placeholder="">
        <el-option
          v-for="item in dicOption.fontFamily"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- <el-select v-model="main.activeOption.fontFamily"
                 :dic="dicOption.fontFamily">
      </el-select> -->
    </el-form-item>
    <el-form-item label="字体大小">
      <el-input-number
        v-model="main.activeOption.fontSize"
        controls-position="right"
        style="width: 100%"
        :min="0"
        :max="200"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker v-model="main.activeOption.color"></el-color-picker>
    </el-form-item>

    <el-form-item label="文字阴影">
      <el-switch v-model="main.activeOption.textShadow"></el-switch>
    </el-form-item>
    <template v-if="main.activeOption.textShadow">
      <el-form-item label="┗━阴影距离">
        <el-input-number
          v-model="main.activeOption.textShadowDistance"
          style="width: 100%"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="┗━模糊距离">
        <el-input-number
          v-model="main.activeOption.textShadowblur"
          style="width: 100%"
          controls-position="right"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="┗━阴影色">
        <el-color-picker
          v-model="main.activeOption.textShadowColor"
          style="width: 100%"
          show-alpha
        ></el-color-picker>
      </el-form-item>
    </template>

    <el-form-item label="字体间距" style="margin-top: 10px">
      <el-input-number
        v-model="main.activeOption.split"
        controls-position="right"
        style="width: 100%"
        :max="300"
        :min="0"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="字体行间距">
      <el-input-number
        v-model="main.activeOption.lineHeight"
        controls-position="right"
        style="width: 100%"
        :max="300"
        :min="0"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="字体背景">
      <el-color-picker
        v-model="main.activeOption.backgroundColor"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="文字粗细">
      <el-select v-model="main.activeOption.fontWeight" placeholder="">
        <el-option
          v-for="item in dicOption.fontWeight"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- <el-select v-model="main.activeOption.fontWeight"
                 :dic="dicOption.fontWeight">
      </el-select> -->
    </el-form-item>
    <el-form-item label="对齐方式">
      <el-select v-model="main.activeOption.textAlign" placeholder="">
        <el-option
          v-for="item in dicOption.textAlign"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!-- <el-select v-model="main.activeOption.textAlign"
                 :dic="dicOption.textAlign">
      </el-select> -->
    </el-form-item>
    <el-collapse accordion>
      <el-collapse-item title="跑马灯设置">
        <el-form-item label="开启">
          <el-switch v-model="main.activeOption.scroll"></el-switch>
        </el-form-item>
        <template v-if="main.activeOption.scroll">
          <el-form-item label="滚动速度">
            <el-input
              v-model="main.activeOption.speed"
              style="width: 100%"
            ></el-input>
          </el-form-item>
        </template>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Texta',
  inject: ['main'],
  data() {
    return {}
  },
  methods: {}
}
</script>
