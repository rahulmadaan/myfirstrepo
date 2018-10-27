let lib = require('./src/patternLibrary.js');
let {generateTriangle} = lib;

const main = function() {
  let typeOfTriangle=process.argv[2];
  let heightOfTriangle=+process.argv[3];
  console.log(generateTriangle(typeOfTriangle,heightOfTriangle));
}

main();
