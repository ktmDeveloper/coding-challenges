/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/
/* bad code !
function 3Sum(arr){
	let sums = []
	for(let i = 0; i<arr.length; i++){
		for(let j = 0; j<arr.length; j++){
			for(let k = 0; k<arr.length; k++){
					if(arr[i] + arr[j] + arr[k] ==0){
						sums.push([arr[i],arr[j],arr[k]])
					}
			}
		}
	}
	return sums;
}
let nums = [-1, 0, 1, 2, -1, -4];
console.log(3Sum(nums))
*/
function threeSum(arr) {
	let results = [];
	arr.sort(function(a, b) {
		return a - b;
	});
	for (let i = 0; i < arr.length - 3; i++) {
		if (i == 0 || arr[i] > arr[i - 1]) {
			//to avoid duplicates
			let start = i + 1;
			let end = arr.length - 1;
			while (start < end) {
				//to go for all possibilites
				if (arr[i] + arr[start] + arr[end] == 0) {
					results.push([arr[i], arr[start], arr[end]]);
				}
				if (arr[i] + arr[start] + arr[end] < 0) {
					let currentStart = start; //we dont want to repeat the number
					while (arr[start] == arr[currentStart] && start < end) {
						start++;
					}
				} else {
					let currentEnd = end;
					while (arr[end] == arr[currentEnd] && start < end) {
						end--;
					}
				}
			}
		}
	}
	return results;
}
let nums = [1, 2, -2, -1, 0];
console.log(threeSum(nums));
