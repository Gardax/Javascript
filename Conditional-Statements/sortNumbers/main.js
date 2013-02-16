var a=55;
var b=22;
var c=12;
if (a>b && a>c)
{
	if (b>c)
	{
		document.write (a + " " + b + " " +c);
	}
	else{
		document.write (a + " " + c + " " +b);
	}
}else if (b>a && b >c)
{
	if (a>c)
	{
		document.write (b + " " + a + " " +c);
	}else
	{
		document.write (b + " " + c + " " +a);
	}
} else if (c>a && c>b)
{
	if (a>b)
	{
		document.write (c + " " + a + " " +b);
	}else
	{
		document.write (c + " " + b + " " +a);
	}
}	