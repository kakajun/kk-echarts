const fromYear = 2008
const curYear = new Date().getFullYear()
const curMonth = new Date().getMonth() + 1
// const dims = JSON.parse(localStorage.dims)
export function getCurPeriod() {
  return {
    year: curYear,
    month: curMonth < 10 ? '0' + curMonth : curMonth + ''
  }
}

/**
 *@desc: 得到最近num个月的期间
 *@author:mj
 *@date:2021/07/05
 *@updateby
 */
export function getRecentMonth(num) {
  function getMonth(m) {
    return m < 10 ? '0' + m : m + ''
  }
  /* 注意下面三行不能放在顶部,否则不会跟随期间变化 */
  const dims = JSON.parse(localStorage.dims)
  const topMonth = dims.period.substring(4)
  const topYear = dims.period.substring(0, 4)
  const periodList = []
  for (let index = 0; index < num; index++) {
    const month = topMonth - index - 1
    if (month < 1) {
      periodList.push(topYear - 1 + getMonth(month + 12))
    } else periodList.push(topYear + getMonth(month))
  }
  return periodList
}

/**
 *@desc: 得到最近num个季度
 *@author:mj
 *@date:2021/07/05
 *@updateby
 */
export function getRecentQuarter(num) {
  /* 注意下面三行不能放在顶部,否则不会跟随期间变化 */
  const dims = JSON.parse(localStorage.dims)
  const topMonth = dims.period.substring(4)
  const topYear = dims.period.substring(0, 4)
  function getRecentMonth(month) {
    // console.log(month, "monthmonth")
    if (month - 0 - 3 >= 1 && month - 0 - 3 <= 3) {
      // 456
      return '03'
    }
    if (month - 0 - 3 <= 6) {
      // 7,8,9
      return '06'
    } else if (month - 0 - 3 <= 9) {
      // 10,11,12
      return '09'
    }
    return '12'
  }
  const periodList = []
  for (let index = 0; index < num; index++) {
    const month = topMonth - index * 3
    // console.log(month, "333333")
    if (month < -8) {
      periodList.push(topYear - 2 + getRecentMonth(month + 24))
    } else if (month < 4) {
      periodList.push(topYear - 1 + getRecentMonth(month + 12))
    } else periodList.push(topYear + getRecentMonth(month))
    console.log(JSON.stringify(periodList))
  }

  return periodList
}

export function getYearMonth() {
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  if (month < 1) {
    return {
      year: year - 1 + '',
      month: '12'
    }
  } else {
    return {
      year: year + '',
      month: month < 10 ? '0' + month : month + ''
    }
  }
}
/**
 * 获取年列表
 * @export getYearList
 */
export function getYearList() {
  const arrYear = []
  for (let i = curYear; i > fromYear; i--) {
    arrYear.push({
      label: i + '年',
      value: i + ''
    })
  }
  return arrYear
}

/**
 *@desc:加连续期间的日期选择,多指标用
 *@author:mj
 *@date:2021/07/02
 *@updateby
 */
export function getYearListYB() {
  const arrYear = getYearList()
  const yearArr = [
    {
      label: '当年',
      value: '$year'
    },
    {
      label: '上年',
      value: '$year-1'
    },
    {
      label: '前年',
      value: '$year-2'
    },
    {
      label: '最近三个季度',
      value: '$3q'
    },
    {
      label: '最近四个季度',
      value: '$4q'
    },
    {
      label: '最近六个季度',
      value: '$6q'
    }
  ]
  arrYear.unshift(...yearArr)
  return arrYear
}

/**
 * 获取年列表 当前年 上年 前年 ，从2014年开启
 * @export getYearListY
 */
export function getYearListY() {
  const arrYear = getYearList()
  const yearArr = [
    {
      label: '当年',
      value: 'Y0'
    },
    {
      label: '上年',
      value: 'Y1'
    },
    {
      label: '前年',
      value: 'Y2'
    }
  ]
  arrYear.unshift(...yearArr)
  return arrYear
}

/**
 * 获取年度 半年度
 * @export getAnnualList
 */
export function getAnnualList() {
  return [
    {
      value: 'H1',
      label: '半年度'
    },
    {
      value: 'H2',
      label: '下半年度'
    },
    {
      value: '00',
      label: '年度'
    }
  ]
}

/**
 * 获取季度列表
 * @export getSeasonList
 */
export function getSeasonList() {
  return [
    {
      value: 'Q1',
      label: '一季度'
    },
    {
      value: 'Q2',
      label: '二季度'
    },
    {
      value: 'Q3',
      label: '三季度'
    },
    {
      value: 'Q4',
      label: '四季度'
    }
  ]
}

/**
 * 获取月度列表
 * @example [{label:'1月',value:'01'}]
 * @export getMonthList
 */
export function getMonthList() {
  const arrMonth = []
  for (let i = 1; i <= 12; i++) {
    arrMonth.push({
      label: i + '月',
      value: i < 10 ? '0' + i : i + ''
    })
  }
  return arrMonth
}

/**
 * 获取月度列表
 * @example [{label:'1月',value:'01'}]
 * @export getMonthList
 */
export function getMonthListB() {
  const arrMonth = []
  for (let i = 1; i <= 12; i++) {
    // 注意!!!!!!!!我这里i 不能前面加0
    arrMonth.push({
      label: i + '月',
      value: i < 10 ? '0' + i : i + ''
    })
  }
  const monthArr = [
    {
      label: '最近三个月',
      value: '$3month'
    },
    {
      label: '最近六个月',
      value: '$6month'
    },
    {
      label: '当期',
      value: '$month'
    },
    {
      label: '上一期',
      value: '$month-1'
    }
  ]
  arrMonth.unshift(...monthArr)
  return arrMonth
}
/**
 * 获取月度列表 加上当期,上一期
 * @example [{label:'1月',value:'01'}]
 * @export getMonthListM
 */
export function getMonthListM() {
  const arrMonth = getMonthList()
  const monthArr = [
    {
      label: '当期',
      value: 'M0'
    },
    {
      label: '上一期',
      value: 'M1'
    }
  ]
  arrMonth.unshift(...monthArr)
  return arrMonth
}

//
/**
 * 获取月度与年度（仅有年度）
 * sjz +
 */
export function getMonthAndAnnual() {
  return ['Q1', 'Q2', 'Q3', 'Q4', 'H1', 'H2']
}
/**
 * 获取月度当做季度的列表
 * @example [{label:'1月',value:'01'}]
 * //, '00' 暂时四个季度的数据
 * @export getMonthList
 */
export function getSeasonFromMonth() {
  return ['Q1', 'Q2', 'Q3', 'Q4', '00']
}

export function getNoMonth() {
  return ['Q1', 'Q2', 'Q3', 'Q4', 'H1', 'H2', '00']
}

/**
 * 获取月度当做季度的列表
 * //, '00' 暂时四个季度
 * @export getMonthList
 */
export function getSeasonByMonth() {
  return ['03', '06', '09', '12']
}

/**
 * 获取月度当做季度
 * //, '00' 暂时四个季度
 * @export getMonthList
 */
export function getPeriodFromMtoS(month) {
  const pArr = getSeasonByMonth()
  if (pArr.indexOf(month) > -1) {
    return getInterval('2', month)
  }
  return month
}

/**
 *
 * @export
 * @param {*} tclass 年度(yearR)  季度(seasonR) 月度(monthR)
 * 如果 不传入 则是所有
 */
export function getPeriodList(tclass) {
  const arrMonth = getMonthList()
  const arrSeason = getSeasonList()
  const arrAnnua = getAnnualList()
  switch (tclass) {
    case '1': // 年度
      return arrAnnua
    case '2': // 季度
      return arrSeason
    case '3': // 月度
      return arrMonth
    default:
      return arrMonth.concat(arrSeason).concat(arrAnnua)
  }
}

/**
 *
 * @export getInterval
 * @param {*} month 根据报表类别 当前月  判断月份
 */
export function getInterval(tclass, month) {
  switch (tclass) {
    case '3':
      return month
    case '2':
      if (month - 0 - 4 < 0) {
        return 'Q1'
      } else if (month - 0 - 4 <= 2) {
        return 'Q2'
      } else if (month - 0 - 4 <= 5) {
        return 'Q3'
      }
      return 'Q4'
    case '1':
      if (month - 0 !== 0) {
        return 'H1'
      }
      if (month - 0 <= 6) {
        return 'H1'
      } else if (month - 0 <= 11) {
        return 'H2'
      }
      return '00'
    default:
      return month
  }
}

const pText = {
  H1: '半年度',
  H2: '下半年度',
  Q1: '一季度',
  Q2: '二季度',
  Q3: '三季度',
  Q4: '四季度',
  '00': '年度'
}

/**
 *
 * @export getInterval
 * @param {*} 期间转换为文字3
 */
export function getPeriodText(peirod) {
  const year = peirod.substring(0, 4)
  const text = year + '年'
  const month = peirod.substring(4)
  if (isNaN(month - 0) || month - 0 === 0) {
    return text + pText[month]
  }
  return text + (month - 0) + '月份'
}

/**
 *
 * @export getUnitList
 * @param {*} 单位列表
 */
export function getUnitList() {
  return [
    {
      value: '1',
      label: '元'
    },
    {
      value: '1000',
      label: '千元'
    },
    {
      value: '10000',
      label: '万元'
    },
    {
      value: '100000000',
      label: '亿元'
    }
  ]
}

const uText = {
  1: '元',
  1000: '千元',
  10000: '万元',
  100000000: '亿元'
}

export function getUnitText(unit) {
  return uText[unit]
}
