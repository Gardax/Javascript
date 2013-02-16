var arr=[1,2,3,4,5,6,7,8,9,10];
var firstIndex=0;
var lastIndex=arr.length;
var searchedElement=8;
var index=((lastIndex+firstIndex)/2)|0;
while (arr[index]!=searchedElement)
{
	if (searchedElement>arr[index])
	{
		firstIndex=index;
		index=((lastIndex+firstIndex)/2)|0;
	}
	else
	{
		lastIndex=index;
		index=((lastIndex+firstIndex)/2)|0;
	}
}
document.write ("The index of the element is: "+ index);