// https://leetcode.com/problems/generate-parentheses/description/


/* Recursion method
var generateParenthesis = function(n) {
    if(n == 1){
        return ['()']
    }
    let set = new Set();
    let res = generateParenthesis( n - 1);

    for(let i = 0; i < res.length; i++){
       set.add('()' + res[i]);
        for(let j = 0; j < res[i].length; j++){
           if(res[i][j] == '('){
               set.add(res[i].slice(0, j+1) + '()' + res[i].slice(j+1))
           }

        }
    }

    return [...set]
};
*/

const generateParenthesis = function (n) {
  const map = new Map();
  const forOne = new Set();
  forOne.add('()'); // no syntax for set literal so had to create new variable
  map.set(1, forOne);

  for (let i = 2; i <= n; i++) { // iterate through 2 to n and build n based on n - 1
    const prev = [...map.get(i - 1)];
    const res = new Set();
    for (let j = 0; j < prev.length; j++) { // iterate through all items in array
      res.add(`()${prev[j]}`);
      for (let k = 0; k < prev[j].length; k++) { // check if each item contians opening parenthesis, if it does then  add '()' and push it to sol set
        if (prev[j][k] == '(') {
          res.add(`${prev[j].slice(0, k + 1)}()${prev[j].slice(k + 1)}`);
        }
      }
    }
    map.set(i, res);
  }

  return [...map.get(n)];
};
