let lib = require('../src/patternLibrary.js');
let {createRectangleOfType,createTriangleOfType,createDiamondOfType,generateFilledDiamond,generateHollowDiamond,generateAngledDiamond} = lib;
let {filledRectangle,emptyRectangle,alternatingRectangle} = lib;
let assert = require('assert').deepEqual;

let line = '';
let pattern = '';

//------------------------------------------Create Rectangle Of Type-------------------------------------------------------
line = "********************";
let alternateLine = "*                  *";
pattern = [line,alternateLine,alternateLine,alternateLine,line].join("\n");
assert(createRectangleOfType('empty',20,5),pattern);

line = "*******";
alternateLine = "*     *";
pattern = [line,alternateLine,line].join("\n");
assert(createRectangleOfType('empty',7,3),pattern);

line = "***";
alternateLine = "* *";
pattern = [line,alternateLine,alternateLine,alternateLine,alternateLine,alternateLine,alternateLine,line].join("\n");
assert(createRectangleOfType('empty',3,8),pattern);
//---------------------------//
line = "**";
pattern = [line,line].join('\n');
assert(createRectangleOfType('filled',2,2),pattern)

line = "****";
pattern = [line,line,line,line,line].join("\n");
assert(createRectangleOfType('filled',4,5),pattern);

line = "******";
pattern = [line,line,line,line,line,line].join("\n");
assert(createRectangleOfType('filled',6,6),pattern);

line = "********************";
pattern = [line,line,line,line,line].join("\n");
assert(createRectangleOfType('filled',20,5),pattern);
//---------------------------//
line = "********************";
alternateLine = "--------------------";
pattern = [line,alternateLine,line,alternateLine,line].join("\n");
assert(createRectangleOfType('alternating',20,5),pattern);

line = "*******";
alternateLine = "-------";
pattern = [line,alternateLine,line].join("\n");
assert(createRectangleOfType('alternating',7,3),pattern);

line = "***";
alternateLine = "---";
pattern = [line,alternateLine,line,alternateLine,line,alternateLine,line,alternateLine].join("\n");
assert(createRectangleOfType('alternating',3,8),pattern);

//---------------------------------------Create Diamond Of Type-------------------------------------------------------------

let filled_5 = '';
filled_5 += '  *'+'\n';
filled_5 += ' ***'+'\n';
filled_5 += '*****'+'\n';
filled_5 += ' ***'+'\n';
filled_5 += '  *';
assert(createDiamondOfType('filled',5),filled_5);

let filled_9 = '';
filled_9 += '    *'+'\n';
filled_9 += '   ***'+'\n';
filled_9 += '  *****'+'\n';
filled_9 += ' *******'+'\n';
filled_9 += '*********'+'\n';
filled_9 += ' *******'+'\n';
filled_9 += '  *****'+'\n';
filled_9 += '   ***'+'\n';
filled_9 += '    *';
assert(createDiamondOfType('filled',9),filled_9);

let hollow_5 = '';
hollow_5 += '  *'+'\n';
hollow_5 += ' * *'+'\n';
hollow_5 += '*   *'+'\n';
hollow_5 += ' * *'+'\n';
hollow_5 += '  *';
assert(createDiamondOfType('hollow',5),hollow_5);

let hollow_9 = '';
hollow_9 += '    *'+'\n';
hollow_9 += '   * *'+'\n';
hollow_9 += '  *   *'+'\n';
hollow_9 += ' *     *'+'\n';
hollow_9 += '*       *'+'\n';
hollow_9 += ' *     *'+'\n';
hollow_9 += '  *   *'+'\n';
hollow_9 += '   * *'+'\n';
hollow_9 += '    *';
assert(createDiamondOfType('hollow',9),hollow_9);

let angled_7 = '';
angled_7 += '   *'+'\n'; 
angled_7 += '  / \\'+'\n';
angled_7 += ' /   \\'+'\n';
angled_7 += '*     *'+'\n';
angled_7 += ' \\   /'+'\n';
angled_7 += '  \\ /'+'\n';
angled_7 += '   *';
assert(createDiamondOfType('angled',7),angled_7);

let angled_13 = '';
angled_13 += '      *'+'\n'; 
angled_13 += '     / \\'+'\n';
angled_13 += '    /   \\'+'\n';
angled_13 += '   /     \\'+'\n';
angled_13 += '  /       \\'+'\n';
angled_13 += ' /         \\'+'\n';
angled_13 += '*           *'+'\n';
angled_13 += ' \\         /'+'\n';
angled_13 += '  \\       /'+'\n';
angled_13 += '   \\     /'+'\n';
angled_13 += '    \\   /'+'\n';
angled_13 += '     \\ /'+'\n';
angled_13 += '      *';
assert(createDiamondOfType('angled',13),angled_13);

//------------------------------------filled Rectangle----------------------------------------------------------

line = "**";
pattern = [line,line].join('\n');
assert(filledRectangle(2,2),pattern)

line = "****";
pattern = [line,line,line,line,line].join("\n");
assert(filledRectangle(4,5),pattern);

line = "******";
pattern = [line,line,line,line,line,line].join("\n");
assert(filledRectangle(6,6),pattern);

line = "********************";
pattern = [line,line,line,line,line].join("\n");
assert(filledRectangle(20,5),pattern);

//------------------------------------------------empty Retangle-----------------------------------------------------
line = "********************";
alternateLine = "*                  *";
pattern = [line,alternateLine,alternateLine,alternateLine,line].join("\n");
assert(emptyRectangle(20,5),pattern);

line = "*******";
alternateLine = "*     *";
pattern = [line,alternateLine,line].join("\n");
assert(emptyRectangle(7,3),pattern);

line = "***";
alternateLine = "* *";
pattern = [line,alternateLine,alternateLine,alternateLine,alternateLine,alternateLine,alternateLine,line].join("\n");
assert(emptyRectangle(3,8),pattern);

// ---------------------------------Alternating Rectangle Tests-----------------------------------

line = "********************";
alternateLine = "--------------------";
pattern = [line,alternateLine,line,alternateLine,line].join("\n");
assert(createRectangleOfType('alternating',20,5),pattern);

line = "*******";
alternateLine = "-------";
pattern = [line,alternateLine,line].join("\n");
assert(createRectangleOfType('alternating',7,3),pattern);

line = "***";
alternateLine = "---";
pattern = [line,alternateLine,line,alternateLine,line,alternateLine,line,alternateLine].join("\n");
assert(createRectangleOfType('alternating',3,8),pattern);

//--------------------//
console.log("Rectangle Unit Tests Passed!!!");

//--------------------------------------------Triangle Tests------------------------------------------------------------

//Triangle pattern of left aligned with height 2
assert(createTriangleOfType("left",2),"*\n**");

//Triangle pattern of left aligned with height 3
assert(createTriangleOfType("left",3),"*\n**\n***");

//Triangle pattern of left aligned with height 4
assert(createTriangleOfType("left",4),"*\n**\n***\n****");

//Triangle pattern of left aligned with height 5
assert(createTriangleOfType("left",5),"*\n**\n***\n****\n*****");

//Triangle pattern of left aligned with height 6
assert(createTriangleOfType("left",6),"*\n**\n***\n****\n*****\n******");

  //Triangle pattern of right aligned with height 2
assert(createTriangleOfType("right",2)," *\n**");

//Triangle pattern of right aligned with height 3
assert(createTriangleOfType("right",3),"  *\n **\n***");

//Triangle patten of right aligned with height 4
assert(createTriangleOfType("right",4),"   *\n  **\n ***\n****");

//Triangle pattern of right aligned with height 5
assert(createTriangleOfType("right",5),"    *\n   **\n  ***\n ****\n*****");

//Triangle pattern of right aligned with height 6
assert(createTriangleOfType("right",6),"     *\n    **\n   ***\n  ****\n *****\n******");

console.log('Triangle Unit Tests Passed!!!');

//-----------------------------------------Diamond Tests--------------------------------------------------------------

filled_5 = '';
filled_5 += '  *'+'\n';
filled_5 += ' ***'+'\n';
filled_5 += '*****'+'\n';
filled_5 += ' ***'+'\n';
filled_5 += '  *';
assert(generateFilledDiamond(5),filled_5);

filled_9 = '';
filled_9 += '    *'+'\n';
filled_9 += '   ***'+'\n';
filled_9 += '  *****'+'\n';
filled_9 += ' *******'+'\n';
filled_9 += '*********'+'\n';
filled_9 += ' *******'+'\n';
filled_9 += '  *****'+'\n';
filled_9 += '   ***'+'\n';
filled_9 += '    *';
assert(generateFilledDiamond(9),filled_9);

hollow_5 = '';
hollow_5 += '  *'+'\n';
hollow_5 += ' * *'+'\n';
hollow_5 += '*   *'+'\n';
hollow_5 += ' * *'+'\n';
hollow_5 += '  *';
assert(generateHollowDiamond(5),hollow_5);

hollow_9 = '';
hollow_9 += '    *'+'\n';
hollow_9 += '   * *'+'\n';
hollow_9 += '  *   *'+'\n';
hollow_9 += ' *     *'+'\n';
hollow_9 += '*       *'+'\n';
hollow_9 += ' *     *'+'\n';
hollow_9 += '  *   *'+'\n';
hollow_9 += '   * *'+'\n';
hollow_9 += '    *';
assert(generateHollowDiamond(9),hollow_9);

angled_7 = '';
angled_7 += '   *'+'\n'; 
angled_7 += '  / \\'+'\n';
angled_7 += ' /   \\'+'\n';
angled_7 += '*     *'+'\n';
angled_7 += ' \\   /'+'\n';
angled_7 += '  \\ /'+'\n';
angled_7 += '   *';
assert(generateAngledDiamond(7),angled_7);

angled_13 = '';
angled_13 += '      *'+'\n'; 
angled_13 += '     / \\'+'\n';
angled_13 += '    /   \\'+'\n';
angled_13 += '   /     \\'+'\n';
angled_13 += '  /       \\'+'\n';
angled_13 += ' /         \\'+'\n';
angled_13 += '*           *'+'\n';
angled_13 += ' \\         /'+'\n';
angled_13 += '  \\       /'+'\n';
angled_13 += '   \\     /'+'\n';
angled_13 += '    \\   /'+'\n';
angled_13 += '     \\ /'+'\n';
angled_13 += '      *';
assert(generateAngledDiamond(13),angled_13);
console.log('Diamond Unit Tests Passed!!!');

assert();



