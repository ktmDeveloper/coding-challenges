/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest sum = 6.
Example 2:

Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
*/

function maxProduct(A) {
  if (A.length == 0) {
    return 0;
  }

  let maxherepre = A[0];
  let minherepre = A[0];
  let maxsofar = A[0];
  let maxhere; let
    minhere;

  for (let i = 1; i < A.length; i++) {
    maxhere = Math.max(Math.max(maxherepre * A[i], minherepre * A[i]), A[i]);
    minhere = Math.min(Math.min(maxherepre * A[i], minherepre * A[i]), A[i]);
    maxsofar = Math.max(maxhere, maxsofar);
    maxherepre = maxhere;
    minherepre = minhere;
  }
  return maxsofar;
}

console.log(maxProduct([2, 3, -5, 3, 5, 1, 0, 10, 20, 0]));
