/**
 * https://leetcode.com/problems/permutation-in-string/solution/
 */

// sliding window
var checkInclusion = function (s1, s2) {
  const map1 = {};
  const map2 = {};
  // populate map with characters of s1
  for (const char of s1) {
    map1[char] = (map1[char] || 0) + 1;
  }

  // populate map with characters of s2 upto the length of s2
  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    map2[char] = (map2[char] || 0) + 1;
  }
  // quick check to see if the maps are equivalent already
  if (isEquivalent(map1, map2)) {
    return true;
  }

  // we want a window of length of s1,
  // and we move the window forward until we exhaust s2
  let follower = 0;
  let leader = s1.length;
  while (leader < s2.length) {
    const charLeader = s2[leader];
    const charFollower = s2[follower];
    map2[charLeader] = (map2[charLeader] || 0) + 1;
    map2[charFollower] = map2[charFollower]--;
    // if the freq. of char is 0, delete it
    if (map2[charFollower] === 0) {
      delete map2[charFollower];
    }
    if (isEquivalent(map1, map2)) {
      return true;
    }
    leader++;
    follower++;
  }
  return false;
};

function isEquivalent(m1, m2) {
  if (Object.keys(m1).length !== Object.keys(m2).length) return false;
  for (const key of Object.keys(m1)) {
    if (m1[key] !== m2[key]) return false;
  }
  return true;
}
