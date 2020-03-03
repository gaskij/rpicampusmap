const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/campusmap/index.ts',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['dist/campusmap'],
    }),
    new HtmlWebpackPlugin({
      title: 'RPI CampusMap',
      template: './src/campusmap/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
    alias: {
      campusmap: path.join(__dirname, 'src/campusmap'),
    },
  },
  output: {
    filename: 'campusmap.bundle.js',
    path: path.resolve(__dirname, 'dist/campusmap'),
  },
};
