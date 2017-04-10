var webpack = require('webpack')

module.exports = {
  entry: './src/App.js',
  output: {
     path: __dirname,
     filename: 'index.js'
 },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react'],
          plugins: [["import", { libraryName: "antd", style: "css" }]]
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by zhaoda')
  ]
}