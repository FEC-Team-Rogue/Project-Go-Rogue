const path = require('path');

module.exports = {
  entry: "./client/src",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
  },
  devServer: {
    port: 3000,
    static: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};