/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    nums.forEach(item => {
        if(item%3!=0) count++;
    });
    return count;
};