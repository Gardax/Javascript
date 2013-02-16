var nums=[2,5,5,7,7,7,7,2,9,1,1,1,1,1,1,1,1,20,3];
var sequence=1;
var maxSeq=1;
var num=nums[0];
for (var i=1; i<nums.length;i++)
{
	if (nums[i]==num) sequence++;
	else {
		num=nums[i];
		if (sequence>maxSeq)maxSeq=sequence;
		sequence=1;
	}
	
}
document.write (maxSeq);