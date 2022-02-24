<template>
  <div class="avuex-header">
    <div class="header-wrapper">
      <router-link to="/"
                   class="logo-link">
        <div class="logo">
          <!-- <div class="logo-img">
            <img src="/images/logo.png" />
            <div class="logo-active"
                 :style="{height:height+'px'}">
              <img src="/images/logo-active.png"
                   alt="">
            </div>
          </div> -->
          <span :style="nameStyle">经邦组件库</span>
        </div>

      </router-link>
      <div class="nav">
        <!-- <div class="nav-item"
             v-for="(item,index) in nav"
             :key="index"
             :class="{'nav-item--active':getActive(item)}">
          <a :href="item.href"
             v-if="item.href">
            <span>{{item.title}}</span>
          </a>
          <router-link :to="{path:item.path,query:item.query}"
                       v-else>
            <span>{{item.title}}</span>
          </router-link>
        </div> -->
        <el-menu :default-active="activeIndex"
                 text-color="#fff"
                 active-text-color="#ff"
                 mode="horizontal">
          <template v-for="(item,index) in nav">
            <el-menu-item :index="index+''"
                          v-if="!item.children"
                          :key="index">
              <router-link :to="item.path"
                           v-if="item.path">{{item.title}}</router-link>
              <a :href="item.href"
                 v-else>{{item.title}}</a>
            </el-menu-item>
            <el-submenu :index="index+''"
                        :key="index"
                        v-else>
              <template slot="title">{{item.title}}</template>
              <template v-for="(citem,cindex) in item.children">
                <el-menu-item :index="index+'-'+cindex"
                              :key="cindex">
                  <router-link :to="citem.path"
                               v-if="item.path">{{citem.title}}</router-link>
                  <a :href="citem.href"
                     v-else>{{citem.title}}</a>
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
    </div>

  </div>
</template>

<script>
import { removeToken } from '@/util/auth'
import nav from '@/nav.config.js'
import doc from '@/doc.config'

export default {
  data() {
    return {
      activeIndex: '0',
      nav,
      height: 0,
      list: doc,
      navObj: {},
    }
  },
  computed: {
    nameStyle() {
      if (this.$route.path !== '/') {
        return {
          color: '#fff',
        }
      }
      return {}
    },
    index() {
      return this.navObj.count
    },
    activeNav() {
      return this.$route.path.replace('/doc', '')
    },
  },
  watch: {
    $route: {
      handler() {
        this.findItem(this.list)
      },
      immediate: true,
    },
  },
  methods: {
    handleLogout() {
      removeToken('user')
      window.location.reload()
    },

    findItem(nav) {
      nav.forEach((ele) => {
        let children = ele.list || ele.groups
        if (ele.path === this.activeNav) {
          this.navObj = ele
        } else if (children) {
          this.findItem(children)
        }
      })
    },
    getActive(item) {
      if (this.$route.path.includes('doc')) {
        return item.count === this.index
      }
      return this.$route.path === (item.href || item.path)
    },
  },
}
</script>

<style lang="scss">
// #00a680
$bg_main: #00a680;
.avuex-header {
  position: fixed;
  width: 100%;
  z-index: 999;
  height: 64px;
  padding: 4px 35px;
  background: #00a680;
  color: #fff;
  box-sizing: border-box;
  .header-wrapper {
    display: flex;
    margin: auto;
    width: 100%;
    height: 100%;
    transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);
    justify-content: space-between;
  }
  .logo {
    padding-top: 5px;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 24px;
    letter-spacing: 2px;
    font-family: SF UI Display, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica,
      Arial, sans-serif;
    text-decoration: none;
    b {
      font-weight: 500;
      color: $bg_main;
      font-size: 34px;
    }
    &-img {
      position: relative;
      margin-right: 10px;
      width: 40px;
      img {
        width: 100%;
      }
    }
    &-active {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }
  }

  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    .el-menu.el-menu--horizontal {
      border: none;
    }
    .el-menu {
      background-color: transparent;
    }
    .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
    .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
    .el-menu--horizontal > .el-submenu .el-sub-menu__title:hover {
      background-color: transparent;
    }
    .el-menu-item,
    .el-sub-menu__title {
      padding: 0 15px;
    }
    .el-sub-menu__title i {
      color: #fff;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      color: #fff;
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      border-color: #fff;
    }
    .gitbtn {
      border: 1px solid #fff;
      border-radius: 28px;
      height: 28px;
      line-height: 28px;
      color: #fff;
      margin-right: 10px;
      font-size: 14px;
      padding: 0 16px;
      box-sizing: content-box;
      a {
        color: #fff;
      }
    }
  }
}
</style>
