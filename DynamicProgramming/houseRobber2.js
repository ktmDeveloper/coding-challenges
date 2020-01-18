/**
 https://leetcode.com/problems/house-robber-ii/submissions/
 */
const rob = function (nums) {
  if (nums.length == 0) {
    return 0;
  }
  if (nums.length <= 2) {
    return Math.max(...nums);
  }
  /* this problem is like house robber 1, but this time we take maximum of robbing first home and sparing first home */
  const robFirst = houseRob(nums, 0, nums.length - 1);
  const spareFirst = houseRob(nums, 1, nums.length);

  return Math.max(robFirst, spareFirst);
};

function houseRob(nums, start, end) {
  let odd = 0;
  let even = 0;
  for (let i = start; i < end; i++) {
    if (i % 2 == 0) {
      even = Math.max(even + nums[i], odd);
    } else {
      odd = Math.max(odd + nums[i], even);
    }
  }

  return Math.max(odd, even);
}
