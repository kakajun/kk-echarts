import Progress from './Progress.vue'
import prefix from '@/prefix'
Progress.install = function (app) {
  app.component(prefix + Progress.name, Progress)
}
export default Progress
