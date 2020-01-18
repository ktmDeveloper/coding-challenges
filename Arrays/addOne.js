/*
Given a list a array [1,2,3,4] write a function that returns a new array [1,2,3,5] such that the combined value of array is increased by one
*/
/*
function change(arr){
	var str = arr.join('');
	var number = parseInt(str);
	var number = number +1;
	var strA = number.toString();
	var num1 = [];
	strA.split('').forEach(function(item){
		num1.push(parseInt(item))
	})
	console.log(num1)
	return num1;
}

console.log(change(arr))
console.log(arr)

*/

function add_one(arr) {
  let carry = 1;
  const result = new Array(arr.length);
  for (let i = arr.length - 1; i > -1; i--) {
    const total = arr[i] + carry;
    if (total == 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    result[i] = total % 10;
    if (i === 0 && arr[i] === 9 && carry == 1) {
      result.unshift(1);
    }
  }
  console.log(result);
}

const arr = [9, 9, 9, 9, 9];
const arr1 = [1, 2, 3, 4, 5];

console.log(arr);
add_one(arr);

console.log(arr1);
add_one(arr1);
