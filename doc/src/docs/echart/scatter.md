

# EchartScatter 散单图
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-scatter :option="option" :data="data" :width="1000"></avue-echart-scatter>
<script>
export default {
  data() {
      return {
        theme:'',
        option: {
          title: '2019年度潍坊城市销售额排名',
          lineSize: 25,
          barColor: [{
              postion: 0.2,
              color1: '#91c7ae'
            },
            {
              postion: 0.8,
              color1: '#63869e'
            },
            {
              postion: 1,
              color1: '#c23531'
            }
          ]
        },
        data: [{
            data: [
              [1, 8.04],
              [2, 6.95],
              [3, 7.58],
              [4, 8.81],
              [5, 8.33],
              [6, 9.96],
              [7, 7.24]
            ]
          },
          {
            data: [
              [1, 4.04],
              [2, 3.95],
              [3, 6.58],
              [4, 7.81],
              [5, 4.33],
              [6, 8.96],
              [7, 5.24]
            ]

          }]
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
        option: {
          switchTheme:true,
          title: '2019年度潍坊城市销售额排名',
          lineSize: 25,
          barColor: [{
              postion: 0.2,
              color1: '#91c7ae'
            },
            {
              postion: 0.8,
              color1: '#63869e'
            },
            {
              postion: 1,
              color1: '#c23531'
            }
          ]
        },
        data: [{
            data: [
              [1, 8.04],
              [2, 6.95],
              [3, 7.58],
              [4, 8.81],
              [5, 8.33],
              [6, 9.96],
              [7, 7.24]
            ]
          },
          {
            data: [
              [1, 4.04],
              [2, 3.95],
              [3, 6.58],
              [4, 7.81],
              [5, 4.33],
              [6, 8.96],
              [7, 5.24]
            ]

          }]
      }
    },
}
</script>




