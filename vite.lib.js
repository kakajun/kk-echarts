import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const pkg = require('./package.json')
import { resolve } from 'path'
const banner = `/*!
* ${pkg.name} v${pkg.version}
* ${new Date().getFullYear()}年${new Date().getMonth() + 1}月${new Date()}
* 由产品展现部制作
*/`
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve('src'),
        '@e': resolve('packages/echart'),
        '@p': resolve('packages'),
        '@t': resolve('packages/toolComponent'),
        '@s': resolve('script')
      }
    },
    build: {
      minify: false, // 不压缩代码,方便开发调试
      lib: {
        entry: resolve(__dirname, 'src/index.js'),
        name: 'index',
        fileName: 'index'
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: [
          {
            banner,
            dir: 'lib',
            name: 'CNBILB',
            format: 'es'
          }
        ]
      }
    }
  }
})
