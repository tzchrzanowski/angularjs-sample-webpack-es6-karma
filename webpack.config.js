const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "build/"),
    filename: '[name].[hash].js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(html)$/,
        loader: "raw-loader"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: "src/index.html",
      filename: "index.html",
      title: 'caching'
    }),
  ]
}