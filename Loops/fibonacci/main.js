var first=0;
var second=1;
var third=1;
var N=7;
var fourth;
var s=2;
for (i=3; i<N;i++)
{
	fourth=second+third;
	second=third;
	third=fourth;
	s=s+fourth;
}
document.write (s);