//此处是node 代码

module.exports = {
  devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项	
  entry: './entry.js', //唯一入口文件
  output: {
    path: __dirname, //打包后的文件存放的地方 “__dirname”是node.js中的一个全局变量，是当前文件所在的目录路径
    filename: "bundle.js" //打包后输出文件的文件名
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  devtool: 'source-map', //生成map文件
  devServer: {
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
}