const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: [resolve("webAppMern/src/App.jsx")]
  },
  output: {
    path: resolve("webAppMern/static/"),
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devServer: {
    port: 8000,
    contentBase: "static",
    proxy: {
      "/api/*": {
        target: "http://localhost:3000"
      }
    }
  },
  devtool: "source-map"
};
