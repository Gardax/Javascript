var nums=[2,5,5,7,8,9,10,1,2,3,4,4,6,7,8,20,3];
var sequence=1;
var maxSeq=1;
var num=nums[0];
for (var i=1; i<nums.length;i++)
{
	if (nums[i]==num+1) {sequence++; num++;}
	else {
		num=nums[i];
		if (sequence>maxSeq)maxSeq=sequence;
		sequence=1;
	}
	
}
document.write (maxSeq);