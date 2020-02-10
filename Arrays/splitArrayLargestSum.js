// https://leetcode.com/problems/split-array-largest-sum/solution/

// binary search
var splitArray = function (nums, m) {
/*
Set the search range between min=(largest single value) and max=(sum of all values).
The min starts there because we're looking for the sum of the largest group in the final set of groups.
And no matter what groups you create, the largest value has to be in it, so the largest group can't be
smaller than that. (This assumes no negative numbers.)
*/
  let left = Math.max(...nums);
  let right = nums.reduce((acc, curr) => acc + curr);

  while (left < right) {
    /*
    Calculate the midpoint between min and max. This midpoint is the group size we're going to try out to see how well it performs.
    */
    const mid = Math.floor((left + right) / 2);

    /*
    Split the nums list into groups such that no group has a value larger than the chosen midpoint.
    Note that we may end up with too many or too few groups. That's fine.
    */
    const pieces = split(nums, mid);
    if (pieces > m) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

/*
Compare the number of groups we created against the target m.
If we created too many groups, we know the final answer must be between mid+1 and max.
That's because we need fewer groups and the way to achieve fewer groups
is to increase the allowed maximum sum in each group.
*/
const split = (nums, largestSum) => {
  let pieces = 1;
  let tmpSum = 0;
  for (const num of nums) {
    if (tmpSum + num > largestSum) {
      tmpSum = num;
      pieces++;
    } else {
      tmpSum += num;
    }
  }
  return pieces;
};
