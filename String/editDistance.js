
// https://leetcode.com/problems/edit-distance/description/
// https://www.youtube.com/watch?v=Thv3TfsZVpw
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dpA = new Array(m + 1);
  dpA.fill([]);
  const dp = dpA.map((el) => el.concat(new Array(n + 1)));
  /*
    let dp = new Array(m + 1)
    let fill = new Array(n + 1)
    dp.fill(fill)
    */
  // can't uGiven two words word1 and word2, find the minimum number of operations required to convert word1 to word2.se the second method to create dp array because Arrays are passed reference and making change to one row of array in dp will change all rows/
  // just try using the above method and do console.log(dp) in the loop below.
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0) {
        dp[0][j] = j;
      } else if (j == 0) {
        dp[i][0] = i;
      } else if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], // remove
          dp[i - 1][j - 1], // replace
          dp[i][j - 1]); // insert
      }
    }
  }
  return dp[word1.length][word2.length];
};

// https://www.youtube.com/watch?v=Thv3TfsZVpw
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1);
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0) {
        dp[0][j] = j;
      } else if (j == 0) {
        dp[i][0] = i;
      } else if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], // remove
          dp[i - 1][j - 1], // replace
          dp[i][j - 1]); // insert
      }
    }
  }
  return dp[word1.length][word2.length];
};
