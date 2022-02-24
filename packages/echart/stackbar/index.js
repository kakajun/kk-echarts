import Stackbar from './Stackbar.vue'
import prefix from '@/prefix'
Stackbar.install = function (app) {
  app.component(prefix + Stackbar.name, Stackbar)
}
export default Stackbar
