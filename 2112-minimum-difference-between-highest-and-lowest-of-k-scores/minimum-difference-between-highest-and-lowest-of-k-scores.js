/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a-b);
    let min = Infinity;
    let i=0,j=k-1;
    while(j<nums.length) {
        min = Math.min(min, nums[j]-nums[i]);
        i++;
        j++;
    }
    return min == Infinity ? 0: min;
};