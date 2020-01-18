const arry = [1, 2, 3, 4, 5, 6, 7, 8];

function bs(arry, item) {
  let left = 0;
  let right = arry.length - 1;

  while (left <= right) {
    const mid = left + Math.round((right - left) / 2);
    console.log(mid);
    if (arry[mid] == item) {
      return true;
    } if (arry[mid] > item) {
      right = mid - 1;
    } else if (arry[mid] < item) {
      left = mid + 1;
    }
  }

  return false;
}

console.log(bs(arry, 7));
