// https://leetcode.com/problems/longest-string-chain/

var longestStrChain = function (words) {
  const dp = {};
  let res = 0;
  words.sort((a, b) => a.length - b.length);
  for (const word of words) {
    let level = 1;
    for (let i = 0; i < word.length; i++) {
      const pre = word.slice(0, i) + word.slice(i + 1);

      // if the 'pre' exists in dp, then increase the level and exit the loop
      if (dp[pre]) {
        level = dp[pre] + 1;
        break;
      }
    }
    dp[word] = level;
    res = Math.max(res, level);
  }
  return res;
};
