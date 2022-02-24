
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
module.exports = {
    lintOnSave: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // publicPath: 'https://avue.cdn.top/',
    configureWebpack: config => {
        if (isProduction) {
            config.optimization.minimizer.push(new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            }))
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            }))
            // config.plugins.push(new BundleAnalyzerPlugin())
        }

        config.plugins.push(new MonacoWebpackPlugin()) // 狗逼东西,这个括号里面不能写任何东西,否则会报错,影响格式化,而且必须要有
        config.externals = {
            'axios': 'axios',
            'vue-router': 'VueRouter'
        }
    },
    chainWebpack: config => {
        if (isProduction) {
            // 压缩代码
            config.optimization.minimize(true);
            // 分割代码
            config.optimization.splitChunks({
                chunks: 'all'
            })
            // 压缩图片
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({
                    bypassOnDebug: true
                })
                .end()
        }



        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()

        config.module
            .rule('md')
            .test(/\.md$/)
            .use('./build/markdownLoader')
            .loader('./build/markdownLoader')
            .end()
    },
    // css相关配置
    // css: {
    //     // 是否使用css分离插件 ExtractTextPlugin
    //     extract: process.env.NODE_ENV === 'production' ? {
    //         ignoreOrder: true,
    //     } : false,
    //     // 开启 CSS source maps?
    //     sourceMap: false,
    //     // 启用 CSS modules for all css / pre-processor files.
    //     requireModuleExtension: false,
    // },
    devServer: {
        // 端口号
        port: 8098,
    },

}