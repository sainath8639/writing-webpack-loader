const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const webpack = require("webpack");
const enableBundleAnalyzer = process.env.ENABLE_ANALYZER === "true";

const loadersPath = path.resolve(__dirname, "../loaders");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: { loader: path.resolve(loadersPath, "testLoader.js") },
      },

      // {
      //   test: /\.(css|scss|sass)$/,
      //   use: { loader: path.resolve(loadersPath, "cssSplideLoader.js") },
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: MiniCssExtractPlugin.loader },
      //     { loader: "css-loader" },
      //   ],
      // },
      {
        // test: /\.s(a|c)ss$/,
        test: /\.s?(a|c)ss$/,
        use: [
          // { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          // {
          //   loader: path.resolve(loadersPath, "cssSplideLoader.js"),
          // },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      PROJECT_CODE: '"cmt-carousel"',
      ABC: '"This is abc"',
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, "../dist")], {
      root: process.cwd(),
      verbose: true,
      dry: false,
    }),
    new OptimizeCssAssetsPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[id].[hash:8].css",
    }),
    new ManifestPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: enableBundleAnalyzer === true ? "static" : "disabled",
      openAnalyzer: true,
    }),
  ],
});
