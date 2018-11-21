var HtmlWebpackPlugin = require("html-webpack-plugin")
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // CSS 分离成文件
module.exports = {
  entry: './src/app.js', // 原文件
  output: {
    path: __dirname + '/dist',
    filename: 'app2.bundle.js' // 输出文件 index.html引用这js
  },
  devServer: {
    //openPage: './dist/index-1.html', // 定义第一次自动打开浏览器地址页面  默认会在定义得/src文件下寻找index.html文件打开
    port: 9000,  //定义端口
    open: true  // 是否自动打开默认浏览器
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: false  // true:压缩  默认 false不压缩
      },
      hash: true, // true MD5 加密hash值在资源后面， 默认：false不加hash
      filename: 'index.html', // 不设置 默认为index.html
      template: './src/index.html'  // 定义模板，输出到dist/index.html 里面
    }),
    new ExtractTextPlugin('style.css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']  // 处理js import css文件
      },
      {
        test: /\.scss$/,
        //  use: ['style-loader', 'css-loader', 'sass-loader'] // 单纯处理 sass
        // 处理 打包sass文件 打包生成style.css
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  }
}