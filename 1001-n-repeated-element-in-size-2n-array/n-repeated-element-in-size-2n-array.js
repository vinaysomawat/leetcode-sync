/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let obj = {};
    for(let item of nums) {
        obj[item] = obj[item] ? obj[item]+1 : 1;
        if(obj[item] == nums.length/2) return item;
    }
};