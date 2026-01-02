/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const freq = new Map();
    const target = nums.length / 2;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        if (freq.get(num) === target) return num;
    }
};
