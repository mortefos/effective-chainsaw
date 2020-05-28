const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

const path = resolve("../../.lib/public");
const filename = resolve("../..", ".lib", "views", "index.ejs");

module.exports = {
  mode: "development",
  output: {
    path,
    publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [new HtmlWebpackPlugin({ filename })],
};
