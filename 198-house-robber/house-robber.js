/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let dp = new Array(nums.length +1).fill(-1);

    function maxLoot(n) {
        if(n<0) return 0;

        if(n==0) return nums[0];

        if(dp[n]!=-1) return dp[n];

        let pick = nums[n] + maxLoot(n-2);
        let notPicked = maxLoot(n-1);

        dp[n] = Math.max(pick, notPicked);
        return dp[n];
    }

    return maxLoot(nums.length-1);
};