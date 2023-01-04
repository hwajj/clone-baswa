const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const absolute_path = (dir) => path.resolve(__dirname, dir);

module.exports = {
  name: "clone-baswa",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@": absolute_path("src"),
      "@assets": absolute_path("src/assets"),
    },
  },
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2015",
        },
      },
      {
        test: /\.s?css$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        type: "javascript/auto",
        test: /\.(glb|png|svg|jpe?g|gif|hdr|json|mp3|mov|woff|woff2|eot|ttf|otf|mp4|webm|ico|usdz)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          // name: '[name].[ext]',
          outputPath: "assets/",
          esModule: false,
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0", // Open every network Access.
    port: 8098,
    historyApiFallback: true,
  },
};
