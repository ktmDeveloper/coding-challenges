// give an idex n, write a function that prints out integer digit in spiral form
// spiral(3) => [[1,2,3],[8,9,4],[7,6,5]]

function buildSpiral(n){
    var res = new Array(n);
    
    for(let i = 0; i < n; i++){
      res[i] = new Array(n)
    }
    
    let rowBegin = 0;
    let rowEnd = n - 1;
    let colBegin = 0;
    let colEnd = n - 1;
    let val = 1
    
    while(rowBegin <= rowEnd && colBegin <= colEnd){
      for(let i = colBegin; i <= colEnd; i++){
        res[rowBegin][i] = val;
        val++
      }
      rowBegin++;
      
      for(let i = rowBegin; i <= rowEnd; i++){
        res[i][colEnd] = val;
        val++
      }
      colEnd--;
      
      for(let i = colEnd; i >= colBegin; i--){
        res[rowEnd][i] = val
        val++
      }
      rowEnd--;
  
      for(let i = rowEnd; i >= rowBegin; i--){
        res[i][colBegin] = val
        val++
      }
      colBegin++;
  
    }
    
    console.log(res)
  }
  
  console.log(buildSpiral(9))