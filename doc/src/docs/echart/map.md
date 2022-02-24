# EchartMap 地图
:::tip
1.1.0+
::::

```
<!-- 导入需要的包 -->  


```

:::demo 
```html
  <avue-echart-map ref="echart" :option="option" :data="data" width="1000"></avue-echart-map>
<script>
export default {
  data() {
      return {
        option: {
          "borderWidth": 3,
          "type": 0,
          "borderColor": "#0dffff",
          "areaColor": "#061d33",
          "banner": true,
          "bannerTime": 3000,
          "fontSize": 18,
          "zoom": 0.6,
          "empAreaColor": "#061d33",
          "color": "rgba(13, 255, 255, 1)",
          "mapKey": 3
          }
        },
        data: [{
          "name": "测试坐标",
          "value": 1,
          "lng": 118.836486,
          "lat": 36.653518,
          "zoom": 1
        }]
      }

    }
}
</script>

```
:::

<script>
export default {
  data() {
      return {
        option: {
          "borderWidth": 3,
          "type": 0,
          "borderColor": "#0dffff",
          "areaColor": "#061d33",
          "banner": true,
          "bannerTime": 3000,
          "fontSize": 18,
          "zoom": 0.6,
          "empAreaColor": "#061d33",
          "color": "rgba(13, 255, 255, 1)",
          "mapKey": 3
        },
        data: [{
          "name": "测试坐标",
          "value": 1,
          "lng": 118.836486,
          "lat": 36.653518,
          "zoom": 1
        }]
      }

    }
}
</script>