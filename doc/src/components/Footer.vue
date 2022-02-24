<template>
  <div class="footer"
       v-if="!['/pay'].includes($route.path)">
    {{$route.path}}
    <p>展现产品部 出品</p>
    <p>Copyright © 2021 安徽经邦软件技术有限公司</p>
    <p><a href="http://www.cnbisoft.com/">网站备案号：皖ICP备15018743号-1</a></p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  padding: 50px 0;
  background-color: #000;
  text-align: center;
  font-size: 14px;
  p {
    line-height: 30px;
    color: #fff;
  }
  a {
    color: #fff;
  }
}
</style>
