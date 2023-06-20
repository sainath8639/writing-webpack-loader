const path = require("path");

module.exports = function (context) {
  const filename = path.basename(this.resourcePath);
  console.log("file  is", filename);
  const result = context.replace(/splide/g, "cmt__carousel");
  console.log("replaced with", result);
  return result;
};
