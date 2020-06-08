const path = require("path"),
      {CleanWebpackPlugin} = require("clean-webpack-plugin"),
      HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin( {
      cleanStaleWebpackAssets: false
    } ),
    new HtmlWebpackPlugin( {
      title: "weathere"
    } )
  ],
  output: {
    filename: "[name].bundle.js",
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  }
};