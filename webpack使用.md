# webpack #
1. npm install webpack@2.2.0 -g
2. npm install webpack@2.2.0 -save-dev 
3. webpack -version 查看版本
##永远不要在生产环境中使用这些工具，永远不要。
###四个核心概念
|--入口(Entry)
> webpack 将创建所有应用程序的依赖关系图表(dependency graph)。图表的起点被称之为入口起点(entry point)。入口起点告诉 webpack 从哪里开始，并遵循着依赖关系图表知道要打包什么。可以将您应用程序的入口起点认为是根上下文(contextual root)或 app 第一个启动文件。


``` 
    module.exports = {
	  entry: './path/to/my/entry/file.js'
	};

``` 

|--出口(Output)
> 我们正在通过 output.filename 和 output.path 属性来描述 webpack bundle 的名称，以及我们想要生成(emit)在哪里
 ###注意，即使可以存在多个入口起点，但只指定一个输出配置。
 
```
	var path = require('path');
	
	module.exports = {
	  entry: './path/to/my/entry/file.js',
		  output: {
		    path: path.resolve(__dirname, 'dist'),
		    filename: 'my-first-webpack.bundle.js'
		  }
	};
```   
|--加载器(Loader)
> webpack 把每个文件(.css, .html, .scss, .jpg, etc.) 都作为模块处理。而webpack 只理解 JavaScript。webpack loader 会将这些文件转换为模块，而转换后的文件会被添加到依赖图表中
```
	var path = require('path');
	
	const config = {
	  entry: './path/to/my/entry/file.js',
	  output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'my-first-webpack.bundle.js'
	  },
	  module: {
	    rules: [
	      {test: /\.(js|jsx)$/, use: 'babel-loader'}
	    ]
	  }
	};
	
	module.exports = config;
```
> 以上配置中，我们对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。这可以告诉 webpack compiler 当你碰到「在 require()/import 语句中被解析为 '.js' 或 '.jsx' 的路径」时，在你把它们添加并打包之前，要先使用 babel-loader 去转换”。

 
|--插件(Plugins)
> 由于你可以在一个配置多次使用插件用于不同的目的 想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。多数插件可以通过选项(option)自定义。由于需要在一个配置中，多次使用一个插件，来针对不同的目的，因此你需要使用 new 来创建插件的实例，并且通过实例来调用插件。
```
	const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
	const webpack = require('webpack'); //to access built-in plugins
	const path = require('path');

	const config = {
			  entry: './path/to/my/entry/file.js',
			  output: {
						path: path.resolve(__dirname, 'dist'),
						filename: 'my-first-webpack.bundle.js'
					  },
			  module: {
						rules: [
						  {test: /\.(js|jsx)$/, use: 'babel-loader'}
						]
					  },
			  plugins: [
						new webpack.optimize.UglifyJsPlugin(),
						new HtmlWebpackPlugin({template: './src/index.html'})
					]
			};
	
	module.exports = config;

```

 
 ##  base64图片的使用 
 ##  post-loader  自动添加css3 浏览器前缀
 ##  ExtractTextPlugin 打包后 css 与 js 分离

url `https://segmentfault.com/a/1190000006178770`

  