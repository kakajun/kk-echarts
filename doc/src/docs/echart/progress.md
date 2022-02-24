

# EchartProgress 环形图/进度条
:::tip
 1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html

<avue-echart-progress :option="option" :data="data" ></avue-echart-progress>
<avue-echart-progress :option="option2" :data="data" width="500"></avue-echart-progress>
<script>
export default {
  data() {
    return {
      theme:'',
      data: {
          label: '人数增涨率',
          value: 40,
          data: 80
      },
      option: {
        aboveColor: 'rgba(35, 153, 105, 1)',
            belowColor: 'rgba(224, 62, 45, 1)',
            currencyType: 10000,
            digit: 2,
            type: 'circle',
            // type: 'line',
            strokeWidth: 45,
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 47,
            fontWeight: 'bold',
            suffixColor: 'rgba(0, 0, 0, 1)',
            suffixFontSize: 50,
            suffixFontWeight: 'bold',
            borderColor: 'rgba(255, 120, 0, 1)',
            split: 0,
            width: 400,
            height: 800,
            useEasing: true
      },
      option2: {
        aboveColor: 'rgba(35, 153, 105, 1)',
            belowColor: 'rgba(224, 62, 45, 1)',
            currencyType: 10000,
            digit: 2,
            // type: 'circle',
            type: 'line',
            strokeWidth: 45,
            color: 'rgba(0, 0, 0, 1)',
            fontSize: 47,
            fontWeight: 'bold',
            suffixColor: 'rgba(0, 0, 0, 1)',
            suffixFontSize: 50,
            suffixFontWeight: 'bold',
            borderColor: 'rgba(255, 120, 0, 1)',
            split: 0,
            width: 400,
            height: 800,
            useEasing: true
      },
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
      theme:'',
      data: {
        label: '人数增涨率',
        value: 40,
        data: 80
      },
      option: {
        aboveColor: 'rgba(35, 153, 105, 1)',
        belowColor: 'rgba(224, 62, 45, 1)',
        currencyType: 10000,
        digit: 2,
        type: 'circle',
        // type: 'line',
        strokeWidth: 45,
        color: 'rgba(0, 0, 0, 1)',
        fontSize: 47,
        fontWeight: 'bold',
        suffixColor: 'rgba(0, 0, 0, 1)',
        suffixFontSize: 50,
        suffixFontWeight: 'bold',
        borderColor: 'rgba(255, 120, 0, 1)',
        split: 0,
        width: 400,
        height: 800,
        useEasing: true
      },
      option2: {
        aboveColor: 'rgba(35, 153, 105, 1)',
        belowColor: 'rgba(224, 62, 45, 1)',
        currencyType: 10000,
        digit: 2,
        // type: 'circle',
        type: 'line',
        strokeWidth: 45,
        color: 'rgba(0, 0, 0, 1)',
        fontSize: 47,
        fontWeight: 'bold',
        suffixColor: 'rgba(0, 0, 0, 1)',
        suffixFontSize: 50,
        suffixFontWeight: 'bold',
        borderColor: 'rgba(255, 120, 0, 1)',
        split: 0,
        width: 400,
        height: 800,
        useEasing: true
      },
    }
  }
}
</script>




