import Pyramid from './Pyramid.vue'
import prefix from '@/prefix'
Pyramid.install = function (app) {
  app.component(prefix + Pyramid.name, Pyramid)
}
export default Pyramid
