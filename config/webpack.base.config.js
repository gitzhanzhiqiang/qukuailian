var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // css分离
const cleanWepackPlugin = require('clean-webpack-plugin');

var webpack = require('webpack')

var config = require('./config');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    //编译生成的js文件存放到根目录下面的js目录下面,如果js目录不存在则自动创建
    filename: 'crm/static/js/[name].[chunkhash].js',
    //用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
    chunkFilename: 'crm/static/js/chunks/[id].[chunkhash].js',
    publicPath: ''
  },
  resolve: {
    //配置默认扩展名 默认值是[“”, “.webpack.js”, “.web.js”, “.js”]
    extensions: ['.js', '.json', '.vue'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@res': path.resolve(__dirname, 'res'),
      '@src': path.resolve(__dirname, '../src'),
      '$lib': path.resolve(__dirname, '../src/lib'),
      '@views': path.resolve(__dirname, '../src/views'),
      '@utils': path.resolve(__dirname, '../src/lib/utils'),
      '@filters': path.resolve(__dirname, '../src/filters'),
      '@constants': path.resolve(__dirname, '../src/constants'),
      '@common': path.resolve(__dirname, '../src/common'),
    }
  },
  plugins: [
    // 这里是之前配置的其它各种插件
    new cleanWepackPlugin(//先清空dist
      ['dist'],
      {
        root: path.resolve(__dirname, '../'), //根目录
        verbose: true, //开启在控制台输出信息
        dry: false //启用删除文件
      }
    ),
    new webpack.DefinePlugin({ //发布全局便量
      'process.env': config.dev.env
    }),
    //引入jquery(内置模块)
    // new webpack.ProvidePlugin({
    //   jQuery: "jquery",
    //   $: "jquery"
    // }),
    //css分离
    // new ExtractTextPlugin(path.posix.join('crm', 'static/css/[name].[contenthash].css')),
    new ExtractTextPlugin('crm/static/css/[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      favicon: path.resolve('favicon.ico')
    })
  ],
  devServer: {
       host: '192.168.0.107',
       // host: '10.0.0.115',
    //  host: '192.168.1.36',
    //host: 'localhost',
    port: 8088,
    disableHostCheck: true,
    proxy: { //代理
      '/kxd-admin': {
        target: 'http://139.199.163.109:8066/',
        pathRewrite: {
          '^/kxd-admin': ''
        }
      }
    }
  }
}
