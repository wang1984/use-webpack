var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		build: "./app/index.js",
		abc: "./app/abc.js"
	},
	output: {
		path: __dirname, //打包后的文件存放的地方 
		//“__dirname”是node.js中的一个全局变量，是当前文件所在的目录路径
		filename: "[name].js" //打包后输出文件的文件名
	},
	module: {
		rules: [
			{
			  test: /\.vue$/,
			  loader: 'vue-loader',
			  options: {
				loaders: {}
			  }
			}, 
			{
			  test: /\.js$/,
			  loader: 'babel-loader',
			  exclude: "/node_modules/", //排除的文件夹
			  //include:                //包含的文件夹
			}, 
			{
			  test: /\.(png|jpg|gif|svg)$/,
			  loader: 'file-loader',
			  options: {
				name: '[name].[ext]?[hash]'
			  }
			}, 
			{
			  test: /\.css$/,
			  loader: 'style-loader!css-loader!postcss-loader'
			  //postcss-loader主要使用autoprefixer功能，帮助自动加 css3 的浏览器前缀，非常好用。
			}, 
			{
			  test: /\.(eot|svg|ttf|woff|woff2)$/,
			  loader: 'file-loader'
			}
		]
	},
	postcss:[
	   require('autoprefixer') //调用autoprefixer插件
	],
	devServer:{ //对webpack-dev-server进行配置
		hot:true, //即使配置文件中有该配置，命令行中还要写
		inline: true, //即使配置文件中有该配置，命令行中还要写 //实时刷新
		port: 3000,
		contentBase: "./public", //本地服务器所加载的页面所在的目录
		colors: true, //终端中输出结果为彩色
		historyApiFallback: true, //不跳转
	},
	devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项	
	resolve: {
		extensions: ['', '.js', ".css", 'jsx'] //自动补全识别后缀
	},
	plugins: [
		new htmlWebpackPlugin({
			title: "欢迎",
			chunks: ["build"]
		}),
		new htmlWebpackPlugin({
			title: "欢迎",
			filename: "class.html",
			chunks: ["abc"]
		})
	]
}