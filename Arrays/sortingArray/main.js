var arr=[3,8,7,6,5,4,3,2,1];
var arr2=new Array();
var min=arr[0];
var pos;
max=arr[0];
for (i=0; i<arr.length; i++)
{
	if (max<arr[i]) max=arr[i];
}

for (var i=0;i<arr.length;i++)
{
	for (var j=0;j<arr.length;j++)
	{
		if (arr[j]!="g")
		{
			if (min>arr[j]) 
			{
				min=arr[j];
				pos=j;
			}
		}
	}
	arr2[i]=min;
	arr[pos]="g";
	min=max;
}
document.write(arr2);
	