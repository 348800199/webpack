var path = require('path');
// npm install html-webpack-plugin --save-dev 插件能够生成html和文件
var HtmlwebpackPlugin = require('html-webpack-plugin'); 
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);// 获取绝对路径
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    // 源文件
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Hello World app'
        })
    ],
    // npm install webpack-dev-server  不断运行程序然后查看页面，
    //所以最好新建一个开发服务器，可以serve我们pack以后的代码，并且当代码更新的时候自动刷新浏览器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
      },
     // 处理css文件
      module: {
        rules: [
          {
            test: /\.css$/,
 //用了css和style，注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader.
            loader: ['style-loader', 'css-loader'], 
            include: APP_PATH
          }
        ]
      },
};