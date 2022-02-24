import Imgborder from './Imgborder.vue'
import prefix from '@/prefix'
Imgborder.install = function (app) {
  app.component(prefix + Imgborder.name, Imgborder)
}
export default Imgborder
