/* 
You are given a license key represented as a string S that consists of only alphanumeric characters and dashes. 
The string is separated into n + 1 groups by n dashes. 
You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase. */

let output = []
let s = "5F3Z-2e-9-w" 
let k = 4

let count = 0
let newS = s.replaceAll('-','')

for(let i = newS.length-1;i>-1;i--){
    if(count<k){
        output.unshift(newS[i].toUpperCase());
        count++;
    
        if(count === k && i!==0){
            output.unshift('-');
            count = 0;
        }
    }
}


console.log(output.join(''))