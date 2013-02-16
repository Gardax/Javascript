nums=[2,5,7,2,9,1,20,3];
min=nums[0];
max=nums[0];
for (i=0; i<nums.length; i++)
{
	if (min>nums[i]) min=nums[i];
	if (max<nums[i]) max=nums[i];
}
document.write ("min="+ min+"  max="+max);