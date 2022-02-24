<!-- 柱形图配置 -->
<template>
  <div>
    <el-form-item label="数据类型">
      <!-- //利润：1403100 营业收入：1416000 -->
      <avue-select
        v-model="main.activeOption.dataType"
        :dic="[
          { label: '利润', value: '1403100' },
          { label: '营业收入', value: '1416000' }
        ]"
      >
      </avue-select>
      <!-- <el-button @click="aa()">aaaa</el-button> -->
    </el-form-item>
    <el-form-item label="起始年份">
      <avue-input-number
        v-model="main.activeOption.curyear"
        :max-rows="new Date().getFullYear()"
        style="width: 100%"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="结束年份">
      <avue-input-number
        v-model="main.activeOption.endyear"
        :max-rows="new Date().getFullYear()"
        style="width: 100%"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="刷新时间(毫秒)">
      <avue-input-number
        v-model="main.activeOption.updateFrequency"
        style="width: 100%"
      ></avue-input-number>
    </el-form-item>
    <el-form-item label="颜色调整">
      <div style="height: 4.5px"></div>
      <el-color-picker v-model="main.activeOption.nkColor"></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[0]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[1]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[2]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[3]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[4]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[5]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[6]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[7]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[8]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[9]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[10]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[11]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[12]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[13]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[14]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[15]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[16]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[17]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[18]"
      ></el-color-picker>
      <br />
      <el-color-picker
        v-model="main.activeOption.colorList[19]"
      ></el-color-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  name: 'Right',
  inject: ['main'],
  data() {
    return {}
  }
}
</script>
