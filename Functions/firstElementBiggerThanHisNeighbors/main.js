var arr=[0, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
function check(arr, position){
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
function element (arr){
	for (i=0; i<arr.length;i++){
		if (check(arr,i)) return i;
	}
	return -1;
}
document.write (element(arr));