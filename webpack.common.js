const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, "./src/js/components/App.jsx")]
  },
  output: {
    path: path.resolve(__dirname, "./dist/"),

    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", "*", ".html"]
  },
  module: {
    rules: [{
      test: /\.js?/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query: {
        presets: ["es2015", "react", "stage-0"]
      }
    },
    {
      test: /\.(jpg|png|gif|svg|pdf|ico)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[path][name]-[hash:8].[ext]"
        }
      }]
    },
    {
      test: /\.css$/,
      loader: "style-loader"
    },
    {
      test: /\.css$/,
      loader: "css-loader",
      query: {
        modules: true
        // localIndentName: '[name]__[local]___[hash:base64:5]'
      }
    },
    {
      test: /\.svg$/,
      use: [{
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
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    // new HtmlWebpackPlugin({
    //   title: "Production"
    // })
  ]
};