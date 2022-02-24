import Radio from './Radio.vue'

Radio.install = app => {
  app.component('Avue' + Radio.name, Radio)
}
export default Radio
