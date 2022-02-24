import Texta from './Texta.vue'
import prefix from '@/prefix'
Texta.install = function (app) {
  app.component(prefix + Texta.name, Texta)
}
export default Texta
