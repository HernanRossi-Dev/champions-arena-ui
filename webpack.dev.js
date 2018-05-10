const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: "source-map",
	devServer: {
			contentBase: "./static",
			proxy: {
				"/api/*": {
					target: "http://localhost:8080"
				}
			},
			historyApiFallback: true
		}
});