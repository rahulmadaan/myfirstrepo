patternAvailable=["filled","empty","alternating"];

const pattern=function(pattern,width,height) {

  if(pattern==patternAvailable[0]) {
    let line="", symbol="*";
    for(let heightDraw=1;heightDraw<=height; heightDraw++) {
      for(let lengthOfLine=1; lengthOfLine<=width; lengthOfLine++) {
        line=line+symbol;
      }
      console.log(line);
      line="";
      symbol="*";
    }
    return line;
  }

  if(pattern==patternAvailable[1]) {
    let line="", symbol="*";
    for(let heightDraw=1;heightDraw<=height; heightDraw++) {
      for(let lengthOfLine=1; lengthOfLine<=width; lengthOfLine++) {
        if(heightDraw==1 || heightDraw==height || lengthOfLine==1 || lengthOfLine == width ) {
          line=line+"*";
        }else {
          line=line + " ";
        }
      }
      console.log(line);
      line="";
    }
    return line;
  }

  if(pattern==patternAvailable[2]) {
    let line="", symbol="*";
    let outputPattern="";
    for(let heightDraw=1;heightDraw<=height; heightDraw++) {
      for(let lengthOfLine=1; lengthOfLine<=width; lengthOfLine++) {
        line=line+symbol;
      }
      outputPattern=outputPattern + "\n" + line;
      line="";
      symbol="*";
      if(heightDraw%2!=0) {
        symbol="-";
      }
    }
    return outputPattern;
  }
}
console.log(pattern(process.argv[2],+process.argv[3],+process.argv[4]));

