let lib = require('./src/patternLibrary.js');
let {createRectangleOfType} = lib;

const main = function() {
  let type=process.argv[2];
  let width=+process.argv[3];
  let height=+process.argv[4];
  console.log(createRectangleOfType(type,width,height));
}
main();


