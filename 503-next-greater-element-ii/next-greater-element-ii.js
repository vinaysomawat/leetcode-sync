/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    let result = Array.from({length: nums.length}).fill(-1);

    for(let i=0;i<2*nums.length-1;i++) {
        let index = i%nums.length;

        while(stack.length && nums[stack[stack.length-1]]<nums[index]) {
            let prevIndex = stack.pop();
            result[prevIndex] = nums[index];
        }

        if(i<nums.length) {
            stack.push(i);
        }
    }


    return result;
};