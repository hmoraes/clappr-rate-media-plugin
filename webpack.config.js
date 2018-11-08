const path = require('path');
const filename = 'clappr-rate-media-plugin.js';

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	externals: {
		clappr: {
			amd: 'clappr',
			commonjs: 'clappr',
			commonjs2: 'clappr',
			root: 'Clappr'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					compact: true,
				}
			},
			{
				test: /\.scss$/,
				loaders: ['css-loader', 'postcss-loader', 'sass-loader?includePaths[]='
				+ path.resolve(__dirname, './node_modules/compass-mixins/lib')
				+ '&includePaths[]='
				+ path.resolve(__dirname, './node_modules/clappr/src/base/scss')
				+ '&includePaths[]='
				+ path.resolve(__dirname, './src/public')
				],
				include: path.resolve(__dirname, 'src'),
			},
			{
				test: /\.(png|woff|woff2|eot|swf|cur|ttf|svg)$/,
				loader: 'file-loader'
			}
		],
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src'),
			'node_modules'
		],
		extensions: ['.js', '.svg', '.scss'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/public/',
		filename: filename,
		library: 'RateMediaPlugin',
		libraryTarget: 'umd',
	},
	devServer: {
		contentBase: 'public/',
		host: '0.0.0.0',
		disableHostCheck: true,
		inline: true
	}
};
