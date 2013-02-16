var arr=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
function check(arr, positon){
	if (position==0){
		if (arr[0]>arr[1]) return 1;
		else return 0;
	}else if (position==arr.length){
		if (arr[position]>arr[position-1]) return 1;
		else return 0;
	}else {
		if (arr[position]>arr[position-1] && arr[position]>arr[position+1]) return 1;
		else return 0;
	}
}
var position=prompt("Enter position: ", "")|0;
if (check(arr,position)) document.write("The element is bigger than his neighbors");
else document.write ("The element is not bigger than his neighbors");