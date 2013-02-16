var b = 2;
var i = 5;
var mask = 1 << b;
var vAndMask = i & mask; 
var bit = vAndMask >> b;
console.log("i=" + i + "; b=" + b + " -> value="+bit);   
document.write ("i=" + i  + "; b=" + b + " -> value="+bit);
