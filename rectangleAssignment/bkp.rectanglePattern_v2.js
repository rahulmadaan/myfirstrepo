const drawLine=function(symbol,width) {
  let count=1;line="";
  while(count<=width) {
    line=line+symbol;
    count++;
  }
  return line;
}

const executePattern=function(pattern, width, height) {

  if(pattern=="filled") {
    let output="", delimiter="";
    for(let count=1;count<=height;count++) {
      output=output+delimiter+ drawLine("*",width);
      delimiter="\n";
    }
    return output;
  }

  if(pattern=="empty") {
    let output="";
    output=drawLine("*",width);
    for(let count=1; count <=height-2; count++) {
      output=output+"\n"+"*"+drawLine(" ",(width-2))+"*";
    }
    output+="\n"+drawLine("*",width);
    return output;
  }

  if(pattern=="alternating") {
    let output="", symbol="*",delimiter="";
    for(let count=1; count <=height; count++) {
      output+=delimiter+drawLine(symbol,width);
      delimiter="\n";
      symbol="*";
      if(count%2!=0) {
        symbol="-";
      }
    }
    return output;
  }

}
console.log(executePattern(process.argv[2],+process.argv[3],+process.argv[4]));
