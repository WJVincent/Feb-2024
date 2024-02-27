/*
Given a sequence, seq, 
write a function that returns true 

if the sentence can be rearranged into a palindrome and false if not. 

Ignore whitespace and assume all characters are lowercase.



Note: A palindrome is a sequence that reads the same backwards as is does
forward.
*/

const sequence = "pop";
const sequence1 = "kayak";
const sequence2 = "yo banana boy";
const sequence3 = "this is the truth";
const sequence4 = "abab";

const isPalindrome = string => {
    let noSpaces = string.split(' ').join('').toLowerCase();
    let counter = {};

    for(let char of noSpaces){
        // let char = noSpaces[i];
        
        if(char in counter){
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    };

    let count = 0;

    for(let char in counter){
        let val = counter[char];

        if(val % 2 !== 0){
            count++;
        }
    }

    return count <= 1;
}

console.log(isPalindrome(sequence));             // true;
console.log(isPalindrome(sequence1));            // true
console.log(isPalindrome(sequence2));            // true
console.log(isPalindrome(sequence3));            // false
console.log(isPalindrome(sequence4));            // true
// because "abab" can be rearranged into a palindrome, "abba"