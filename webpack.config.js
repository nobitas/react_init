const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
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
		      {
		      	loader: "style-loader"
		      },
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
  plugins: [ htmlPlugin ]
};