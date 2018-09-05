//https://leetcode.com/submissions/detail/173552133/

/* linear search : O(n)
var searchRange = function(nums, target) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            res.push(i);
            let currI = i;

            while (nums[currI] == target) { //increment i untill u see different i
                currI++
            }
            res.push(currI - 1);
            break;
        }
    }
    if (res.length) {
        return res
    } else {
        return [-1, -1]
    }
};
*/


//Binary search, O(logN)
var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let res = []
    while(start <= end){
        let mid = start + Math.round( (end - start) / 2) 
        if(nums[mid] == target){
            let begin = mid;
            let end = mid;
            
            while(nums[begin] == target){ //decrement i untill u see different i
                begin--
            }
            while(nums[end] == target){ //increment i untill u see different i
                end++
            }
            
            res.push(begin + 1) //starting index will be begin + 1
            res.push(end - 1) //ending index will be end - 1
            break; //break out of the loop as soon as we are done
            
        } else if(nums[mid] > target){
             end = mid - 1
        } else if(nums[mid] < target) {
             start = mid + 1
        }
    }
    
    if (res.length) {
        return res
    } else {
        return [-1, -1]
    }return res;
}

