import { deepClone } from './util'
/**
 * 判断是否为空
 */
export function validatenull(val) {
  // 特殊判断
  if (val && parseInt(val) === 0) return false
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    val = deepClone(val)
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (
      val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val == undefined ||
      val === ''
    ) {
      return true
    }
    return false
  }
  return false
}
