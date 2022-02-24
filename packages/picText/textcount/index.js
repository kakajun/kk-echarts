import Textcount from './Textcount.vue'
import prefix from '@/prefix'
Textcount.install = function (app) {
  app.component(prefix + Textcount.name, Textcount)
}
export default Textcount
