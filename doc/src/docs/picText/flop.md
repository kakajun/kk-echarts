# EchartFlop 翻牌器
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<avue-echart-flop ref="echart" :option="config" :data="data" width="1000"></avue-echart-flop>
<script>
export default {
  data() {
      return {
        data: [{
              backgroundColor: '#67C23A',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#409EFF',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#E6A23C',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#F56C6C',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#7232dd',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: 'blue',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            }],
        config: {
            currencyType: 10000,
            digit: 2,
            span: 3,
            decimals: 2,
            whole: true,
            padding: 12,
            textAlign: 'left',
            borderWidth: 1,
            fontWeight: 'normal',
            splity: 23,
            splitx: 17,
            fontSize: 28,
            prefixSplity: 4,
            prefixFontSize: 12,
            backgroundColor: 'rgba(245, 108, 108, 1)',
            suffixText: '人',
            currencyType: 10000,
            suffixInline: true,
            suffixSplitx: 0,
            suffixFontSize: 18
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
        data: [{
              backgroundColor: '#67C23A',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#409EFF',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#E6A23C',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#F56C6C',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: '#7232dd',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            },
            {
              backgroundColor: 'blue',
              prefixText: '某某某总人数',
              value: '12345',
              suffixText: '人'
            }],
        config: {
            currencyType: 10000,
            digit: 2,
            span: 3,
            decimals: 2,
            whole: true,
            padding: 12,
            textAlign: 'left',
            borderWidth: 1,
            fontWeight: 'normal',
            splity: 23,
            splitx: 17,
            fontSize: 28,
            prefixSplity: 4,
            prefixFontSize: 12,
            backgroundColor: 'rgba(245, 108, 108, 1)',
            suffixText: '人',
            currencyType: 10000,
            suffixInline: true,
            suffixSplitx: 0,
            suffixFontSize: 18
        },
      }
    }
}
</script>





