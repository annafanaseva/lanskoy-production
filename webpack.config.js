const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const pages = ["index", "service"];

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img/',
              esModule: false,
              useRelativePath: true
            }
          },
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lanskoy production',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Services',
      filename: 'services.html',
      template: './src/services.html'
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new CleanWebpackPlugin()
  ],
}