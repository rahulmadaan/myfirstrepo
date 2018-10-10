const repeatString=function(symbol,width) { 
  let count=1;line="";
  while(count<=width) {
    line=line+symbol;
    count++;
  }
  return line;
}

const filledPattern=function(width,height) {
  let output="", delimiter="";
  for(let count=1;count<=height;count++) {
    output=output+delimiter+ repeatString("*",width);
    delimiter="\n";
  }
  return output;
}

const emptyPattern=function(width,height) {
  let output="";
  output=repeatString("*",width);
  for(let count=1; count <=height-2; count++) {
    output=output+"\n"+"*"+repeatString(" ",(width-2))+"*";
  }
  output+="\n"+repeatString("*",width);
  return output;
}

const alternatingPattern=function(width,height) {
  let output="", symbol="*",delimiter="";
  for(let count=1; count <=height; count++) {
    output+=delimiter+repeatString(symbol,width);
    delimiter="\n", symbol="*";
    if(count%2!=0) {
      symbol="-";
    }
  }
  return output;
}
patternName=process.argv[2];
width=+process.argv[3];
height=+process.argv[4];
if(patternName=="filled") {
  console.log(filledPattern(width,height));
}
if(patternName=="empty") {
  console.log(emptyPattern(width,height));
}
if(patternName=="alternating") {
  console.log(alternatingPattern(width,height));
}
