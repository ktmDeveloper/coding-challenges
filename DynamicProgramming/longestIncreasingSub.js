// https://leetcode.com/problems/longest-increasing-subsequence/description/
/* Recursion Method (Brute Force)

var lengthOfLIS = function(nums) {

    return recur(nums, Number.MIN_SAFE_INTEGER, 0)

  };

  function recur(nums, prev, n){
    if(n == nums.length){
      return 0
    }

    let taken = 0;
    if(nums[n] > prev){
      taken =  1 + recur(nums, nums[n], n+1)
    }
    let notTaken = recur(nums, prev, n+1)


    return Math.max(taken,notTaken)

  }

  */
/* Dynamic Programming */
function lengthOfLIS(nums) {
  if (nums.length == 0) {
    return 0;
  }

  const dp = new Array(nums.length);
  dp[0] = 1;

  let max = dp[0];

  for (let i = 1; i < dp.length; i++) {
    let maxval = 0;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxval = Math.max(maxval, dp[j]);
      }
    }
    dp[i] = maxval + 1;
    max = Math.max(max, dp[i]);
  }

  return max;
}

/* Easy to understand */
function lengthOfLIS2(nums) {
  if (!nums || nums.length === 0) {
    return 0;
  }
  const dp = new Array(nums.length);
  dp.fill(1);
  let longest = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        longest = Math.max(dp[i], longest);
      }
    }
  }
  return longest;
}
