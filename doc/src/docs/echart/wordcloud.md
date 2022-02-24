# EchartWordcloud 字符云
:::tip
1.1.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
<script src="https://avuejs.com/cdn/echarts-wordcloud.min.js"></script>

```

:::demo 
```html
  <avue-echart-wordCloud ref="echart" :option="config" :data="data" width="1000"></avue-echart-wordCloud>
<script>
export default {
  data() {
      return {
        data: [{
          "name": "iPhone X",
          "value": 19651
        }, {
          "name": "Mac Pro",
          "value": 18341
        }, {
          "name": "华为P20",
          "value": 17319
        }, {
          "name": "小米手机",
          "value": 12550
        }, {
          "name": "欧莱雅",
          "value": 11638
        }, {
          "name": "玛莎拉蒂",
          "value": 10608
        }, {
          "name": "特斯拉Model S",
          "value": 8298
        }, {
          "name": "jackjones",
          "value": 7630
        }, {
          "name": "韩都衣舍",
          "value": 7440
        }, {
          "name": "天生要强",
          "value": 6065
        }, {
          "name": "梅西",
          "value": 5065
        }, {
          "name": "三只松鼠",
          "value": 4965
        }],
        config: {
          "minFontSize": 30,
          "maxFontSize": 80,
          "split": 30,
          "rotate": true
        }
      }
    },
}
</script>

```
:::

<script>
export default {
  data() {
      return {
        data: [{
          "name": "iPhone X",
          "value": 19651
        }, {
          "name": "Mac Pro",
          "value": 18341
        }, {
          "name": "华为P20",
          "value": 17319
        }, {
          "name": "小米手机",
          "value": 12550
        }, {
          "name": "欧莱雅",
          "value": 11638
        }, {
          "name": "玛莎拉蒂",
          "value": 10608
        }, {
          "name": "特斯拉Model S",
          "value": 8298
        }, {
          "name": "jackjones",
          "value": 7630
        }, {
          "name": "韩都衣舍",
          "value": 7440
        }, {
          "name": "天生要强",
          "value": 6065
        }, {
          "name": "梅西",
          "value": 5065
        }, {
          "name": "三只松鼠",
          "value": 4965
        }],
        config: {
          "minFontSize": 30,
          "maxFontSize": 80,
          "split": 30,
          "rotate": true
        }
      }
    },
}
</script>




