var a=3;
var b=4;
var c=-10;
var d=b*b - 4*a*c;
if (d>0)
{
	var x1=(-b+Math.sqrt(d))/(2*a);
	var x2=(-b-Math.sqrt(d))/(2*a);
	document.write ("x1="+ x1 + "<br> x2="+x2);
}
else if (d==0)
{
	var x=-b/(2*a);
	document.write ("x1=x2="+ x);
}
else {
	document.write ("This quadratic equation have not real roots")
}