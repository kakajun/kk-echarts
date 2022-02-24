import Btn from './Btn.vue'
import prefix from '@/prefix'
Btn.install = function (app) {
  app.component(prefix + Btn.name, Btn)
}
export default Btn
