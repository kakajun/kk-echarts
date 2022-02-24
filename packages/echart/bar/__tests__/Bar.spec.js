// jest api https://jestjs.io/docs/zh-Hans/expect#expectvalue
// https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5
import { shallowMount, createLocalVue } from '@vue/test-utils'
import bar from '../Bar.vue'
import getObj from '@s/utils/jestUtil.js'
import common from '@s/mixins/common.js'
const activeObj = getObj('bar')
// wrapper.classes()
// wrapper.text()
// mount
// shallowMount
// wrapper.html()
// wrapper.vm
//部分报错一定要有延迟,才能够报出来问题
// const timeWait = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }
// await timeWait(3000)
describe('test: Bar.vue', () => {
  const localVue = createLocalVue()
  localVue.mixin(common)

  const wrapper = shallowMount(bar, {
    propsData: {
      id: 'ancestor',
      data: activeObj.data,
      width: activeObj.component.width,
      height: activeObj.component.height,
      option: activeObj.option
    }
  })
  it('渲染测试', async () => {
    // console.log(wrapper.html())
    const canvas = wrapper.find('canvas')
    expect(canvas.exists()).toBe(true)
  })
})
