/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums);
    let ans = 0;
    nums.forEach(item => {
        ans += max-item;
    })
    return ans;
};