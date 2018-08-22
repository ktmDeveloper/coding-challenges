function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length);

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let res = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift())
        } else {
            res.push(right.shift())
        }
    }

    while (left.length) {
        res.push(left.shift())
    }

    while (right.length) {
        res.push(right.shift())
    }
    return res
}

console.log(mergeSort([10, 9, 4, 5, 3, 1, 2, 3, 4, 5, 6, 7]))