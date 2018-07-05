# webpack star
网址:https://zhuanlan.zhihu.com/p/24972761
question:
1.运行webpack 打包 build 文件夹 出错
    ans: 更改webpack全局配置文件 或者 项目 npm install webpack
2.运行 webpack webpack 4X 后需要安装webpack-cli 请注意需要安装在同一目录
    npm install --save-dev webpack-cli -g
3.处理css webpack版本升级 文档为:
    module: {
        loaders: [
            {
          test: /\.css$/,
          loaders: ['style', 'css'],
          include: APP_PATH
             }
     ]
     },
    应改为
      module: {
        rules: [
          {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader'], 
            include: APP_PATH
          }
        ]
      },


knowledge:
1.html-webpack-plugin;
npm install html-webpack-plugin --save-dev 插件能够生成html和文件
2.源文件app针对于index.js, index.js去关联其他文件
3.在package.json 里面配置以下;针对文件在app文件里面;保存 自动跟新代码
    "scripts": {
      "start": "webpack-dev-server --hot --inline"
    }
4.处理css
    npm install css-loader style-loader --save-dev