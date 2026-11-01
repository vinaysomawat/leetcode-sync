/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Number.MAX_VALUE;
    nums.forEach(item => {
        min = Math.min(min, item);
    });
    let res = 0;
    nums.forEach(item => {
        res +=item-min;
    })
    return res;
};