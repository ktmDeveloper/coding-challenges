// https://leetcode.com/problems/minimum-window-substring/solution/
const minWindow = function (s, t) {
  if (!s.length || !t.length) return '';

  const map = new Map();
  for (const char of t) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const required = map.size;
  let left = 0;
  let right = 0;
  // formed is used to keep track of how many unique characters in t
  // are present in the current window in its desired frequency.
  // e.g. if t is "AABC" then the window must have two A's, one B and one C.
  // Thus formed would be = 3 when all these conditions are met.
  let formed = 0;

  const windowCounts = new Map();
  let ans = s + t; // just to pass some test case where s='a' and t='a'

  while (right < s.length) {
    let c = s.charAt(right);
    windowCounts.set(c, (windowCounts.get(c) || 0) + 1);
    if (map.has(c) && windowCounts.get(c) === map.get(c)) {
      formed++;
    }

    // Try and contract the window till the point where it ceases to be 'desirable'.
    while (left <= right && formed === required) {
      c = s.charAt(left);
      if (ans.length > s.substring(left, right + 1).length) {
        ans = s.substring(left, right + 1);
      }

      // The character at the position pointed by the
      // `Left` pointer is no longer a part of the window.
      windowCounts.set(c, windowCounts.get(c) - 1);
      if (map.has(c) && windowCounts.get(c) < map.get(c)) {
        formed--;
      }
      // Move the left pointer ahead, this would help to look for a new window.

      left++;
    }

    // Keep expanding the window once we are done contracting.
    right++;
  }
  return ans === s + t ? '' : ans;
};
