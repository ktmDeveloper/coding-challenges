// https://leetcode.com/problems/word-break/

var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1);
  dp.fill(false);
  // creating an empty string is always true
  dp[0] = true;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      const subStr = s.substring(j, i);
      // if dp[j] exists and rest of the string exists in dict
      // then mark dp[i] as true too
      if (dp[j] && wordDict.includes(subStr)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
};
