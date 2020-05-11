const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'eval',
  devServer: {
    contentBase: './dist',
    // enable if you need routing
    // historyApiFallback: true,
    hot: true,
    overlay: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  mode: 'development',
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
})
