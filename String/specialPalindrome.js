/*
https://www.hackerrank.com/challenges/special-palindrome-again/problem

A string is said to be a special palindromic string if either of two conditions is met:

All of the characters are the same, e.g. aaa.
All characters except the middle one are the same, e.g. aadaa.
*/

// In this first solution, find all substring, check if it is special Palindrome, and update the count if it is.
// Time Limit exceeds for larger input, as O(n) = n^3
function substrCount(n, s) {
  let res = n;
  for (let i = 0; i < n; i++) {
    for (let j = i + 2; j <= n; j++) {
      const substr = s.slice(i, j);
      if (isSpecialPalin(substr)) {
        res++;
      }
    }
  }
  return res;
}

function isSpecialPalin(str) {
  let left = 0;
  const prev = str[0];
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right] || prev != str[left]) { // if prev is not equal to str[left] then not a special palindrome
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// This second solution is optimal one.
function substrCountOptimal(n, s) {
  const l = []; // in l, count the continous apperance of the character and add the char and its count after different char is encountered
  let count = 1;
  let ch = s[0];
  for (let i = 1; i <= n; i++) {
    if (ch == s[i]) count++;
    else {
      l.push([ch, count]);
      count = 1;
      ch = s[i];
    }
  }
  let ans = 0;
  for (const i of l) {
    ans += (i[1] * (i[1] + 1)) / 2; // total number of substring for substring of same characters if given by (K * (K + 1)) / 2
  }

  for (let i = 1; i < l.length - 1; i++) { // for each item in l, except the first and last one, check to see if it is a single char, if it is and the left and right side is the same char then take the minimun of left and right
    if (l[i - 1][0] == l[i + 1][0] && l[i][1] == 1) {
      ans += Math.min(l[i - 1][1], l[i + 1][1]);
    }
  }

  return ans;
}
