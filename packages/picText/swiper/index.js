import Swiper from './Swiper.vue'
import prefix from '@/prefix'
Swiper.install = function (app) {
  app.component(prefix + Swiper.name, Swiper)
}
export default Swiper
