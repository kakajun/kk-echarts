/**
*================================================
*@date:2021/06/01
*@author:mj
*@desc:所有处理图形格式formater的函数
*如果你想修改本图形数据处理方法,先了解一下我的设计思路
为什么要有legend这一项?
X 轴管横坐标,Y轴管纵坐标,当Y轴放两个度量时,那么2个legend就会出现,看起来Z轴没有必要设计
但是当选了3个期间,选了2个度量,选择2个指标,按上面的
Z轴目标: 解决按什么分系列的问题, 如果不放z轴,那么只能按度量分系列,
但是还想按其他维度进行划分
单个维度和多个维度要不要分开处理?
不需要,多维只是把原来的数据再按一定顺序排列一次而已
*================================================
*/

class CubeChart {
  constructor(cubeObject, option, datas) {
    this.type = cubeObject.type
    this.dims = cubeObject.dims
    this.dimsLen = (this.dims && this.dims.length) || 0
    this.dimId = (this.dimsLen > 0 && this.dims[0].id) || ''
    this.legend = cubeObject.legend
    this.legendLen = (this.legend && this.legend.length) || 0
    this.legendId = (this.legendLen > 0 && this.legend[0].id) || ''
    this.facts = cubeObject.facts
    this.factsLen = (this.facts && this.facts.length) || 0
    this.factId = (this.factsLen > 0 && this.facts[0].id) || ''
    this.option = option
    this.chartDatas = datas
    this.result = this.chartDataHandler()
  }

  /**
   *  @desc  :  chart数据处理入口
   *  @author:  gxb
   *  @date  :  2019/09/21
   *  @update  by
   */
  chartDataHandler() {
    const type = this.type
    if (type === 'table') return this.table()
    else if (type === 'bar' || type === 'stackbar' || type === 'pictorialbar' || type === 'line1' || type === 'line' || type === 'biaxial') return this.bar()
    else if (type === 'contrast') return this.contrast()
    else if (this.type === 'point') return this.scatter()
    else if (type === 'pie' || type === 'rose' || type === 'progresscircle' || type === 'tire' || type === 'funnel') return this.pie()
    else if (type === 'radar') return this.radar()
    else if (type === 'gauge' || type === 'gauge2' || type === 'flop') return this.gauge() // 单值
    else if (type === 'number') return this.number()
    else if (type === 'liquidfill') return this.liquidfill()
    else if (type === 'progress') return this.progress()
    else if (type === 'pie2') return this.pie2()
  }

  table() {
    return this.chartDatas
  }

  // 按指定分类
  separatSeries(pre, values) {
    const datas = JSON.parse(JSON.stringify(pre))
    const data = []
    if (values && values.length > 0) {
      for (let index = 0; index < values.length; index++) {
        const ele = values[index]
        // let tempdata = pre.map(item => item[ele.id] || 0);
        /* 这里对下钻很重要,以前返回的只是一个简单的数组,倒置点击事件只能拿到数值,确拿不到行信息,这里修改
        为哪个名字去渲染时就把哪个字段的key值改为value,不影响以前的图形显示 */
        const tempdata = datas.map(item => {
          item.value = item[ele.id] || 0
          return item
        })
        const temp = {
          name: ele.text,
          // 这里必须复制一下,否则下次修改会影响原数据
          data: JSON.parse(JSON.stringify(tempdata))
        }
        data.push(temp)
      }
    }
    return data
  }

  separatLegend() {
    const handeData = []
    // 否则维度需要去重再分,要不然显示出来会很丑,这里先对dims项去重,重组id,text
    const temparr = this.chartDatas.map(item => item[this.legendId])
    const arrs = Array.from(new Set(temparr)) // 去重
    for (let index = 0; index < arrs.length; index++) {
      const ele = arrs[index]
      let tempdata = []
      for (let j = 0; j < this.factsLen; j++) {
        const id = this.facts[j].id
        const tempArrs = this.chartDatas.filter(item => {
          item.value = item[id] || 0
          return item[this.legendId] === ele
        })
        tempdata = [...tempdata, ...tempArrs]
      }
      const temp = { name: ele, data: tempdata }
      handeData.push(temp)
    }
    return handeData
  }

  /**
  *@desc:柱图取数逻辑
  1.dims为1个或两个时,对于柱图明显不一样的是分类方式变了
  2.用什么做legend,由Z轴和Y轴决定
  3.当有Z轴时,按Z轴进行分系列,不管Y轴有几个,但Z轴只能有一个
  4.没有Z轴时,系列就是Y轴
  *@author:mj
  *@date:2021/07/14
  *@updateby
  */
  bar() { // ＴＯＤＯ这里还有ｌｅｇｅｎｄ互换没有解决
    let newArr = []
    let datas = []
    let newArray = []
    let handeData = []
    function sortData(handeData, newArray, id) {
      handeData.forEach(obj => {
        const tempArrs = []
        const tempa1 = obj.data
        // 这里按二级横标分类排序一下
        newArray.forEach((name, i) => {
          tempa1.forEach(ele => {
            if (ele[id] === name) {
              tempArrs.push(ele)
            }
          })
        })
        obj.data = tempArrs
      })
    }
    // 这里做个判断,如果度量有两个及以上,那么分类就按度量分
    if (this.legendLen === 1) {
      // 有Z按Z轴分类
      handeData = this.separatLegend()
      if (this.dimsLen === 2) { // 维度有两个的情况
        // 这里缺一个步骤是按照dim2对数据再一次分类排序,因为不继续分类,排序,那么最终结果是错误的分类
        const id = this.dims[1].id
        const arrs = handeData[0].data
        newArray = arrs.map(item => item[id])
        newArray = Array.from(new Set(newArray))
        sortData(handeData, newArray, id)
      }
    } else {
      // 按Y轴分类  这里已经包行了dimsLen === 1的情况
      handeData = this.separatSeries(this.chartDatas, this.facts)
      if (this.dimsLen === 2) { // 维度有两个的情况
        const arrs = handeData[0].data
        const id = this.dims[1].id
        newArray = arrs.map(item => item[id])
        newArray = Array.from(new Set(newArray))
        // 对每项数据都分一下组,这么写是保证本身顺序不变,因为后端已经把序排好了
        handeData.forEach(element => {
          const arr = element.data
          let tempArr = []
          for (let index = 0; index < newArray.length; index++) {
            const text = newArray[index]
            const temp = arr.filter(item => item[id] === text)
            tempArr = tempArr.concat(temp)
          }
          element.data = tempArr
        })
      }
    }
    // x轴下方第一排
    newArr = handeData[0].data.map(item => item[this.dimId])
    datas = {
      categories: newArr,
      subcategories: newArray,
      series: handeData
    }
    console.log(datas, '柱图处理过后的数据!!!!!!!!!!!!!!!!!!!')
    return datas
  }

  /**
  * @desc    : 雷达图格式转
  * @author  : mj
  * @date  : 2019/08/13
  * @return  {Object}
  * @update   by
  */
  /**
 * @desc    : 雷达图格式转化
 * @author  : mj
 * @date  : 2019/08/13
 * @return  {Object}
 * @update  这个也存在首先按fact分系列,其次legend可以拖东西,就存在两种分法
 */
  radar() {
    const newArr = []
    const handeData = []


    // 这里做个判断,如果度量有两个及以上,那么分类就按度量分
    if (this.legendLen === 1) {
      if (this.factsLen > 1) {
        console.error("两个度量展示没有扩充需求,没有写解析")
      }
      const legendArrs = Array.from(new Set(this.chartDatas.map(item => item[this.legendId]))) // 去重


      // 设置indicator
      const id = this.dimId
      const temparr = this.chartDatas.map(item => item[id])
      // const arrs = Array.from(new Set(temparr)) // 去重
      // 维度和系列不能重名
      // 优先处理indicator ,求出里面的最大值,因为indicator是先维度后度量,求数据是先度量,后维度,所以分开写
      temparr.forEach(element => {
        let max = 0
        legendArrs.forEach(obj => {
          const factid = obj.id
          const tepFilters = this.chartDatas.filter(item => item[id] === element)
          const temMax = Math.max.apply(null, tepFilters.map(item => item[factid]))
          if (temMax > max) max = temMax
        })
        const obj = {
          name: element,
          max: max * 1.1 // 这里稍微调大一点,避免贴着边
        }
        newArr.push(obj)
      })



      // 有Z按Z轴分类
      for (let index = 0; index < legendArrs.length; index++) { // 这里分系列
        const name = legendArrs[index]
        const datas = this.chartDatas.filter(item => {
          item.value = item[this.factId]
          return item[this.legendId] === name
        })
        const temp = {
          name: name,
          value: datas.map(item => item.value)
        }
        handeData.push(temp)
      }
    } else {
      // 没有legend

      // 设置indicator
      const id = this.dimId
      const temparr = this.chartDatas.map(item => item[id])
      // const arrs = Array.from(new Set(temparr)) // 去重
      // 维度和系列不能重名
      // 优先处理indicator ,求出里面的最大值,因为indicator是先维度后度量,求数据是先度量,后维度,所以分开写
      temparr.forEach(element => {
        let max = 0
        this.facts.forEach(obj => {
          const factid = obj.id
          const tepFilters = this.chartDatas.filter(item => item[id] === element)
          const temMax = Math.max.apply(null, tepFilters.map(item => item[factid]))
          if (temMax > max) max = temMax
        })
        const obj = {
          name: element,
          max: max * 1.1 // 这里稍微调大一点,避免贴着边
        }
        newArr.push(obj)
      })


      for (let index = 0; index < this.facts.length; index++) { // 这里分系列
        const factid = this.facts[index].id
        const datas = this.chartDatas.map(item => {
          item.value = item[factid]
          return item
        })
        const temp = {
          name: this.facts[index].text,
          value: datas.map(item => item.value)
        }
        handeData.push(temp)
      }
    }
    // console.log(handeData, "4444")
    const datas = {
      indicator: newArr,
      series: [{ data: handeData }]
    }
    console.log(datas, '雷达图数据...........')
    return datas
  }


  /**
   * @desc 水球图数据格式转换
   * @author zh
   * @date 2020-12-20
   * @update
   */
  liquidfill() {
    let factNum = 0
    let factText = ""
    const data = {
      min: 1,
      max: 10,
      unit: "%"
    }
    if (this.facts && this.facts.length > 0) {
      const factId = this.facts[0].id
      factText = this.facts[0].text
      factNum = parseFloat(this.chartDatas[0][factId])//* 100 由后端统一把比率x100, 因为可能会选不是比率的内容, 不适合全部x100
    }
    data.label = factText
    data.value = factNum // 长图这里除100 ?? 如果后有的乘了100,有的没乘那就是后端要改,统一!!!!
    return data
  }

  /**
   * @desc    : 仪表盘格式转化
   * @author  : mj
   * @date  : 2019/08/13
   * @return  {Object}
   * @update   by
   */
  gauge() {
    const val = this.chartDatas[0][this.facts[0].id]
    const datas = {
      value: (val * 1).toFixed(2),
      // unit: this.chartDatas[0].unit,
      min: Math.floor(val < 0 ? val : 0),
      max: Math.ceil(val > 100 ? val : 100),
      name: this.facts[0].text,
    }
    // console.log('仪表盘', datas);
    return datas
  }

  /**
  * @desc    : 进度条数据格式转换
  * @author  : mj
  * @date  : 2021/05/17
  * @update   by
  */
  progress() {
    let factNum = 0
    let factText = ""
    if (this.facts && this.facts.length > 0) {
      const factId = this.facts[0].id
      factText = this.facts[0].text
      factNum = parseFloat(this.chartDatas[0][factId]) * 100
    }
    const data = {
      label: factText,
      value: factNum,
      data: factNum
    }
    return data
  }

  /**
  * @desc    : 饼图格式转化
  * @author  : mj
  * @date  : 2019/08/13
  * @return  {Object}
  * @update   by
  */
  pie() {
    let temp = []
    let id, factsId
    const facts = this.facts.length
    const dims = this.dims.length
    if (facts === 1 && dims === 1) {
      id = this.dims[0].id
      factsId = this.facts[0].id
      this.chartDatas.forEach(item => {
        const obj = {}
        for (const k in item) {
          if (k === id) {
            obj.name = item[k]
          }
          if (k !== id) {
            obj.value = item[factsId]
          }
        }
        temp.push(obj)
      })
    } else if (facts >= 1 && dims === 0) {
      const array = []
      for (let index = 0; index < facts; index++) {
        const arr1 = []
        const temps = {}
        const ele = this.facts[index]
        this.chartDatas.forEach(item => {
          for (const k in item) {
            for (const key in ele) {
              if (k === ele[key]) {
                temps.name = ele.text
                arr1.push(item[k])
                // eslint-disable-next-line no-eval
                temps.value = eval(arr1.join('+'))
              }
            }
          }
        })
        array.push(temps)
        temp = array
      }
    }
    if (this.option.renamelegend && this.option.openRename3) {
      this.option.renamelegend.forEach((a, i) => {
        temp[i].name = a
      })
    }
    console.log('饼图配置', temp)
    return temp
  }

  /**
  *@desc:pie2
  *@author:mj
  *@date:2021/05/24
  *@updateby
  */
  pie2() {
    console.log(this.facts, this.chartDatas, '5555555555')
  }
}

export default function CubeChartData(cubeObject, option, datas) {
  const instance = new CubeChart(cubeObject, option, datas)
  return instance.result
}
