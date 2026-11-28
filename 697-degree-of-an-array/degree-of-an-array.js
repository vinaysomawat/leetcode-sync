/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const first = new Map(), count = new Map();
  let degree = 0, best = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (!first.has(nums[i])) first.set(nums[i], i);
    const c = (count.get(nums[i]) ?? 0) + 1;
    count.set(nums[i], c);
        if (c > degree) { degree = c; best = i - first
      .get(nums[i]) + 1; }
    else if (c === degree) {
      best = Math.min(best, i - first.get(nums[i]) + 1);
    }
  }
  return best;
};