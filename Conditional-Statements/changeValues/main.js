var firstNum=1;
var secondNum=3;
var swap;
document.write ("First number:" + firstNum+"<br>");
document.write ("Second number:" + secondNum+"<br>");
if (firstNum>secondNum){
	document.write("The first number is greater! <br>");
	swap=firstNum;
	firstNum=secondNum;
	secondNum=swap;
	document.write ("First number:" + firstNum+"<br>");
	document.write ("Second number:" + secondNum+"<br>");
	document.write ("They're values are changed! <br>");
}
else
{
	document.write ("The first number is smaller than the second one! <br>");
}
