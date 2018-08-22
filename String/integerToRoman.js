/*
https://leetcode.com/problems/integer-to-roman/description/
*/

/* Cheesy solution
var intToRoman = function(num) {
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    
    let res = ""
    if(M[Math.floor(num/1000)]){
      res += M[Math.floor(num/1000)]
    }
    if(C[Math.floor((num%1000)/100)]){
      res += C[Math.floor((num%1000)/100)]
    }
    if(X[Math.floor((num%100)/10)]){
      res += X[Math.floor((num%100)/10)]
    }
    if(I[Math.floor(num%10)]){
      res += I[Math.floor(num%10)]
    }
    return res
};
*/

