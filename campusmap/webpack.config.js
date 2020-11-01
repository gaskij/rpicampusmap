const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['dist/webpack'],
    }),
    new HtmlWebpackPlugin({
      title: 'RPI CampusMap',
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|ico)$/,
        use: ['url-loader?limit=100000'],
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
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      campusmap: path.resolve(__dirname),
    },
  },
  output: {
    filename: 'campusmap.bundle.js',
    path: path.resolve(__dirname, 'dist/webpack'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/webpack'),
    port: 3000,
    public: 'http://localhost:3000',
    historyApiFallback: true,
    proxy: { "/api/**": { target: 'http://localhost:5000', secure: false }  },
  }
};
