import Video from './Video.vue'
import prefix from '@/prefix'
Video.install = function (app) {
  app.component(prefix + Video.name, Video)
}
export default Video
