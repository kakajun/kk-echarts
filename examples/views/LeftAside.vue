<template>
  <div class="sideMenu">
    <!-- 菜单组件 -->
    <el-menu
      default-active="exa/bar"
      :default-openeds="[1]"
      :style="menu"
      router
      unique-opened
      class="el-menu-vertical-demo"
    >
      <span v-for="(obj, index) of templateList" :key="index">
        <el-sub-menu :index="index + 's'">
          <template #title>
            <!-- <i class="icon iconfont icon-text"></i> -->
            <i :class="'icon iconfont ' + obj.icon" />
            <span>{{ obj.label }}</span>
          </template>
          <el-menu-item-group v-for="item of obj.children" :key="item.path">
            <el-menu-item :index="item.path" @click="clickRouter(item)">
              <i :class="'icon iconfont ' + item.option.icon" />
              {{ item.name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </span>
    </el-menu>
  </div>
</template>

<script>
import base from '../option/base.js'
export default {
  data() {
    return {
      templateList: [] // 组件列表
    }
  },
  computed: {
    menu() {
      return `height:${window.innerHeight - 60}px;`
    }
  },
  mounted() {
    // console.log(base, "bbbbbbbbbvvvvvvvvv")
    base.forEach(ele => {
      ele.children.forEach(obj => {
        obj.name = obj.label
        obj.path = '/' + obj.option.component.prop
      })
    })
    this.templateList = base
  },
  methods: {
    clickRouter(item) {
      console.log(item, 'itemitem')
      this.$router.push('/views' + item.path)
    }
  }
}
</script>

<style lang="scss">
.icon {
  margin-right: 5px;
}
.sideMenu {
  .el-menu {
    background-color: #171b22;
    border-right: none;
  }
  .el-menu-item,
  .el-sub-menu__title {
    height: 40px;
    line-height: 40px;
  }
  .el-sub-menu .el-menu-item {
    height: 34px;
    line-height: 34px;
  }
  .el-sub-menu__title * {
    color: #fff;
  }
  .el-menu-item {
    color: #fff;
  }
  .el-menu-item:focus,
  .el-menu-item:hover {
    background-color: #000 !important;
  }
  .el-sub-menu__title:hover {
    background-color: #000 !important;
  }
}
</style>
