

# EchartFunnel 漏斗图
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-imgborder :option="option" :data="data" :width="500" height="1000"></avue-echart-imgborder>
<script>
export default {
  data() {
      return {
        data: {},
        option: {
          backgroundColor: 'rgba(180, 181, 198, 1)',
          imgborderRadius: 8,
          imgborderOpacity: 0,
          firClor: '',
          secClor: '',
          selectDrection: 'z',
          borderWidth: 3,
          borderStyle: 'solid',
          borderColor: 'rgba(30, 144, 255, 1)',
          switchjb: false
        },
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
        data: {},
        option: {
            backgroundColor: 'rgba(180, 181, 198, 1)',
            imgborderRadius: 8,
            imgborderOpacity: 0,
            firClor: '',
            secClor: '',
            selectDrection: 'z',
            borderWidth: 3,
            borderStyle: 'solid',
            borderColor: 'rgba(30, 144, 255, 1)',
            switchjb: false
        },
      }
    },
}
</script>




