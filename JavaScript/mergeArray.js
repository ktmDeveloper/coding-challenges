/*
In JavaScript, write a function that takes an array as input
that can contain both ints and more arrays
(which can also contain an array or int) and return the flattened array.
ex. [1, [2, [ [3, 4], 5], 6]] =&gt; [1, 2, 3, 4, 5, 6]

*/
/*
This is wrong, leaves the last part of array
function mergedArray(arrays){
	let merged = [];
		function recursionMerge(arrays){
			for(let i=0; i<arrays.length; i++){
				let item = arrays[i];
				if(Array.isArray(item)){
				return recursionMerge(item)
			} else{
				//break;
					merged.push(item);
			}
			}
		}
	recursionMerge(arrays);
	return merged
}
*/

/*

Correct Version
var flatten = function(arr, resultArr) {
  var result = resultArr || [];
  for(var i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      flatten(arr[i], result);
    } else {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(flatten([1, [2, [ [3, 4], 5], 6]]))

*/

// Easier Version
const ary = [1, [2, [
  [3, 4], 5,
], 6]];

console.log(ary.join());

const ary1 = ary.join().split(',');

ary2 = ary1.map((el) => parseInt(el));
console.log(ary1);
console.log();
console.log(ary2);
