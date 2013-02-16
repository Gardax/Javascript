N=6;
X=2;
S=0;
for (i=1; i<=N; i++)
{
	f=1;
	for (j=1;j<=i;j++)
	{
		f=f*j;
	}
	Xn=1
	for (j=0;j<i;j++)
	{
		Xn=Xn*X;
	}
	S=S+(f/Xn);
}
document.write (S);