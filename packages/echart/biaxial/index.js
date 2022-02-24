import Biaxial from './Biaxial.vue'
import prefix from '@/prefix'
Biaxial.install = function (app) {
  app.component(prefix + Biaxial.name, Biaxial)
}
export default Biaxial
