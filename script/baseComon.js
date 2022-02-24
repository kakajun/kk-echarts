/**
*@desc: 公共属性合并
公共处理相同属性合并的方法,工程太多后难以每个维护,所以尽量把一些相同的东西集中起来维护,并同时保持个性的扩展
*@author:mj
*@date:2021/08/04
*@updateby
*/

export default function getBaseComon(arrs, dimsList) {
  const commonObj = {
    top: 0,
    left: 0,
    dataType: 0,
    dataMethod: 'post',
    lock: false, // 是不是加锁，阻止拖动
    comhidden: false,
    dataFormatter: '(function(data) { return data})',
    dataQueryb:
      '{"comList":["1010"],"lxCodList":["1416001"],"lxFaList":["A","B"],"perList":["201803","201903","202003"]}',
    url2: '/cnbi/project/query_data/analysis_display',
    eventConfig: {
      // 事件设置
      openDrill: false, // 开启下钻
      openLinkage: false
    }
  }
  const commonOption = {
    /* ----------start    标题属性 */
    titleShow: false,
    title: '我是标题',
    subtext: '我是副标题',
    titleTop: 'top', // 'top', 'middle', 'bottom'
    titlePostion: 'center', // 'left', 'center', 'right'
    titleColor: '#000',
    titleFontSize: 14,
    titleFontWeight: 'bold',
    subTitleColor: '#000',
    subTitleFontSize: 14,
    /* ----------end    标题属性 */
    /* ----------start  图例位置 */
    legend: true, // 图例位置
    legendalign: 'up', // 图例排齐方式
    legendHeight: 'auto', // 图例高度
    legendColor: 'rgba(45, 97, 135, 1)', // 图例颜色
    legendFontSize: 16, // 图例字号
    legendOrient: 'horizontal', // 默认横排
    legendPostion: 'N' // 图例默认放在中上
    /* ----------end    图例位置 */
  }
  const cubeObject = {
    type: '',
    companys: ['1010'],
    slectmonth: ['03'], // 选择月
    flag: false,
    slectyear: ['2018', '2019', '2020'], // 选择年
    dims: [{ id: 'period_name', text: '期间', type: 'text', width: null }], // 顶部选的度量
    facts: [
      { id: 'fact_a', text: '本期数', type: 'number', width: null },
      { id: 'fact_b', text: '累计数', type: 'number', width: null }
    ], // 度量设置
    legend: [], // 系列
    preFacts: [
      { sname: '本期数', subject: '0002', sfactfield: 'A' },
      { sname: '累计数', subject: '0002', sfactfield: 'B' }
    ], // 预选择的度量,有了facts,为什么还要preFacts,因为度量可以是维度,维度可以是度量,并且前面选了度量,不一定后面全部都要用
    perList: [], // 日期传参数
    checkedIndex: ['lx_1416001'], // 选中指标
    factParams: { lxFaList: ['A', 'B'] }, // 度量传参数
    zbPrames: { lxCodList: ['1416001'] } // 指标的参数
  }
  for (let index = 0; index < arrs.length; index++) {
    const item = arrs[index]
    item.children.forEach(obj => {
      const prop = obj.option.component.prop
      obj.option = Object.assign({}, commonObj, obj.option) // 这样子写可以使得某些特殊的组件需要自己独特的属性,覆盖公共的
      if (dimsList && dimsList.includes(prop)) {
        // 这里不copy一下会出现引用混乱的bug
        const cubeCopy = Object.assign(
          {},
          cubeObject,
          obj.option.cubeObject || {}
        )
        cubeCopy.type = prop
        obj.option.cubeObject = cubeCopy
      }
    })
    item.children.forEach(obj => {
      obj.option.option = Object.assign({}, commonOption, obj.option.option) // 每个echart都要的公共属性
    })
  }
  return arrs
}
