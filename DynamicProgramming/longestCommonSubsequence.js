/*
Longest Common Subsequence(Dynamic Programming)
*/
/* recursive */
function LCSRecur(strA, strB) {
  return LCSCounterRecur(strA, strB, strA.length, strB.length);
}

function LCSCounterRecur(strA, strB, n, m) {
  if (n === 0 || m === 0) {
    return 0;
  } if (strA[n - 1] == strB[m - 1]) {
    return 1 + LCSCounterRecur(strA, strB, n - 1, m - 1);
  } if (strA[n - 1] != strB[m - 1]) {
    return Math.max(LCSCounterRecur(strA, strB, n - 1, m), LCSCounterRecur(strA, strB, n, m - 1));
  }
}

console.log(LCSRecur('ABCDEFZXLOP', 'ABCDEFQWER')); // 5.000000001018634 ms


/* memonization */

function LCS(strA, strB) {
  const memo = new Map();
  return LCSCounter(strA, strB, strA.length, strB.length, memo);
}

function LCSCounter(strA, strB, n, m, memo) {
  const key = `${n.toString()}:${m.toString()}`;
  if (memo.has(key)) {
    return memo.get(key);
  }
  if (n === 0 || m === 0) {
    return 0;
  } if (strA[n - 1] == strB[m - 1]) {
    return 1 + LCSCounter(strA, strB, n - 1, m - 1, memo);
  } if (strA[n - 1] != strB[m - 1]) {
    const temp1 = LCSCounter(strA, strB, n - 1, m, memo);
    const temp2 = LCSCounter(strA, strB, n, m - 1, memo);
    const max = Math.max(temp1, temp2);
    memo.set(key, max);
    return memo.get(key);
  }
}

console.log(LCS('ABCDEFZXLOP', 'ABCDEFQWER')); // 0.6000000030326191 ms

/* to calculate time

var t0 = performance.now();
doSomething();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")

*/
