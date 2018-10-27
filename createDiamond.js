let lib = require('./src/patternLibrary.js');
let {createDiamondOfType} = lib;

const main = function() {
  let typeOfDiamond=process.argv[2];
  let heightOfDiamond=+process.argv[3];
  console.log(createDiamondOfType(typeOfDiamond,heightOfDiamond));
}
main();
