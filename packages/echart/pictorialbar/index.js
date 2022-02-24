import Pictorialbar from './Pictorialbar.vue'
import prefix from '@/prefix'
Pictorialbar.install = function (app) {
  app.component(prefix + Pictorialbar.name, Pictorialbar)
}
export default Pictorialbar
