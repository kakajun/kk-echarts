import Select from './Select.vue'

Select.install = app => {
  app.component('Avue' + Select.name, Select)
}
export default Select
