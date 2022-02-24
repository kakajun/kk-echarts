import Progresscircle from './Progresscircle.vue'
import prefix from '@/prefix'
Progresscircle.install = function (app) {
  app.component(prefix + Progresscircle.name, Progresscircle)
}
export default Progresscircle
