n=137;
if ((n%2!=0 || n==2) && (n%3!=0 || n==3) && (n%5!=0 || n==5) && (n%7!=0 || n==7) && (n%11!=0 || n==11) && (n%13!=0 || n==13))
{
	document.write ("The number is prime");
	console.log ("The number is prime");
}
else
{
	document.write ("The number is not prime");
	console.log ("The number is not prime");
}