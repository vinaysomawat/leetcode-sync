/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let stack = [];
    const n = nums.length;
    const result = new Array(n).fill(-1);

    for(let i=0;i<2*nums.length-1;i++) {
        let index = i%n;

        while(stack.length && nums[stack[stack.length-1]]<nums[index]) {
            let prevIndex = stack.pop();
            result[prevIndex] = nums[index];
        }

        if(i<n) {
            stack.push(i);
        }
    }


    return result;
};