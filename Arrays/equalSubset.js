//https://leetcode.com/problems/partition-equal-subset-sum/description/

var canPartition = function(nums) {
    let sum = nums.reduce((tally, el) => tally + el)
    if(sum % 2 != 0){ //if sum is odd then return false
        return false
    }
    let half = sum/2;
    return canPartitionRecur(nums, half, 0)
}

function  canPartitionRecur(nums, half, idx){
    if(half == 0){
        return true
    }
    if(idx == nums.length){
        return false
    }
    
    if(nums[idx] > half){
        return canPartitionRecur(nums, half, idx + 1)
    }
    
    return canPartitionRecur(nums, half, idx + 1) || canPartitionRecur(nums, half - nums[idx], idx + 1)  
}





















