const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: ["./client/scripts/main.ts", "./client/stylesheets/style.scss"], // 번들링 시작 위치
  output: {
    path: path.join(__dirname, "/dist"), // 번들 결과물 위치
    filename: "bundle.js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /[\.js]$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "client/scripts"), "node_modules"], // 모듈 위치
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/html/index.html", // 템플릿 위치
    }),
    new MiniCssExtractPlugin({
      // style 태그 대신 css 파일도 함께 bundle
      filename: "style.css",
      chunkFilename: "style.css",
    }),
  ],
  devServer: {
    host: "localhost", // live-server host 및 port
    port: 5500,
  },
  mode: "development", // 번들링 모드 development / production
};
