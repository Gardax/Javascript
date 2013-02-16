var firstNum=1989;
var secondNum=867;
var gcd;
while (firstNum!=secondNum)
{
	if (firstNum>secondNum)
	{
		firstNum=firstNum-secondNum;
	}
	else
	{
		secondNum=secondNum-firstNum;
	}
}
gcd=firstNum;
document.write(gcd);