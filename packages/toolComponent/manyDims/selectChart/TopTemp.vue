<!-- 新建资源区主页的头部 by ht -->
<template>
  <div ref="topwd" class="datas-create-top-all">
    <div v-for="item of lineList" :key="item.text" class="datas-create-top-wd">
      <span>{{ item.text }}</span>
      <datas-create-top-dl
        v-model:cube-object="cubeObject"
        :vaule-name="item.value"
        @setCloum="$emit('setCloum')"
      ></datas-create-top-dl>
    </div>
  </div>
</template>

<script>
import datasCreateTopDl from './TopDl' // 度量的组件 by ht
export default {
  name: 'DatasCreateLeft',
  components: {
    datasCreateTopDl
  },
  props: {
    cubeObject: {
      type: Object
    }
  },
  emits: ['setCloum'],
  data() {
    return {}
  },

  computed: {
    // 每次type变化了再取一次list,一定要有个依赖,要不然不会重新计算
    lineList() {
      const datas = {
        dims: {
          text: 'X：',
          value: 'dims'
        },
        facts: {
          text: 'Y：',
          value: 'facts'
        },
        legend: {
          text: 'Z：',
          value: 'legend'
        }
      }
      return datas
    }
  },
  methods: {}
}
</script>
<style lang="scss">
// 新建资源-头部
.datas-create-top-all {
  width: 100%;
  padding: 0 10px;
  font-size: 14px;
  white-space: pre-wrap;
  box-sizing: border-box;
  .datas-create-top-wd {
    width: 100%;

    line-height: 50px;
    color: rgba(84, 91, 104, 1);
    vertical-align: top;
    border-bottom: 1px solid #efefef;
  }
  .add-total {
    position: relative;
    display: inline-block;
    width: 80px !important;
    width: 136px;
    height: 27px;
    padding: 0 10px;
    line-height: 27px;
    color: #fff;
    background: #5182e4;
    border-bottom-left-radius: 22px;
    border-top-left-radius: 23px;
    i {
      margin-right: 5px;
    }
  }
}
</style>
