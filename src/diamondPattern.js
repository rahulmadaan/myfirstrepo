const repeat=function(symbol,length) {
  let lineNumber=1;
  let output="";
  while(lineNumber<=length) {
    output+=symbol;
    lineNumber++;
  }
  return output;
}
const generateLine=function(endChars, middleChars, lengthOfLine) {
  let line="";
  line += endChars;
  line += repeat( middleChars , lengthOfLine-2 );
  line += endChars;
  return line;
}
/*-----------Generates Filled Diamond--------------- */
const generateFilledDiamond=function(height) {
  let upperPart = "";
  let delimiter = "";
  let lowerPart = "";
  let currentLine = "";
  for(let lineNumber = 0; lineNumber < height; lineNumber += 2) {
    upperPart += currentLine;
    currentLine = repeat(" ",Math.floor (( height - lineNumber - 1) /2 ));
    currentLine += repeat("*",lineNumber + 1 );
    lowerPart = currentLine + delimiter + lowerPart;
    currentLine=delimiter+ currentLine;
    delimiter = '\n';
  }
  return upperPart+"\n"+lowerPart;
}
/*-----------Start of Hollow Diamond--------------- */
const generateHollowDiamond=function(height) {
  let upperPart = repeat(" ",Math.floor(height/2))+ "*";
  let lowerPart = repeat(" ",Math.floor(height/2))+"*";
  let currentLine = "";
  for(let lineNumber = 0; lineNumber < height - 2; lineNumber += 2) {
    upperPart += currentLine;
    currentLine = repeat(" ",Math.floor (( height - lineNumber - 2) /2 ));
    currentLine+=generateLine("*"," ",lineNumber+3);
    lowerPart = currentLine + "\n" + lowerPart;
    currentLine="\n"+ currentLine;
  }
  return upperPart+"\n"+lowerPart;
}
/*-------------Start of Angled Diamond---------------- */
const generateAngledDiamond=function(height) {
  let lowerPart=lowerAngledDiamond(height);
  let upperPart=upperAngledDiamond(height);
  return upperPart+ lowerPart;
}

const upperAngledDiamond=function(height) {
  let upperPart = repeat(" ",Math.floor(height/2))+ "*";
  let currentLine = "";
  for(let lineNumber = 3; lineNumber < height; lineNumber += 2) {
    currentLine = repeat(" ",Math.floor (( height - lineNumber ) /2 ));
    currentLine+="/"+repeat(" ",lineNumber - 2) + "\\";
    currentLine="\n"+ currentLine;
    upperPart += currentLine;
  }
  upperPart+="\n"+generateLine("*"," ",height);
  return upperPart;
}

const lowerAngledDiamond=function(height) {
  let currentLine = "";
  let lowerPart="";
  for(let lineNumber = height-2; lineNumber >1; lineNumber -=2) {
    currentLine=repeat(" ",(height-lineNumber  )/2 );
    currentLine+= "\\"+repeat(" ", lineNumber - 2) + "/";
    currentLine="\n"+ currentLine;
    lowerPart+=currentLine;
  }
  lowerPart+="\n"+repeat(" ",Math.floor(height/2))+"*";
  return lowerPart;
}
/*-------------End of Angled Diamond---------------- */

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
exports.repeat=repeat;
exports.generateLine=generateLine;
