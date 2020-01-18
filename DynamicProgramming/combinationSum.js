// combination sum
// https://youtu.be/irFtGMLbf-s

function combSum(candidates, target) {
  const results = [];

  candidates.sort((a, b) => a - b);

  const combination = [];

  dfs(results, combination, candidates, target, 0);

  return results;
}

function dfs(results, combination, candidates, target, startI) {
  if (target == 0) {
    results.push(combination.slice());
  }

  for (let i = startI; i < candidates.length; i++) {
    if (candidates[i] > target) {
      break;
    }

    combination.push(candidates[i]);
    dfs(results, combination, candidates, target - candidates[i], i); // 'i' is not incresed as we can use the same amount infinte times
    combination.pop(); // need to pop out last item, to get a new empty combination for new combination
  }
}


console.log(combSum([2, 3, 6, 7], 7));


const combinationSum = (candidates, target) => {
  candidates = candidates.sort((a, b) => a - b);
  const res = [];
  recur(candidates, target, 0, [], res);
  return res;
};


function recur(candidates, target, idx, list, res) {
  if (target == 0) {
    res.push(list.slice());
    return;
  }

  for (let i = idx; i < candidates.length; i++) {
    if (candidates[i] > target) {
      break;
    }
    list.push(candidates[i]);
    recur(candidates, target - candidates[i], i, list, res);
    list.pop();
  }
}
