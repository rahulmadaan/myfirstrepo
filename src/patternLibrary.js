let {repeat,generateLine} = require('./utilLib.js');
/*------------------------------------------------DIAMOND---------------------------------------------- */
const createDiamondOfType = function(type,heightOfDiamond) {

   if(type=="filled"){
    return generateFilledDiamond(heightOfDiamond);
  }
  if(type=="hollow"){
    return generateHollowDiamond(heightOfDiamond);
  }
  if(type=="angled"){
    return generateAngledDiamond(heightOfDiamond);
  }
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
/*------------------------------------------------RECTANGLE---------------------------------------------- */
/*-------------Filled Rectangle---------------- */
const createRectangleOfType = function(type,width,height) {
    if(type=="filled"){
    return filledRectangle(width,height);
  }
  if(type=="empty"){
    return emptyRectangle(width,height);
  }
  if(type=="alternating"){
    return alternatingRectangle(width,height);
  }
}

const filledRectangle = function(width,height) {
  let symbol="*";
  let output = '';
  let delimiter = '';
  for(let count=1;count<=height;count++) {
    output=output+delimiter+ repeat(symbol,width);
    delimiter="\n";
  }
  return output;
}

/*-------------Empty Rectangle---------------- */
const emptyRectangle = function(width,height) {

  let line="", symbol="*";
  let middleLines = '';
  let delimiter = '\n';
  let upperLine = repeat(symbol,width);
  let bottomLine = delimiter+ repeat(symbol,width);
  for(let count=1;count<=height - 2;count++) {
    middleLines=middleLines+delimiter+ generateLine(symbol,' ',width);
  }
  return upperLine + middleLines + bottomLine;
}

/*-------------Alternating Rectangle---------------- */
const alternatingRectangle = function(width,height) {
  let line="", symbol="*";
  let output="";
  let delimiter = '';
  for(let heightDraw=1;heightDraw<=height; heightDraw++) {
    output=output+delimiter+ repeat(symbol,width);
    symbol="*";
    if(heightDraw%2!=0) {
      symbol="-";
    }
    delimiter = '\n';
  }
  return output;
}
/*------------------------------------------------TRIANGLE---------------------------------------------- */
const createTriangleOfType=function(alignType,height) {
  let output="";
  let delimiter="";
  for(let count=0;count<height;count++) {

    /*-------------Left Triangle---------------- */
    if(alignType=="left") {
      output+=delimiter+repeat('*',count+1);
    }

    /*-------------Right Triangle---------------- */
    if(alignType=="right") {
      output+=delimiter+repeat(' ',(height-count-1)) + repeat('*',count+1);
    }
    delimiter = '\n';
  }
  return output;
}

module.exports = {
  createDiamondOfType,
  createTriangleOfType,
  createRectangleOfType,
}
