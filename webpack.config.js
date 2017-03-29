const path = require('path');
const webpack = require('webpack');

const WDS_PORT = 8000;

module.exports = {
  entry: [
    './src/client',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'src/build'),
    publicPath: '/build/'
  },
  watch: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [ path.resolve(__dirname, 'src/client') ],
        query: {
          presets: ['es2015', 'react']
        }
      },
      // {
      //   test: /(\.css|\.scss)$/,
      //   include: [ path.resolve(__dirname, 'client/scss') ],
      //   loaders: ['style', 'css', 'sass'],
      // },
    ]
  },
  devServer: {
    contentBase: './src',
    inline: true,
    hot: true,
    port: WDS_PORT,
  },
}