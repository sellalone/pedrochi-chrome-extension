const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const webpackConfig = {
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    popup: './src/popup.js',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/images',
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['popup'],
      filename: 'popup.html',
    }),
    new CopyPlugin([
      { from: './src/assets', to: './assets' },
      { from: './src/manifest.json', to: './manifest.json' },
    ]),
  ],
};

module.exports = webpackConfig;
