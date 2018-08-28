//combination sum
//https://youtu.be/irFtGMLbf-s

function combSum(candidates, target){
    let results = [];
    
    candidates.sort((a,b) => a - b); 
    
    let combination =[];
    
    dfs(results, combination, candidates, target, 0);
    
    return results;
  }
  
  function dfs(results, combination, candidates, target , startI){
    if(target == 0){
      results.push(combination.slice())
    }
    
    for(let i = startI; i < candidates.length; i++){
      if(candidates[i] > target){
        break;
      }
      
      combination.push(candidates[i])
      dfs(results, combination, candidates, target - candidates[i], i); // 'i' is not incresed as we can use the same amount infinte times
      combination.pop(); // need to pop out last item, to get a new empty combination for new combination
    }
    
  }
  
  
  console.log(combSum([2,3,6,7], 7))