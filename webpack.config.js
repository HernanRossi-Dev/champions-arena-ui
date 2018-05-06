const webpack = require("webpack");
const path = require("path");
const WebpackMildCompile = require('webpack-mild-compile').Plugin;
function resolve(dir) {
  return path.join(__dirname, "..", dir);
}

module.exports = {
	mode: 'development',
  entry: {
    app: [resolve("ChampionsArena/src/js/components/App.jsx")]
  },
  output: {
    path: resolve("ChampionsArena/static/"),
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
		    test: /\.(jpg|png|gif|svg|pdf|ico)$/,
		    use: [
			    {
				    loader: 'file-loader',
				    options: {
					    name: '[path][name]-[hash:8].[ext]'
				    },
			    },
		    ]
	    },
	    {
		    test: /\.css$/,
		    loader: 'style-loader'
	    },
	    {
		    test: /\.css$/,
		    loader: 'css-loader',
		    query: {
			    modules: true,
			    // localIndentName: '[name]__[local]___[hash:base64:5]'
		    }
	    },
	    {
		    test: /\.svg$/,
		    use: [
			    {
				    loader: "babel-loader"
			    },
			    {
				    loader: "react-svg-loader",
				    options: {
					    jsx: true // true outputs JSX tags
				    }
			    }
		    ]
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
