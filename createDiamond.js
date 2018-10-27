let lib = require('./src/patternLibrary.js');
let {generateAngledDiamond} = lib;
let {generateHollowDiamond} = lib;
let {generateFilledDiamond} = lib;

const main = function() {
  let typeOfDiamond=process.argv[2];
  let heightOfDiamond=+process.argv[3];

  if(typeOfDiamond=="filled"){
    console.log(generateFilledDiamond(heightOfDiamond));
  }
  if(typeOfDiamond=="hollow"){
    console.log(generateHollowDiamond(heightOfDiamond));
  }
  if(typeOfDiamond=="angled"){
    console.log(generateAngledDiamond(heightOfDiamond));
  }
}
main();
