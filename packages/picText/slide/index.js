import Slide from './Slide.vue'
import prefix from '@/prefix'
Slide.install = function (app) {
  app.component(prefix + Slide.name, Slide)
}
export default Slide
