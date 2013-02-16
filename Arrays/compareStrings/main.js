var a="azsumGeorgi";
var b="azsumGeorgi";
var length=a.length;
var equiv=1;
var i=0;
while(equiv)
{
	if (i>=length) break;
	if (a[i]!=b[i]) equiv=0;
	i++;
}
if (equiv)
{
	document.write("The strings are equivalent");
}
else {
	document.write("The strings are not equivalent");
}