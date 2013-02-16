var p = 1;
var v = 5;
var mask = 1 << p;
var vAndMask = v & mask; 
var bit = vAndMask >> p;
if (bit)
{
	console.log("v=" + v + "; p=" + p + " -> true");   
	document.write ("v=" + v  + "; p=" + p + " -> true");
}
else
{
	console.log("v=" + v + "; p=" + p + " -> false");   
	document.write ("v=" + v +"; p=" + p + " -> false");
}