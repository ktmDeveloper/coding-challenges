// https://leetcode.com/problems/minimum-size-subarray-sum/description/

// the idea is to use two pointers, both begining at the array. keep adding the elements to the sum
// and once you reached something higher than expected sum 'S', start deleting from the front.
const minSubArrayLen = function (s, nums) {
  const n = nums.length;
  let ans = n + 1;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left); // +1 because difference of pointers is one short of actual distance as arrays begin with '0' index
      sum -= nums[left++];
    }
  }
  return (ans != n + 1) ? ans : 0;
};
