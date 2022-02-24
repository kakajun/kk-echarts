<template>
  <div id="app">
    <Header ref="header"
            :class="{'home-header':$route.path==='/'}"></Header>
    <router-view ref="main" />
    <Footer v-if="!$route.path.includes('/doc')"></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      //   reload: false,
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop <= 1000) {
        this.$refs.header.height = scrollTop * 0.1
      }
    },
  },
}
</script>
<style lang="scss">
.pusher {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.5s;
}

.pusher.is-active {
  -webkit-filter: blur(5.01px);
  filter: blur(5.01px);
}
* {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar-track-piece {
  background-color: transparent;
}
::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: hsla(220, 4%, 58%, 0.3);
}
a {
  color: #00a680;
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
#app {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
.el-main {
  padding: 0 20px;
}
</style>
