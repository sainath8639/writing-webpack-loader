const resolve = require("path").resolve;

module.exports = {
  //   modules: ["node_modules", resolve(__dirname, "../loaders")],
  modules: ["node_modules", resolve(__dirname, "../loaders")],
  extensions: [".mjs", ".cjs", ".js", ".jsx", ".ts", ".tsx"],
};

// resolveLoader: {
//   modules: ["node_modules", path.resolve(__dirname, "../loaders")],
// },
