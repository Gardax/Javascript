N=10;
K=12;
Nf=1;
Kf=1;
for (i=1;i<=N;i++)
{
	Nf=Nf*i;
}
for (i=1;i<=K;i++)
{
	Kf=Kf*i;
}
document.write (Nf*Kf/(K-N));