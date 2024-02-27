/*
Given a sentence string, sentence, write a function that returns the most
common character within the sentence. 

If there are multiple characters that appear the most, 
    return the lexicographically smallest one 
    (e.g. if 'a' and 'b' are both the most common, 
    return 'a' because it is closest to the beginning of the alphabet).
 
Be sure to exclude spaces when countingcharacters.



I: string
O: string -> char that occurkey
keys most often in the input string


1. define a function, it should intake a sentence
2. make a variable that contains an empty object, we will use this obj to count characters
3. remove spaces from the input string
4. loop through all the chars in the string
    4.1. make a variable to hold the current char
    4.2 check if the char exists in the object
        4.2.1 if it does do something ???
        4.2.2 if it doesn't do something else ???

*/



const sentence = "What is the most common character in this sentence";

const mostCommonChar = sentence => {
    let noSpaces = sentence.split(' ').join('').toLowerCase();
    let counter = {};

    for (let char of noSpaces) {
        // let char = noSpaces[i];

        if (char in counter) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    };

    let biggestKey;
    let biggestVal = -Infinity;

    for (let char in counter) {
        let val = counter[char];

        if (biggestVal === val && biggestKey > char) {
            biggestKey = char;
            biggestVal = val;
        } else if (biggestVal < val) {
            biggestKey = char;
            biggestVal = val;

        }

    }

    return biggestKey;
}

console.log(mostCommonChar(sentence)); //  "t"