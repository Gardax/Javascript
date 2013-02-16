var number=231;
function reverse (number){
	number=number+"";
	return number.split("").reverse().join("");;
}
document.write (reverse(number)|0);