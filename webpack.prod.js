const merge = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require("./webpack.common.js");
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const MinifyPlugin = require("babel-minify-webpack-plugin");


module.exports = merge(common, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin(
        {
          uglifyOptions: {
            mangle: true,
            warnings: false,
            parse: {},
            compress: {},
            mangle: true, // Note `mangle.properties` is `false` by default.
            output: null,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_fnames: false,
            output: {
              comments: false,
            },
          },
          parallel: true,
          exclude: [/\.min\.js$/gi], // skip pre-minified libs
        }
      )
    ],
  },
  plugins: [new MinifyPlugin(),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
    new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.5
    })],
});
