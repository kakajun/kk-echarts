import Datetime from './Datetime.vue'
import prefix from '@/prefix'
Datetime.install = function (app) {
  app.component(prefix + Datetime.name, Datetime)
}
export default Datetime
