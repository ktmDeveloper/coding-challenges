function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const res = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }

  while (left.length) {
    res.push(left.shift());
  }

  while (right.length) {
    res.push(right.shift());
  }
  return res;
}

console.log(mergeSort([10, 9, 4, 5, 3, 1, 2, 3, 4, 5, 6, 7]));
