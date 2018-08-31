
//https://leetcode.com/problems/edit-distance/description/
//https://www.youtube.com/watch?v=Thv3TfsZVpw
var minDistance = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let dpA = new Array(m + 1)
    dpA.fill([])
    let dp = dpA.map((el) => {
        return el.concat(new Array(n + 1))
    })
    /*
    let dp = new Array(m + 1)
    let fill = new Array(n + 1)
    dp.fill(fill)
    */
    // can't use the second method to create dp array because Arrays are passed reference and making change to one row of array in dp will change all rows/
    // just try using the above method and do console.log(dp) in the loop below.
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0) {
                dp[0][j] = j
            } else if (j == 0) {
                dp[i][0] = i
            } else if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1])
            }

        }
    }
    return dp[word1.length][word2.length]

};