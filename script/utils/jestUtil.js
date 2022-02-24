import base from '@ep/option/base.js'
const getObj = function getObj(val) {
  let activeObj = []
  base.forEach(ele => {
    const obj = ele.children.find(
      item => item.option && item.option.component.prop === val
    )
    if (obj) {
      activeObj = obj.option
    }
  })
  return activeObj
}
export default getObj
