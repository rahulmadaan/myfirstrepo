const repeatString =function(length,symbol) { 
  let line="";
  for(let count=0;count<length;count++) {
    line=line+symbol;
  }
  return line;
}
const generateTriangle=function(height) {
  let output="";
  let delimiter="";
  for(let count=0;count<height;count++) {

    if(alignType=="left") {
      output+=delimiter+repeatString(count+1,"*");
      delimiter="\n";
    }
 
    if(alignType=="right") {
        output+=repeatString((height-count-1)," ") + repeatString(count+1,"*")
      output+='\n';
    }
  }
  return output;
}
const main = function () {
 // alignments['left'],alignments['right'];
  alignType=process.argv[2];
  console.log(generateTriangle(+process.argv[3]));
}
main();
