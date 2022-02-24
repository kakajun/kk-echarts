import Bar from './Bar.vue'
import prefix from '@/prefix'
Bar.install = app => {
  app.component(prefix + Bar.name, Bar)
}
export default Bar
