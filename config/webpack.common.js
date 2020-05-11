const path = require('path')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry:  ['babel-polyfill', './src/index.jsx'],
  module: {
    rules: [
      {
        test:    /\.(js|jsx)$/,
        include: path.resolve(process.cwd(), 'src'),
        exclude: /node_modules/,
        loader:  'babel-loader'
      },
      {
        test: /\.css$/,
        use:  ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias:      {
      '~shared':     path.resolve(process.cwd(), './src/components/shared/'),
      '~components': path.resolve(process.cwd(), './src/components/'),
      '~redux':      path.resolve(process.cwd(), './src/redux/'),
      '~sagas':      path.resolve(process.cwd(), './src/sagas/'),
      '~lib':        path.resolve(process.cwd(), './src/lib/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '^runtime.*js$',
      template:     'src/index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ],
  output: {
    filename:   '[name].js',
    path:       path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  }
}
