function computeToPlacs(x, y, n) {
  if (x === 0) {
    return '0'.repeat(n);
  }

  if (y === 0) {
    return Infinity;
  }

  let res = '';
  let d = Math.floor(x / y);
  for (let i = 0; i <= n; i++) {
    res += d;
    x -= (y * d);
    x *= 10;
    d = Math.floor(x / y);
    if (i === 0) {
      res += '.';
    }
  }
  console.log(res);
}

console.log(computeToPlacs(798, 412, 109));
console.log(798 / 412);
