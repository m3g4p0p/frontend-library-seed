const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
