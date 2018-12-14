//https://leetcode.com/problems/minimum-window-substring/

var minWindow = function(s, t) {
    let ll = s.length
    let sl = t.length
    if(sl > ll){
        return ''
    }
    let min = ''
    let left = 0
    let right = 0
    
    while(left <= ll && right <= ll){
       let sub = s.slice(left, right + 1) 
       if(contains(sub, t) && sub.length >= sl){ // to take care of duplicate, check to see if the substring is at least as long
           if(sub.length <= min.length || min == ''){
               min = sub
           }
           left++
       } else {
           right++
       }
        
    }
    return min
}

// a function to check if 'large' string contains the 'small' string
function contains(large, small){ 
    for(let letter of small){
        if(large.indexOf(letter) < 0){
            return false
        } else {
           large = large.replace(letter, '') //replace the letter with empty string so that it wont be counted twice
        }
    }
    return true
}

