<!-- 地图配置 -->
<template>
  <div>
    <el-form-item label="开启轮播">
      <el-switch v-model="main.activeOption.banner"></el-switch>
    </el-form-item>
    <template v-if="main.activeOption.banner">
      <el-form-item label="轮播时间">
        <el-input v-model="main.activeOption.bannerTime"></el-input>
      </el-form-item>
    </template>
    <template v-if="main.activeOption.type === 0">
      <el-form-item label="地图选择">
        <avue-select
          v-model="main.activeOption.mapDataUrl"
          :dic="MAP"
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
    </template>
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
  name: 'Map',
  inject: ['main'],
  data() {
    return {
      MAP: ''
    }
  },
  created() {
    this.initDic()
  },
  methods: {
    // 初始化字典
    async initDic() {
      const getList = data => {
        // console.log(data, 77777777777)
        return this.$axios({
          url: '/cnbi/project/map/list',
          method: 'post',
          params: data
        })
      }
      const res = await getList({
        page: 1,
        pageSize: 100
      })
      const data = res.result
      this.MAP = data.records.map(ele => {
        return {
          label: ele.mapname,
          value: '/cnbi/project/map/detail?mapid=' + ele.nid
        }
      })
    }
  }
}
</script>
