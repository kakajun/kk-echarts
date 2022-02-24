import Odometer from './Odometer.vue'
import prefix from '@/prefix'
Odometer.install = function (app) {
  app.component(prefix + Odometer.name, Odometer)
}
export default Odometer
