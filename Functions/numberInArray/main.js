function counter (arr,number){
	var count=0;
	var i;
	for (i=0;i<arr.length; i++){
		if (arr[i]==number) count++;
	}
	return count;
}
var arr=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
var number=prompt("Enter number: ", "")|0;
document.write ("The function returns: "+counter (arr,number)+"<br>");
var count=0;
var i;
for (i=0;i<arr.length; i++){
	if (arr[i]==number) count++;
}
document.write("The answer is: "+count);
