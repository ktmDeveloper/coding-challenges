// https://www.youtube.com/watch?v=fV-TF4OvZpk&t=261s
function nonDecrease(nums) {
  const dp = new Array(nums.length);
  dp.fill(1);
  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] >= nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        longest = Math.max(dp[i], longest);
      }
    }
  }
  return longest;
}
