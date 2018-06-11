const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    library: 'react-commentr',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        use: 'url-loader?limit=1000000' // Include all files in the bundle
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({
      parallel: true,
      cache: true,
      uglifyOptions: {
        compress: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  externals: [
    'prop-types',
    'react',
    'react-dom',
    'react-router-dom'
  ]
}
