var arr=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var mostFr=1;
var m=0;
var num;
for (var i=0;i<arr.length;i++)
{
	for (var j=i;j<arr.length;j++)
	{
		if (arr[i]==arr[j]) m++;
		if (mostFr<m) {mostFr=m;num=arr[i];}
	}
	m=0;
}
document.write(num+"("+mostFr+" times)");