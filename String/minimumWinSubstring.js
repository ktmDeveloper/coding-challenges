// https://leetcode.com/problems/minimum-window-substring/

// Sliding window
var minWindow = function (s, t) {
  if (!s || !t) {
    return '';
  }
  const required = {};
  for (const char of t) {
    required[char] = (required[char] || 0) + 1;
  }

  const requiredLen = Object.keys(required).length;
  let left = 0; let right = 0; let
    formed = 0;
  const windowCounts = {};
  let ans = s + t;
  while (right < s.length) {
    const rightC = s.charAt(right);
    windowCounts[rightC] = (windowCounts[rightC] || 0) + 1;
    if (required[rightC] && required[rightC] === windowCounts[rightC]) {
      formed++;
    }

    while (left <= right && formed === requiredLen) {
      const leftC = s.charAt(left);
      if (ans.length > s.substring(left, right + 1).length) {
        ans = s.substring(left, right + 1);
      }
      windowCounts[leftC]--;
      if (required[leftC] && required[leftC] > windowCounts[leftC]) {
        formed--;
      }
      left++;
    }
    right++;
  }
  return ans === s + t ? '' : ans;
};

/*
// TIME LIMIT EXCEEDED
const minWindow = function (s, t) {
  const ll = s.length;
  const sl = t.length;
  if (sl > ll) {
    return '';
  }
  let min = '';
  let left = 0;
  let right = 0;

  while (left <= ll && right <= ll) {
    const sub = s.slice(left, right + 1);
    if (contains(sub, t) && sub.length >= sl) { // to take care of duplicate, check to see if the substring is at least as long
      if (sub.length <= min.length || min == '') {
        min = sub;
      }
      left++;
    } else {
      right++;
    }
  }
  return min;
};

// a function to check if 'large' string contains the 'small' string
function contains(large, small) {
  for (const letter of small) {
    if (large.indexOf(letter) < 0) {
      return false;
    }
    large = large.replace(letter, ''); // replace the letter with empty string so that it wont be counted twice
  }
  return true;
}
*/
