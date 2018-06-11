const config = require('./webpack.config.js')
const path = require('path')

module.exports = Object.assign({}, config, {
  mode: 'development',
  entry: path.join(__dirname, 'tools/app.js'),
  output: {
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  plugins: [],
  externals: [],
  devServer: {
    contentBase: path.join(__dirname, 'tools'),
    compress: true,
    https: false,
    port: 3001
  }
})
