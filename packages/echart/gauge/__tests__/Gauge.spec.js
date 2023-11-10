// jest api https://jestjs.io/docs/zh-Hans/expect#expectvalue
// https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5

import { shallowMount } from '@vue/test-utils'
import gauge from '../Gauge.vue'
import getObj from '@s/utils/jestUtil.js'
const activeObj = getObj('gauge')
describe('test: Gauge.vue', () => {
  const wrapper = shallowMount(gauge, {
    propsData: {
      id: 'ancestor',
      data: activeObj.data,
      width: activeObj.component.width,
      height: activeObj.component.height,
      option: activeObj.option
    }
  })
  it('渲染测试', async () => {
    console.log(wrapper.html())
    const canvas = wrapper.find('canvas')
    expect(canvas.exists()).toBe(true)
  })
})