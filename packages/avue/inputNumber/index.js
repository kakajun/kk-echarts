import InputNumber from './InputNumber.vue'

InputNumber.install = app => {
  app.component('Avue' + InputNumber.name, InputNumber)
}
export default InputNumber
