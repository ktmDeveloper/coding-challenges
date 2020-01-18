/* https://youtu.be/2bkfA2fHVwg */
/* for my example, I assumed the first item in our combination to be the police Dept */

function optimizedCode() {
  const res = [];
  const comb = [];

  codeRecur(res, comb, 12, 1);
  return res;
}

function codeRecur(res, comb, target, idx) {
  if (target === 0 && comb.length == 3) {
    res.push(comb.slice());
    comb = [];
    return;
  }

  for (let i = idx; i <= 7; i++) {
    if (comb.length === 0 && i % 2 !== 0) {
      continue;
    }
    comb.push(i);
    codeRecur(res, comb, target - i, idx + 1);
    comb.pop();
  }
}

console.log(optimizedCode());


/* generate all the possible permutation and include the ones that matches your parameter */
function hardCode() {
  const res = [];

  for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 7; j++) {
      for (let k = 1; k <= 7; k++) {
        if (i != j && j != k && i != k
              && (i + j + k == 12)
              && (i % 2 == 0)) {
          res.push([i, j, k]);
        }
      }
    }
  }
  return res;
}

console.log(hardCode());
