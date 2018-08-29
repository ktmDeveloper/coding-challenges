/*

Given an input array and another array that describes a new index for each element, mutate the input array so that each element ends up in their new index. Discuss the runtime of the algorithm and how you can be sure there won't be any infinite loops. 

*/
function mutate(input, mutate) {

    var visited = [];
    mutate.forEach(function (newIdx, i) {
        var tmp;
        visited.push(newIdx);
        if (visited.indexOf(i) < 0) {
            tmp = input[i];
            input[i] = input[newIdx];
            input[newIdx] = tmp;
        }
    });
}

let arr = [1, 2, 3, 4, 5]
let mut = [4, 3, 2, 1, 0]

mutate(arr, mut)

console.log(arr)