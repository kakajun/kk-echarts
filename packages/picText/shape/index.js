import Shape from './Shape.vue'
import prefix from '@/prefix'
/* istanbul ignore next */
Shape.install = function (app) {
  app.component(prefix + Shape.name, Shape)
}
export default Shape
