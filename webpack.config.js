// 引入 node 相关模块
const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    theme: './src/js/theme.js'
  },
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: 'js/[name].js'
  },
  devServer: {
    contentBase: './dist/',
    host: '0.0.0.0',
    port: 3000,
    writeToDisk: true
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(scss)$/,
      use: [{
        // loader: 'style-loader', // inject CSS to page
        loader: MiniCssExtractPlugin.loader,
        options: {
          // publicPath: '../',
          // hmr: process.env.NODE_ENV === 'development',
        },
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run postcss actions
        options: {
          plugins: function () { // postcss plugins, can be exported to postcss.config.js
            return [
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['js/*', 'css/*']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    })
  ]
}