# EchartBar 柱形图
:::tip
1.0.0+
::::

```
<!-- 导入需要的包 -->  
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/4.2.1/echarts.min.js"></script>
```

:::demo 
```html
<el-button type="primary" @click="config.switchTheme=!config.switchTheme" size="small">{{config.switchTheme?'关闭主题':'打开主题'}}</el-button>
<el-button @click="theme='macarons'" size="small">换紫色主题</el-button>
<el-button @click="theme='wonderland'" size="small">换绿色主题</el-button>
<avue-echart-bar ref="echart" :theme="theme" :option="config" :data="data" width="1000"></avue-echart-bar>
<script>
export default {
  data() {
      return {
        theme:'',
        data: {
          "categories": [
            "北京",
            "上海",
            "杭州",
            "深圳",
            "杭州",
            "深圳",
            "广州",
            "连云港"
          ],
          "series": [
            {
              "name": "手机品牌",
              "data": [
                1131776,
                1349011,
                905718,
                1349011,
                905718,
                656020,
                571234,
                467397
              ]
            }, {
              "name": "其他手机品牌",
              "data": [
                1131776,
                1349011,
                905718,
                1349011,
                905718,
                656020,
                571234,
                467397
              ]
            }
          ]
        },
        config: {
            digit: 2,
            linearDirection: '从左到右',
            numberFresh: false, // 数字滚动刷新
            // 功能设置
            addPictorialBar: false, // 添加趋势图标
            pictorialBarFontSize: 64, // 图标大小
            isStack: false,
            markLineShow: false, // 辅助线
            markLineVal: 0, // 辅助线数值,
            markLineTypeStyle: 'dashed', // 线型
            markLineColor: 'rgba(45, 97, 135, 1)', // 辅助线颜色
            tooltipShow: true, // 提示
            axisPointerShow: true, // 参考线是否显示
            axisPointerWidth: 2,
            axisPointerBorderColor: 'rgba(42,47,56,0.3)',
            tooltipBackgroundColor: '#fff', // 提示框背景色
           yPointerShow:true, //Y指示器
            axisPointerLabelShow: true, // 控制参考线下面的文本标签
            // 数值
            labelShow: true, // 图内数值显示设置
            labelShowFontSize: 12, // 图内数值字号
            labelShowColor: 'rgba(45, 97, 135, 1)', // 图内汉字字色
   
            labelShowPosition: 'top', // 位置
            markPointMax: false, // 显示最大值
            markPointMin: false, // 显示最小值
            dataZoomShow: false, // 缩略轴
            // contrastShowDataZoom: contrastShowDataZoom,//用来做判断  对比条图不显示缩略轴
            // 图例
            legend: true, // 图例位置
            legendalign: 'up', // 图例排齐方式
            legendHeight: 'auto', // 图例高度
            legendColor: 'rgba(45, 97, 135, 1)', // 图例颜色
            legendFontSize: 16, // 图例字号
            legendOrient: 'horizontal', // 默认横排
            legendPostion: 'N', // 图例默认放在中上
            titlePostion: 'left', // 标题字体位置
            titleColor: 'rgba(45, 97, 135, 1)',
            xAxisTickShow: true,
            yAxisTickShow: true,
            setChartLocation: [0], // 图表位置设置
            xShowLabel: true, // x显示标签
            yShowLabel: [0, 1], // y显示标签
            gridX: 10, // 左边距
            gridY: 70, // 上边距//默认需要把标题的位置空着
            gridX2: 10, // 右边距
            gridY2: 10, // 下边距
            // X轴
            xAxisShow: true, // 坐标轴名称与轴线之间的距离
            xAxisinterval: true, // 强制显示所有标签。
            // xnameGap: 60,
            ynameGap: 15, // 坐标轴名称与轴线之间的距离 !!!!!!!!!!
            // 轴线颜色
            xlineColor: 'rgba(45, 97, 135, 1)',
            xTypeStyle: 'solid', // 轴线样式
            // 字体
            xNameFontSize: 12, // x轴名称字号
            xnameColor: 'rgba(45, 97, 135, 1)', // x轴名称颜色
            xAxisRotate: 0, // 倾斜方向
            xAxisNameShow: [1], // X轴标题是否显示
            // xAxisName: null,
            xAxisNameColor: 'rgba(45, 97, 135, 1)', // x轴坐标名字颜色
            xAxisNameFontSize: 12, // x轴坐标名字字号
            xAxisMin: 0, // x轴最小值
            // xAxisMax: null, // x轴最大值
            xAxisMinCustomize: [0], // x轴最小值自定义控制按钮是否勾选上
            xAxisMaxCustomize: [0], // y轴最大值自定义控制按钮是否勾选上
            // disabledAxis:true, //默认输入框能填写  输入框默认是禁止状态的可以用这个属性
            // y轴
            yAxisShow: true, // y轴显示/隐藏
            yAxisMaxHandel: false, // 手动关闭
            yAxisinterval: true, // 强制显示所有标签。
            // 轴线
            ylineColor: 'rgba(45, 97, 135, 1)', // y轴轴线颜色
            yTypeStyle: 'solid', // y轴轴线样式
            // 字体
            ynameColor: 'rgba(45, 97, 135, 1)', // y轴标题颜色
            yNameFontSize: 12, // y轴标题字号
            yAxisRotate: 0, // y轴旋转
            // yAxisNameShow: [0, 1], //Y轴标题是否显示__
            yAxisOffset: 0, // ~!!!!!!!!!!!!!
            // yAxisName: 'null', // y轴名称
            yAxisNameColor: 'rgba(45, 97, 135, 1)', // y轴名称颜色
            yAxisNameFontSize: 12, // y轴名称字号
            // yAxisMin: null, // y轴最小值
            // yAxisMax: null, // y轴最大值

            // 横网
            xAxisSplitLineShow: false, // 横网显示/隐藏
            xAxisSplitLineShowColor: 'rgba(45, 97, 135, 1)', // 横网颜色
            xAxisSplitLineShowType: 'solid', // 横网样式
            // 纵网
            yAxisSplitLineShow: false, // 纵网显示/隐藏
            yAxisSplitLineShowColor: 'rgba(45, 97, 135, 1)', // 纵网颜色
            yAxisSplitLineShowType: 'solid', // 纵网样式
            legendLeft: 136, // 左对齐
            legendTop: 110, // 上对齐
            xAxisInverse: false, // x轴反转
            smooth: false, // 折线图的曲线或折线
            // areaStyleShow: null, // 面积透明度度  面积折线图的,
            editConfig: {},
            // formatterNumber: null,
            categoryCounterPosition: '前',
            // yFlipRight: yFlipRight,// 是bar2 和bar3的时候  翻转Y轴的轴名字不跟着动
            // setAxisShow: setAxisShow,//是否显示次轴
            czAxisShow: true, // 次轴是否显示
            czShowLabel: [0, 1], // 次轴显示标签
            czNameFontSize: 12, // 次轴字体大小
            cznameColor: 'rgba(45, 97, 135, 1)', // 次轴字体颜色
            czAxisRotate: 0, // 次轴轴旋转
            czAxisNameShow: [0, 1], // 次轴轴标题是否显示
            // czAxisName: null, // 次轴轴名称
            czAxisNameColor: 'rgba(45, 97, 135, 1)', // 次轴轴名称颜色
            czAxisNameFontSize: 12, // 次轴轴名称字号
            czlineColor: 'rgba(45, 97, 135, 1)', // y轴轴线颜色
            czTypeStyle: 'solid', // y轴轴线样式
            cznameGap: 30, // 坐标轴名称与轴线之间的距离
            // czAxisMin: null, // 次轴轴最小值
            // czAxisMax: null, // 次轴轴最大值
            // czAxisFormatter: null, // 次轴单位
            czAxisMinCustomize: [0], // 次轴最小值自定义控制按钮是否勾选上
            czAxisMaxCustomize: [0], // 次轴最大值自定义控制按钮是否勾选上
            barImgShow: false, // 是否开启自定义渲染背景
            barImg: '', // 背景图片BASE64 或url都成
            barColor: [
              {
                color1: 'rgba(131,191,246,1)',
                color2: 'rgba(24, 141, 240, 1)',
                postion: 90,
                $index: 0,
                _show: true
              },
              {
                color1: 'rgba(35, 183, 229, 1)',
                color2: 'rgba(86, 74, 163, 1)',
                postion: 50,
                $index: 1,
                _show: true
              }
            ],
            // barColorSp: [{
            //     color1: '#83bff6',
            //     color2: '#188df0',
            // }],
            barMinHeight: 2,
            currencyType: 10000,
            titleShow: true
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
          "categories": [
            "北京",
            "上海",
            "杭州",
            "深圳",
            "杭州",
            "深圳",
            "广州",
            "连云港"
          ],
          "series": [
            {
              "name": "手机品牌",
              "data": [
                1131776,
                1349011,
                905718,
                1349011,
                905718,
                656020,
                571234,
                467397
              ]
            }, {
              "name": "其他手机品牌",
              "data": [
                1131776,
                1349011,
                905718,
                1349011,
                905718,
                656020,
                571234,
                467397
              ]
            }
          ]
        },
        config: {
            digit: 2,
            linearDirection: '从左到右',
            numberFresh: false, // 数字滚动刷新
            // 功能设置
            addPictorialBar: false, // 添加趋势图标
            pictorialBarFontSize: 64, // 图标大小
            isStack: false,
            markLineShow: false, // 辅助线
            markLineVal: 0, // 辅助线数值,
            markLineTypeStyle: 'dashed', // 线型
            markLineColor: 'rgba(45, 97, 135, 1)', // 辅助线颜色
            tooltipShow: true, // 提示
            axisPointerShow: true, // 参考线是否显示
            axisPointerWidth: 2,
            axisPointerBorderColor: 'rgba(42,47,56,0.3)',
            tooltipBackgroundColor: '#fff', // 提示框背景色
            yPointerShow:true ,// Y 指示器
            axisPointerLabelShow: true, // 控制参考线下面的文本标签
            // 数值
            labelShow: true, // 图内数值显示设置
            labelShowFontSize: 12, // 图内数值字号
            labelShowColor: 'rgba(45, 97, 135, 1)', // 图内汉字字色
            labelShowPosition: 'top', // 位置
            markPointMax: false, // 显示最大值
            markPointMin: false, // 显示最小值
            dataZoomShow: false, // 缩略轴
            // contrastShowDataZoom: contrastShowDataZoom,//用来做判断  对比条图不显示缩略轴
            // 图例
            legend: true, // 图例位置
            legendalign: 'up', // 图例排齐方式
            legendHeight: 'auto', // 图例高度
            legendColor: 'rgba(45, 97, 135, 1)', // 图例颜色
            legendFontSize: 16, // 图例字号
            legendOrient: 'horizontal', // 默认横排
            legendPostion: 'N', // 图例默认放在中上
            titlePostion: 'left', // 标题字体位置
            titleColor: 'rgba(45, 97, 135, 1)',
            xAxisTickShow: true,
            yAxisTickShow: true,
            setChartLocation: [0], // 图表位置设置
            xShowLabel: true, // x显示标签
            yShowLabel: [0, 1], // y显示标签
            gridX: 10, // 左边距
            gridY: 70, // 上边距//默认需要把标题的位置空着
            gridX2: 10, // 右边距
            gridY2: 10, // 下边距
            // X轴
            xAxisShow: true, // 坐标轴名称与轴线之间的距离
            xAxisinterval: true, // 强制显示所有标签。
            // xnameGap: 60,
            ynameGap: 15, // 坐标轴名称与轴线之间的距离 !!!!!!!!!!
            // 轴线颜色
            xlineColor: 'rgba(45, 97, 135, 1)',
            xTypeStyle: 'solid', // 轴线样式
            // 字体
            xNameFontSize: 12, // x轴名称字号
            xnameColor: 'rgba(45, 97, 135, 1)', // x轴名称颜色
            xAxisRotate: 0, // 倾斜方向
            xAxisNameShow: [1], // X轴标题是否显示
            // xAxisName: null,
            xAxisNameColor: 'rgba(45, 97, 135, 1)', // x轴坐标名字颜色
            xAxisNameFontSize: 12, // x轴坐标名字字号
            xAxisMin: 0, // x轴最小值
            // xAxisMax: null, // x轴最大值
            xAxisMinCustomize: [0], // x轴最小值自定义控制按钮是否勾选上
            xAxisMaxCustomize: [0], // y轴最大值自定义控制按钮是否勾选上
            // disabledAxis:true, //默认输入框能填写  输入框默认是禁止状态的可以用这个属性
            // y轴
            yAxisShow: true, // y轴显示/隐藏
            yAxisMaxHandel: false, // 手动关闭
            yAxisinterval: true, // 强制显示所有标签。
            // 轴线
            ylineColor: 'rgba(45, 97, 135, 1)', // y轴轴线颜色
            yTypeStyle: 'solid', // y轴轴线样式
            // 字体
            ynameColor: 'rgba(45, 97, 135, 1)', // y轴标题颜色
            yNameFontSize: 12, // y轴标题字号
            yAxisRotate: 0, // y轴旋转
            // yAxisNameShow: [0, 1], //Y轴标题是否显示__
            yAxisOffset: 0, // ~!!!!!!!!!!!!!
            // yAxisName: 'null', // y轴名称
            yAxisNameColor: 'rgba(45, 97, 135, 1)', // y轴名称颜色
            yAxisNameFontSize: 12, // y轴名称字号
            // yAxisMin: null, // y轴最小值
            // yAxisMax: null, // y轴最大值

            // 横网
            xAxisSplitLineShow: false, // 横网显示/隐藏
            xAxisSplitLineShowColor: 'rgba(45, 97, 135, 1)', // 横网颜色
            xAxisSplitLineShowType: 'solid', // 横网样式
            // 纵网
            yAxisSplitLineShow: false, // 纵网显示/隐藏
            yAxisSplitLineShowColor: 'rgba(45, 97, 135, 1)', // 纵网颜色
            yAxisSplitLineShowType: 'solid', // 纵网样式
            legendLeft: 136, // 左对齐
            legendTop: 110, // 上对齐
            xAxisInverse: false, // x轴反转
            smooth: false, // 折线图的曲线或折线
            // areaStyleShow: null, // 面积透明度度  面积折线图的,
            editConfig: {},
            // formatterNumber: null,
            categoryCounterPosition: '前',
            // yFlipRight: yFlipRight,// 是bar2 和bar3的时候  翻转Y轴的轴名字不跟着动
            // setAxisShow: setAxisShow,//是否显示次轴
            czAxisShow: true, // 次轴是否显示
            czShowLabel: [0, 1], // 次轴显示标签
            czNameFontSize: 12, // 次轴字体大小
            cznameColor: 'rgba(45, 97, 135, 1)', // 次轴字体颜色
            czAxisRotate: 0, // 次轴轴旋转
            czAxisNameShow: [0, 1], // 次轴轴标题是否显示
            // czAxisName: null, // 次轴轴名称
            czAxisNameColor: 'rgba(45, 97, 135, 1)', // 次轴轴名称颜色
            czAxisNameFontSize: 12, // 次轴轴名称字号
            czlineColor: 'rgba(45, 97, 135, 1)', // y轴轴线颜色
            czTypeStyle: 'solid', // y轴轴线样式
            cznameGap: 30, // 坐标轴名称与轴线之间的距离
            // czAxisMin: null, // 次轴轴最小值
            // czAxisMax: null, // 次轴轴最大值
            // czAxisFormatter: null, // 次轴单位
            czAxisMinCustomize: [0], // 次轴最小值自定义控制按钮是否勾选上
            czAxisMaxCustomize: [0], // 次轴最大值自定义控制按钮是否勾选上
            barImgShow: false, // 是否开启自定义渲染背景
            barImg: '', // 背景图片BASE64 或url都成
            barColor: [
              {
                color1: 'rgba(131,191,246,1)',
                color2: 'rgba(24, 141, 240, 1)',
                postion: 90,
                $index: 0,
                _show: true
              },
              {
                color1: 'rgba(35, 183, 229, 1)',
                color2: 'rgba(86, 74, 163, 1)',
                postion: 50,
                $index: 1,
                _show: true
              }
            ],
            // barColorSp: [{
            //     color1: '#83bff6',
            //     color2: '#188df0',
            // }],
            barMinHeight: 2,
            currencyType: 10000,
            titleShow: true
          }
      }
    }
}
</script>




