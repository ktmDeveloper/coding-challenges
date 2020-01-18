// https://leetcode.com/problems/minimum-window-substring/

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
