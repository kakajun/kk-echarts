# Echartliquidfillfull 刻度盘
:::tip
1.0.1+
::::

```
引入水球图依赖
import "echarts-liquidfill"
```

:::demo 
```html
<avue-echart-liquidfillfull ref="echart" :option="config" :data="data" height="500" width="500">
</avue-echart-liquidfillfull>
<script>
export default {
  data() {
      return {
        theme:'',
        data: {
          value: 0.5,
          name: '完成率',
          unit: '%'
        },
        config: {
          bgcolor: '#fff',
          borderColor: 'rgba(98, 67, 199,1)',
          borderWidth: 10
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
        theme:'',
        data: {
         value: 0.5,
         name: '完成率',
         unit: '%'
        },
        config: {
         bgcolor: '#fff',
         borderColor: 'rgba(98, 67, 199,1)',
         borderWidth: 10
        }
      }
    },
}
</script>




