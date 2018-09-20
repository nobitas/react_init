const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_[hash].js',
    publicPath: "/",
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
		      {
		      	loader: "css-loader",
		      	options: {
		      		modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
		      	}
		      },
          { 
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)$/,
        loader: {
          loader: 'url-loader',
          options: {
            limit: 5 * 1024,// 图片大小 > limit 使用file-loader, 反之使用url-loader
            outputPath: 'images/'// 指定打包后的图片位置
          }
        }
　　　 }
    ]
  },
  plugins: [ 
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css'
    })
  ],
  devServer: {
    historyApiFallback: true, // 请求404时打开index页面。
    compress: true,
    host: '0.0.0.0',
    port: 8080
  }
};