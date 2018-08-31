function subset(arr, k){
    return subsetRecur(arr, k, 0)
  }
  
  function subsetRecur(arr, k, i){
    if( i == arr.length){ // if i is arr.length, we have reached the end of array. return false
      return false
    }
    
    if(k == 0){ // if we reach sum is zero then return true
      return true
    }
    
    if(arr[i] > k){
      return subsetRecur(arr, k, i+1) //ignore the case where arr[i] is greater than k
    }
    
    return subsetRecur(arr, k - arr[i], i + 1) || subsetRecur(arr, k , i + 1) //consider both case, include and exclude the item
    
    
  }
  
  console.log(subset([3, 34, 4, 12, 5, 2], 9));