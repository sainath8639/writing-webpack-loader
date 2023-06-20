const path = require("path");

module.exports = function (context) {
  const filename = path.basename(this.resourcePath);

  // check if the file is the desited file: /node_modules/@splide .startswith
  // replace /var PROJECT_CODE(.*)/
  //   console.log("came here with", context);
  // console.log("file is", filename);
  const result = context.replace(
    /var PROJECT_CODE(.*)/,
    'var PROJECT_CODE = "cmt-carousel";'
  );
  //   return context;
  return result;
};
