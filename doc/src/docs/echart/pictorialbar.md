
# EchartPictorialBar 象形图
:::tip
1.1.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
  <avue-echart-pictorialbar ref="echart" :option="config" :data="data" width="1000"></avue-echart-pictorialbar>
<script>
export default {
  data() {
      return {
        data: [{
            "name": "PC",
            "value": 97,
            "url": "http://www.baidu.com"
          },
          {
            "name": "iOS",
            "value": 50,
            "url": "http://www.baidu.com"
          },
          {
            "name": "Android",
            "value": 59,
            "url": "http://www.baidu.com"
          },
          {
            "name": "windows phone",
            "value": 29
          },
          {
            "name": "Black berry",
            "value": 3
          },
          {
            "name": "Nokia S60",
            "value": 2
          },
          {
            "name": "Nokia S90",
            "value": 1
          }
        ],
        config: {
            symbolSize: 30,
            split: 30,
            fontSize: '24',
            xAxisShow: false,
            yAxisShow: true,
            color: '#4dffff',
            nameColor: '#564AA3',
            xNameFontSize: '24',
            yNameFontSize: '24'
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
            "name": "PC",
            "value": 97,
            "url": "http://www.baidu.com"
          },
          {
            "name": "iOS",
            "value": 50,
            "url": "http://www.baidu.com"
          },
          {
            "name": "Android",
            "value": 59,
            "url": "http://www.baidu.com"
          },
          {
            "name": "windows phone",
            "value": 29
          },
          {
            "name": "Black berry",
            "value": 3
          },
          {
            "name": "Nokia S60",
            "value": 2
          },
          {
            "name": "Nokia S90",
            "value": 1
          }
        ],
        config: {
            symbolSize: 30,
            split: 30,
            fontSize: '24',
            xAxisShow: false,
            yAxisShow: true,
            color: '#4dffff',
            nameColor: '#564AA3',
            xNameFontSize: '24',
            yNameFontSize: '24'
        }
      }
    },
}
</script>






