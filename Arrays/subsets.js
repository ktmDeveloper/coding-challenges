//https://leetcode.com/problems/subsets
/*
Iterative
Using [1, 2, 3] as an example, the iterative process is like:

Initially: [[]]
Adding the first number to all the existed subsets: [[], [1]];
Adding the second number to all the existed subsets: [[], [1], [2], [1, 2]];
Adding the third number to all the existed subsets: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].
*/
function subsets(arr) {
    let sets = [
        []
    ];
    for (let i = 0; i < arr.length; i++) {
        sets.forEach((el) => {
            let newItem = el.concat(arr[i]); //for each item in sets, add the current item and push it to set
            sets.push(newItem)
        })
    }
    return sets;
}


/* Use recursion to print all the subsets */

function subsets(arr) {
    let sets = [];
    let res = []
    recur(arr, sets, 0, res);
    return res;
}

function recur(arr, sets, idx, res) {

    res.push(sets.slice()); //use .slice() to push a copy, not a reference.
    for (let i = idx; i < arr.length; i++) {
        sets.push(arr[i]);
        recur(arr, sets, i + 1, res);
        sets.pop();
    }
}


console.log(susubsetsRecurbsets([1, 2, ]))