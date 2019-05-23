const merge = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, "lib"),
    proxy: {
      "/api/*": {
        target: "http://localhost:8080"
      }
    },
    historyApiFallback: true
  }
});
