const webpack = require("webpack");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: [resolve("ArenaBattleApp/src/js/components/App.jsx")]
  },
  output: {
    path: resolve("webAppMern/static/"),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", "*",".html"]
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
        },

      },
	    {
		    test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
	    },
	    {
		    test: /\.css$/,
		    loader: 'style-loader'
	    }, {
		    test: /\.css$/,
		    loader: 'css-loader',
		    query: {
			    modules: true,
			    localIdentName: '[name]__[local]___[hash:base64:5]'
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
    },
    historyApiFallback: true
  },
  devtool: "source-map"
};
