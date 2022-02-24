import { validatenull } from './validate'
import { DIC_PROPS, DIC_SHOW_SPLIT } from '@s/global/variable'

/*
 用纯字符串切割的方式改写toFixed方法,避免js本身四舍五入的bug
 @wp 1.02
 用法同toFixed,参数2个: 小数位(不写就默认2位),是否四舍五入进位(默认不进位, 0/1, true/false都可以)
*/
// Number.prototype.toFixed = function (c = 2, d = !1) { const e = this; const f = new RegExp("^-?\\d+(?:\\.\\d{0," + c + "})?"); let a = e.toString().match(f)[0]; const g = a.split("."); if (g.length === 2) { const b = e.toString().split("."); a = g[0] + "." + g[1].padEnd(c, "0"), c > 0 ? b[1].toString().substr(c, 1) >= 5 && c < b[1].length && d && (a = (1 * e * "1".padEnd(c + 1, "0") + 1 * "1".padStart(c, "0") * ("1".padEnd(c + 1, "0") / 10)) / "1".padEnd(c + 1, "0"), a = a.toString().match(f)[0]) : b[1].toString().substr(0, 1) >= 5 && d ? a = 1 * g[0] + 1 : a = g[0] } else a = c > 0 ? g[0] + "." + "0".padEnd(c, "0") : g[0]; return a }

/* eslint no-extend-native: ["error", { "exceptions": ["Number"] }] */
Number.prototype.round = function (digits) {
  digits = Math.floor(digits)
  if (isNaN(digits) || digits === 0) {
    return Math.round(this)
  } else if (digits < 0 || digits > 16) {
    // eslint-disable-next-line no-throw-literal
    throw 'RangeError: Number.round() digits argument must be between 0 and 16'
  }
  const multiplicator = Math.pow(10, digits)
  return Math.round(this * multiplicator) / multiplicator
}
Number.prototype.toFixed = function (digits) {
  digits = Math.floor(digits)
  if (isNaN(digits) || digits === 0) {
    return Math.round(this).toString()
  }
  const parts = this.round(digits).toString().split('.')
  let fraction = parts.length === 1 ? '' : parts[1]
  if (digits > fraction.length) {
    fraction += new Array(digits - fraction.length + 1).join('0')
  }
  return parts[0] + '.' + fraction
}

const hasOwnProperty = Object.prototype.hasOwnProperty

export function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key)
}
export function getFixed(val = 0, len = 2) {
  return Number(val.toFixed(len))
}
export function getAsVal(obj, bind = '') {
  let result = deepClone(obj)
  if (validatenull(bind)) return result
  bind.split('.').forEach(ele => {
    if (!validatenull(result[ele])) {
      result = result[ele]
    } else {
      result = ''
    }
  })
  return result
}
export const loadScript = (type = 'js', url) => {
  let flag = false
  return new Promise(resolve => {
    const head = document.getElementsByTagName('head')[0]
    head.children.forEach(ele => {
      if ((ele.src || '').indexOf(url) !== -1) {
        flag = true
        resolve()
      }
    })
    if (flag) return
    let script
    if (type === 'js') {
      script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = url
    } else if (type === 'css') {
      script = document.createElement('link')
      script.rel = 'stylesheet'
      script.type = 'text/css'
      script.href = url
    }
    head.appendChild(script)
    script.onload = function () {
      resolve()
    }
  })
}
export function downFile(url, saveName) {
  if (typeof url === 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url) // 创建blob地址
  }
  const aLink = document.createElement('a')
  aLink.href = url
  aLink.download = saveName || '' // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  let event
  if (window.MouseEvent) {
    event = new MouseEvent('click')
  } else {
    event = document.createEvent('MouseEvents')
    event.initMouseEvent(
      'click',
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    )
  }
  aLink.dispatchEvent(event)
}
export function strCorNum(list) {
  list.forEach((ele, index) => {
    list[index] = Number(ele)
  })
  return list
}
export function extend() {
  let target = arguments[0] || {}
  let deep = false
  const arr = Array.prototype.slice.call(arguments)
  let i = 1
  let options, src, key, copy
  let isArray = false
  if (typeof target === 'boolean') {
    deep = target
    i++
    target = arguments[1]
  }
  for (; i < arr.length; i++) {
    // 循环传入的对象数组
    if ((options = arr[i]) != null) {
      // 如果当前值不是null，如果是null不做处理
      for (key in options) {
        // for in循环对象中key
        copy = options[key]
        src = target[key]
        // 如果对象中value值任然是一个引用类型
        if (
          deep &&
          (toString.call(copy) === '[object Object]' ||
            (isArray = toString.call(copy) === '[object Array]'))
        ) {
          if (isArray) {
            // 如果引用类型是数组
            // 如果目标对象target存在当前key，且数据类型是数组，那就还原此值，如果不是就定义成一个空数组;
            src = toString.call(src) === '[object Array]' ? src : []
          } else {
            // 如果目标对象target存在当前key，且数据类型是对象，那就还原此值，如果不是就定义成一个空对象;
            src = toString.call(src) === '[object Object]' ? src : {}
          }
          // 引用类型就再次调用extend，递归，直到此时copy是一个基本类型的值。
          target[key] = extend(deep, src, copy)
        } else if (copy !== undefined && copy !== src) {
          // 如果这个值是基本值类型，且不是undefined
          target[key] = copy
        }
      }
    }
  }
  return target
}
export function createObj(obj, bind) {
  const list = bind.split('.')
  const first = list.splice(0, 1)[0]
  const deep = {}
  deep[first] = {}
  if (list.length >= 2) {
    const start = '{'
    const end = '}'
    let result = ''
    list.forEach(ele => {
      result = `${result}${start}"${ele}":`
    })
    result = `${result}""`
    for (let i = 0; i < list.length; i++) {
      result = `${result}${end}`
    }
    result = JSON.parse(result)
    deep[first] = result
  }
  obj = extend(true, obj, deep)
  return obj
}
export function setAsVal(obj, bind = '', value = '') {
  // eslint-disable-next-line no-eval
  eval('obj.' + bind + '="' + value + '"')
  return obj
}

export function findObject(list, value, key = 'prop') {
  let result = -1
  const type = (() => {
    let result
    list.forEach(ele => {
      if (ele.column) {
        result = 'group'
      } else if (ele.children) {
        result = 'tree'
      }
    })
    return result
  })()
  if (type === 'group') {
    list.forEach(ele => {
      const val = findArray(ele.column, value, key, true)
      if (val !== -1) result = val
    })
  } else if (type === 'tree') {
    result = findLabelNode(list, value, { value: key }, true)
  } else {
    result = findArray(list, value, key, true)
  }
  return result
}
/**
 * 生成随机数
 */
export function randomId() {
  const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const maxPos = $chars.length
  let id = ''
  for (let i = 0; i < 16; i++) {
    id += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return id
}
export const getObjType = obj => {
  const toString = Object.prototype.toString
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}

/**
 * 对象深拷贝
 */
export const deepClone = data => {
  const type = getObjType(data)
  let obj
  if (type === 'array') obj = []
  else if (type === 'object') obj = {}
  else return data
  if (type === 'array') {
    for (let i = 0, len = data.length; i < len; i++) {
      data[i] = (() => {
        if (data[i] === 0) {
          return data[i]
        }
        return data[i]
      })()
      if (data[i]) {
        delete data[i].$parent
      }
      obj.push(deepClone(data[i]))
    }
  } else if (type === 'object') {
    for (const key in data) {
      if (data) {
        delete data.$parent
      }
      obj[key] = deepClone(data[key])
    }
  }
  return obj
}
/**
 * 根据字段数组排序
 */
export const sortArrys = (list, prop) => {
  list.sort(function (a, b) {
    if (a[prop] > b[prop]) {
      return -1
    }
    if (a[prop] < b[prop]) {
      return 1
    }
    return 0
  })
  return list
}

/**
 * 设置px像素
 */
export const setPx = (val, defval = '') => {
  if (validatenull(val)) val = defval
  if (validatenull(val)) return ''
  val = val + ''
  if (val.indexOf('%') === -1) {
    val = val + 'px'
  }
  return val
}

/**
 * 字符串数据类型转化
 */
export const detailDataType = (value, type) => {
  if (validatenull(value)) return value
  if (type === 'number') {
    return Number(value)
  } else if (type === 'string') {
    return value + ''
  } else {
    return value
  }
}
// 获取url中的参数
export const getUrlParams = url => {
  const result = {
    url: '',
    params: {}
  }
  const list = url.split('?')
  result.url = list[0]
  const params = list[1]
  if (params) {
    const list = params.split('&')
    list.forEach(ele => {
      const dic = ele.split('=')
      const label = dic[0]
      const value = dic[1]
      result.params[label] = value
    })
  }
  return result
}

/**
 * 数组的数据类型转化
 */
export const detailDic = (list = [], props = {}, type) => {
  const valueKey = props.value || DIC_PROPS.value
  const childrenKey = props.children || DIC_PROPS.children
  list.forEach(ele => {
    ele[valueKey] = detailDataType(ele[valueKey], type)
    if (ele[childrenKey]) detailDic(ele[childrenKey], props, type)
  })
  return list
}
/**
 * 根据字典的value显示label
 */

export const findByValue = (dic, value, props, isTree, column) => {
  // 如果为空直接返回
  if (validatenull(dic)) return value
  let result = ''
  props = props || DIC_PROPS
  if (value instanceof Array) {
    result = []
    for (let i = 0; i < value.length; i++) {
      const dicvalue = value[i]
      if (isTree) {
        result.push(findLabelNode(dic, dicvalue, props) || dicvalue)
      } else {
        result.push(findArrayLabel(dic, dicvalue, props))
      }
    }
    result = result.join(DIC_SHOW_SPLIT).toString()
  } else if (['string', 'number', 'boolean'].includes(typeof value)) {
    result = findLabelNode(dic, value, props) || value
  }
  return result
}
/**
 * 过滤字典翻译字段和空字段
 */
export const filterDefaultParams = (form, translate = true) => {
  const data = deepClone(form)
  if (translate) return data
  for (const o in data) {
    if (o.indexOf('$') !== -1 || validatenull(data[o])) {
      delete data[o]
    }
  }
  return data
}
/**
 * 处理存在group分组的情况
 */
export const detailDicGroup = dic => {
  dic = deepClone(dic)
  let list = []
  if ((dic[0] || {}).groups) {
    dic.forEach(ele => {
      if (ele.groups) {
        list = list.concat(ele.groups)
      }
    })
    return list
  }
  return dic
}
/**
 * 根据label去找到节点
 */
export const findLabelNode = (dic, value, props, obj) => {
  let result
  if (!obj) dic = detailDicGroup(dic)
  const rev = (dic1, value1, props1) => {
    const labelKey = props1.label || DIC_PROPS.label
    const valueKey = props1.value || DIC_PROPS.value
    const childrenKey = props1.children || DIC_PROPS.children
    for (let i = 0; i < dic1.length; i++) {
      const ele = dic1[i]
      const children = ele[childrenKey] || []
      if (ele[valueKey] === value1) {
        result = obj ? ele : ele[labelKey]
      } else {
        rev(children, value1, props1)
      }
    }
  }
  rev(dic, value, props)
  return result
}
/**
 * 获取多层data
 */
export const getDeepData = res => {
  return (Array.isArray(res) ? res : res.data) || []
}
export const getObjValue = (data, params = '', type) => {
  const list = params.split('.')
  let result = data
  if (list[0] === '' && type !== 'object') {
    return getDeepData(data)
  } else if (list[0] !== '') {
    list.forEach(ele => {
      result = result[ele]
    })
  }
  return result
}
/**
 * 根据字典的value查找对应的index
 */
export const findArrayLabel = (dic, value, props) => {
  dic = detailDicGroup(dic)
  const valueKey = props.value || DIC_PROPS.value
  const labelKey = props.label || DIC_PROPS.label
  for (let i = 0; i < dic.length; i++) {
    if (dic[i][valueKey] === value) {
      return dic[i][labelKey]
    }
  }
  return value
}
/**
 * 根据值查找对应的序号
 */
export const findArray = (dic, value, valueKey, obj) => {
  if (!obj) dic = detailDicGroup(dic)
  valueKey = valueKey || DIC_PROPS.value
  for (let i = 0; i < dic.length; i++) {
    if (dic[i][valueKey] === value) {
      return obj ? dic[i] : i
    }
  }
  return -1
}
/**
 * 根据位数获取*密码程度
 */
export const getPasswordChar = (result = '', char) => {
  const len = result.toString().length
  result = ''
  for (let i = 0; i < len; i++) {
    result = result + char
  }
  return result
}

export const arraySort = (list = [], prop, callback) => {
  return list
    .filter(ele => !validatenull(ele[prop]))
    .sort((a, b) => callback(a, b))
    .concat(list.filter(ele => validatenull(ele[prop])))
}
export const clearVal = (obj, list = []) => {
  if (!obj) return {}
  Object.keys(obj).forEach(ele => {
    // eslint-disable-next-line no-useless-return
    if (list.includes(ele)) return
    else if (!validatenull(obj[ele])) {
      const type = getObjType(obj[ele])
      if (type === 'array') obj[ele] = []
      else if (type === 'object') obj[ele] = {}
      else if (['number', 'boolean'].includes(type)) obj[ele] = undefined
      else obj[ele] = ''
    }
  })
  return obj
}
/**
 * 验证是否存在true/false
 */
export const vaildData = (val, dafult) => {
  if (typeof val === 'boolean') {
    return val
  }
  return !validatenull(val) ? val : dafult
}

/**
 * @desc    : 千分位分隔    例如: currency(value,2 ,'万元' )
 * @author  : mj
 * @date  : 2020/12/31
 * @param   {value}      要转的数值
 * @param   {currency}   后面带的货币单位
 * @param   {decimals}   小数位数
 * @return  {}
 * @update   by
 */
export const currencyF = (value, decimals, currency) => {
  if (!value) value = 0
  const valuex = parseFloat(value)
  if (!isFinite(valuex) || (!valuex && valuex !== 0)) return ''
  currency = currency != null ? currency : ''
  decimals = decimals != null ? decimals : 2
  const stringified = Math.abs(valuex).toFixed(decimals)
  const _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
  const i = _int.length % 3
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
  const _float = decimals ? stringified.slice(-1 - decimals) : ''
  const sign = valuex < 0 ? '-' : ''
  return (
    sign +
    head +
    _int.slice(i).replace(/(\d{3})(?=\d)/g, '$1,') +
    _float +
    currency
  )
}

// 强制等待??ms后执行后面,用于资源加载预留时间
export const timeWait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
/**
 * @desc    : 根据第二个对象对第一个对象修改修改
 * @param   {Object} target 待修改对象 必传
 * @param   {Object} source 修改对象 必传
 * @return  {Object} 返回修改后的对象
 * @update   by
 */
export function apply(target, source) {
  function haskey(target, key) {
    // eslint-disable-next-line no-prototype-builtins
    return target.hasOwnProperty(key)
  }
  const obj = JSON.parse(JSON.stringify(source))
  // 先取并集,解决新加入对象的问题
  const newObj = Object.assign(obj, target)
  for (const key in newObj) {
    // 两边都有,那么合并去重
    if (haskey(source, key) && haskey(target, key)) {
      if (typeof source[key][0] === 'string') {
        // 为什么做判断,因为对象都用这个,会出现label相同但value不一样的情况
        newObj[key] = Array.from(new Set([...target[key], ...source[key]]))
      } else {
        source[key].forEach(obj1 => {
          const tempObj = newObj[key].find((ele, i) => {
            if (JSON.stringify(ele) === JSON.stringify(obj1)) {
              // 存在就直接覆盖
              newObj[key][i] = obj1
              return true
            } else return false
          })
          // console.log(tempObj, JSON.stringify(newObj), "ooooooooo")
          // 不存在那就是新增的,直接干进去
          if (!tempObj) {
            newObj[key].push(obj1)
          }
        })
      }
    } else if (haskey(source, key)) {
      // 如果只有单一方面有，那么取单一即可
      newObj[key] = source[key]
    } else {
      newObj[key] = target[key]
    }
  }
  return newObj
}
