let lib = require('./src/patternLibrary.js');
let {filledRectangle} = lib;
let {emptyRectangle} = lib;
let {alternatingRectangle} = lib;

const main = function() {
  let type=process.argv[2];
  let width=+process.argv[3];
  let height=+process.argv[4];

  if(type=="filled"){
    console.log(filledRectangle(width,height));
  }
  if(type=="empty"){
    console.log(emptyRectangle(width,height));
  }
  if(type=="alternating"){
    console.log(alternatingRectangle(width,height));
  }
}
main();


