/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    return nums.reduce((curr, acc)=> curr+acc, 0)%k;
};