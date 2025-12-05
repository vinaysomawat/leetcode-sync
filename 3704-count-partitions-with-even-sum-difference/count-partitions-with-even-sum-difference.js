/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let sum = nums.reduce((aurr, curr) => aurr+curr,0);
    let rightSum = nums[0];
    sum -= nums[0];
    let i=1;
    let count = (sum-rightSum)%2==0 ? 1: 0;
    while(i<nums.length) {
        rightSum +=nums[i];
        sum -= nums[i];
        if((sum-rightSum)%2==0) count++;
        i++;
    }
    console.log(count);
    return Math.max(count-1,0);
};