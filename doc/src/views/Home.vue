<template>
  <div class="home">
    <div class="home-wepper">
      <div class="banner">
        <div class="bg-wrapper">
          <div class="bg-wrapper"
               id="smoky-bg">
            <canvas>Your browser does not support HTML5 canvas.</canvas>
          </div>
        </div>
        <div class="text-wrapper">
          <!-- <div class="logo-wrapper">
            <img class="logo"
                 src="images/logo.png"
                 alt="">
          </div> -->
          <div style="background-color:rgba(255,255,255,.1);color:#fff;font-weight:bold;padding:40px 20px;border-radius:10px">
            <div class="introduce">
              <p>一个基于avue和echart的前端图形展示外置组件库</p>
              <span>
                让数据驱动视图，减去繁琐的操作，更贴近企业级的前端开发组件
              </span>
            </div>
            <p class="changelog">
              &nbsp; &nbsp;
              <a href="https://avuejs.com/doc/installation">avue官方文档</a>
            </p>
            <div class="button-wrapper">
              <router-link class="home-button"
                           to="/doc/dev/getting-started">
                文档查阅
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="home-page-wrapper  page1">
        <div class="home-page">
          <div class="page1-content">
            <div class="page1-item">
              <a href="#"
                 class="page1-item-link">
                <div class="page1-item-title">
                  <h2>快速展现</h2>
                  <p>提供现成的图形可视化私有库，插件引入导入配置，图形快速生成。</p>
                </div>
              </a>
            </div>
            <div class="page1-item">
              <a href="#"
                 class="page1-item-link">
                <div class="page1-item-title">
                  <h2>差异配置</h2>
                  <p>针对不同需求，支持修改配置快速达到想要效果。</p>
                </div>
              </a>
            </div>
            <div class="page1-item">
              <a href="#"
                 class="page1-item-link">
                <div class="page1-item-title">
                  <h2>可视化操作</h2>
                  <p>支持可视化配置图形参数，简单配置，无需记参数。</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {

  },
  data() {
    return {
    }
  },
  created() {},
  mounted() {
    window.$('#smoky-bg').waterpipe({
      gradientStart: '#00a680',
      gradientEnd: '#001eff',
      smokeOpacity: 0.1,
      smokeSize: 100,
      numCircles: 1,
      maxMaxRad: 'auto',
      minMaxRad: 'auto',
      minRadFactor: 0,
      iterations: 8,
      drawsPerFrame: 10,
      lineWidth: 2,
      speed: 10,
      bgColorInner: '#00a680',
    })
  },
}
</script>

<style lang="scss">
$bg_main: #00a680;

.home-page {
  padding: 100px 24px;
  width: 1200px;
  margin: auto;
}
.home {
  text-align: center;
}
.home-flower {
  position: absolute;
  top: 0;
  left: 0;
}
.home-button {
  background: #fff;
  background-color: $bg_main;
  color: #fff;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  box-sizing: content-box;
  font-weight: 500;
  transform: translateY(0);
  box-shadow: 0 0 0 rgba(16, 45, 164, 0);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.55);
  }
  &--line {
    background-color: transparent;
    border: 1px solid #fff;
    color: #fff;
    margin-left: 24px;
    &:hover {
      background: $bg_main;
      border-color: transparent;
    }
  }
}
.home-page-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
  .title {
    font-size: 32px;
    line-height: 45px;
    margin: 0 auto 64px;
    text-align: center;
    color: #314659;
  }
}

.page1 {
  background-color: #fff;
  &-content {
    margin: 0 auto;
    width: 1000px;
    display: flex;
    justify-content: space-around;
  }
  &-item {
    margin: 0 20px;
    &-title {
      h2 {
        margin-bottom: 20px;
        color: #42b983;
        font-size: 1.5em;
        font-weight: 400;
        padding: 0.5em 0;
      }
      p {
        line-height: 25px;
        color: #7f8c8d;
        word-spacing: 0.05em;
      }
    }
  }
}
.page2 {
  background: #edf1f5;
  .bg {
    width: 1401px;
    height: 1843px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -700px;
  }
  &-content {
    padding: 0 20px;
    text-align: left;
    line-height: 30px;
    text-indent: 2em;
    color: #666;
  }
}
.page3 {
  padding-bottom: 20px;
  &-content {
    padding: 40px 0;
    margin: 0 auto 40px auto;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  &-menu {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  &-item {
    padding: 0px 10px;
    margin: 0 10px 30px 10px;
    box-sizing: border-box;
    border-radius: 2px;
    a {
      color: #999;
      display: flex;
      align-items: center;
    }
    img {
      margin-right: 5px;
    }
    p {
      font-weight: 600;
      font-size: 26px;
    }
  }
}
.page4 {
  background: $bg_main;
  color: #fff;
  min-height: 292px;
  text-align: center;
  .bg {
    width: 1440px;
    height: 558px;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -720px;
  }
  p {
    margin: 0 auto 40px;
    font-size: 14px;
    line-height: 20px;
    max-width: 930px;
  }
}
.home-header {
  background-color: rgba(0, 0, 0, 0.2);
  .header-wrapper {
    width: 1200px;
  }
}
.banner {
  padding-top: 100px;
  color: #fff;
  position: relative;
  background-color: #00a680;
  height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  .bg-wrapper {
    position: absolute;
    opacity: 0.8;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logo-wrapper {
    width: 160px;
    margin: auto;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .introduce {
    font-family: 'Raleway', sans-serif;
    max-width: 587px;
    margin: 30px auto 30px;
    span {
      line-height: 25px;
      font-size: 17px;
    }
    p {
      margin-bottom: 20px;
      font-size: 36px;
    }
  }
  .text-wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);
  }
  .changelog {
    margin-bottom: 60px;
    color: #fff;
    font-size: 13px;
    span {
      margin-right: 10px;
    }
    a {
      color: #fff;
      font-size: 13px;
      text-decoration: underline;
    }
  }
}
</style>
