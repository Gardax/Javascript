function GetMax(a,b)
{
	if (a>b)
		return a;
	else 
		return b;
}
var number1=5;
var number2=1;
var number3=12;
document.write(GetMax(GetMax(number1,number2),GetMax(number2,number3)));