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
export default defineConfig(() => {
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
      // outDir: 'lib',
      lib: {
        entry: resolve(__dirname, 'src/option.js'),
        name: 'option',
        fileName: 'option'
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: [
          // {
          //   banner,
          //   dir: 'lib/option',
          //   // file: 'option.umd.js',
          //   name: 'OPTION',
          //   format: 'umd',
          //   // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          //   globals: {
          //     vue: 'Vue',
          //     'element-plus': 'ElementPlus'
          //   }
          // },
          {
            banner,
            dir: 'lib/option',
            // file: 'option.es.js',
            name: 'OPTION',
            format: 'es'
          }
        ]
      }
    }
  }
})
