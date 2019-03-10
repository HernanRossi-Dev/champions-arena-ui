const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, "static"),
    proxy: {
      "/api/*": {
        target: "http://localhost:8080"
      }
    },
    historyApiFallback: true
  }
});
