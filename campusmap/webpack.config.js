const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config({path: path.join(__dirname, '../.env')}).parsed;

  // reduce it to a nice object, the same as before
  // const envKeys = Object.keys(env).reduce((prev, next) => {
  //   prev[`process.env.${next}`] = JSON.stringify(env[next]);
  //   return prev;
  // }, {});

  const envKeys = {
    'process.env.NODE_ENV': '"production"',
    'process.env.MAPBOX_API_KEY': '"key"' 
  }

  console.log(envKeys)

  return {
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
        favicon: './public/favicon.ico',
      }),
      new webpack.DefinePlugin(envKeys)
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
  }
};
