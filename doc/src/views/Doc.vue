<template>
  <div class="doc">
    <div @click="active=true"
         class="silder-icon">
      <i class="iconfont icon-caidan"></i>
    </div>
    <div class="silder"
         :class="{'is-active':active}">
      <div class="item item--bold"
           v-for="item in navList"
           :key="item.name"
           :class="{'item--active':(item.path || item.href) ===activeNav}">
        <div style="padding-left:30px;font-weight:bold"
             @click="goLink(item)">
          <span class="title">{{item.name}}</span>
        </div>
        <template v-for="(gitem) in item.groups">
          <template v-for="citem in gitem.list">
            <div class="item"
                 :key="citem.name"
                 :class="{'item--active':(citem.path || citem.href) ===activeNav}">
              <div style="padding-left:60px"
                   @click="goLink(citem)">
                <span class="title">{{citem.title}}</span>
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div class="markdown">
      <router-view />
    </div>
  </div>
</template>

<script>
import nav from '@/doc.config'
export default {
  name: 'temp',
  data() {
    return {
      active: false,
      list: nav,
      navObj: {},
    }
  },
  mounted() {

  },
  computed: {

    index() {
      return this.navObj.count
    },
    navList() {
      return this.list[this.index].list
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
    goLink(item) {
      this.active = false
      if (item.href) {
        window.location.href = item.href
      } else if (item.path) {
        let path = item.path
        if (path.includes('#')) {
          path.replace('/#', '')
        } else {
          path = '/doc' + path
        }
        this.$router.push({ path: path })
      }
    },
  },
}
</script>

<style lang="scss">
.silder {
  width: 250px;
  height: calc(100% - 80px);
  position: fixed;
  top: 0;
  bottom: 0;
  margin-top: 80px;
  overflow: auto;
  background-color: #fff;
  border-right: 1px solid #e8e8e8;
  .item {
    transition: all 0.9s cubic-bezier(0.215, 0.61, 0.355, 1);
    &--bold {
      > a {
        font-weight: 700;
      }
    }
    &--active {
      background-color: #f0f5ff;
      border-left: 4px solid #00a680;
      text-indent: -4px;
      a {
        color: #00a680;
      }
    }
    a {
      display: block;
      color: #314659;
    }
    .title {
      font-size: 15px;
      line-height: 45px;
      height: 45px;
      list-style-type: disc;
      list-style-position: inside;
      cursor: pointer;
    }
  }
}
.doc {
  padding-top: 80px;
  margin-bottom: 50px;
  box-sizing: border-box;
  display: flex;
}
.markdown {
  padding: 0 30px 30px 290px;
  color: #314659;
  min-height: 600px;
  font-size: 14px;
  line-height: 2;
  width: 100%;
  box-sizing: border-box;
}
</style>
