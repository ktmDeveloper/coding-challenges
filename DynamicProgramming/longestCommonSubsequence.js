/*
Longest Common Subsequence(Dynamic Programming)
*/
/* recursive 
function LCS(strA, strB){
	return LCSCounter(strA, strB, strA.length, strB.length)
}

function LCSCounter(strA, strB, n, m){
	if(n === 0 || m === 0){
		return 0;
	} else if (strA[n-1] == strB[m-1]){
		return 1 + LCSCounter(strA, strB, n-1, m-1)
	} else if (strA[n-1] != strB[m-1]){
		return Math.max(LCSCounter(strA, strB, n-1, m),
									 LCSCounter(strA, strB, n, m-1))
	}
}

console.log(LCS('ABCDEFZXLOP', 'ABCDEFQWER')) //5.000000001018634 ms

*/

/* memonization */

function LCS(strA, strB){
	let memo = new Map();
	return LCSCounter(strA, strB, strA.length, strB.length,memo)
}

function LCSCounter(strA, strB, n, m, memo){
	let key = n.toString() + ':' + m.toString();
	if(memo.has(key)){
		return memo.get(key)
	}
	if(n === 0 || m === 0){
		return 0;
	} else if (strA[n-1] == strB[m-1]){
		return 1 + LCSCounter(strA, strB, n-1, m-1, memo)
	} else if (strA[n-1] != strB[m-1]){
		let temp1 = LCSCounter(strA, strB, n-1, m, memo);
		let temp2 = LCSCounter(strA, strB, n, m-1, memo)
		let max = Math.max(temp1, temp2)
		memo.set(key, max)
		return memo.get(key)
	}
}

console.log(LCS('ABCDEFZXLOP', 'ABCDEFQWER')) //0.6000000030326191 ms

/* to calculate time 

var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

*/