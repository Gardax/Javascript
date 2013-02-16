var p = 3;
var n = 20;
var mask = 1 << p;
var nAndMask = n & mask; 
var bit = nAndMask >> p;
console.log(bit);   
document.write (bit);