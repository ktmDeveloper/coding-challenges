
/*
Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.
Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.
https://leetcode.com/problems/delete-operation-for-two-strings
*/

var minDistance = function(a, b) {
    let dp = new Map()
    return a.length + b.length - 2 * lcsrecur(a, b, a.length, b.length, dp)
}

function lcsrecur(a, b, n, m, dp) {
    if (m == 0 || n == 0) {
        return 0
    }
    let key = `${n}:${m}`
    if (dp.has(key)) {
        return dp.get(key)
    }
    if (a[n - 1] == b[m - 1]) {
        return 1 + lcsrecur(a, b, n - 1, m - 1, dp)
    } else {
        let temp1 = lcsrecur(a, b, n - 1, m, dp)
        let temp2 = lcsrecur(a, b, n, m - 1, dp)
        dp.set(key, Math.max(temp1, temp2))
        return dp.get(key)
    }
}