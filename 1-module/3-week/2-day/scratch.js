// Log every number from 1..N


/*
BC: n === 0
RC: n > 0
RS: n-1
*/

const logToN = (n) => {
    if (n === 0) return;

    console.log(n);

    logToN(n - 1);
};

// const logToN = (n) => {
//     if(n < 0) return 'invalid input';

//     //explicit recursive case
//     if(n > 0) {
//         console.log(n);
//         logToN(n-1);
//     };

//     return;
// };

// logToN(10);





// Sum to N: Sum all the numbers from 1..N

const sumToN = (n) => {
    if (n === 0) return 0;

    return n + sumToN(n - 1);
};

// console.log(sumToN(5)); // 10

// Log every element in an array

const logArray = (arr) => {
    if (arr.length) {
        console.log(arr[0]);
        logArray(arr.slice(1));
    } else {
        return
    };
};

// logArray([1,2,3,4,5]);

// Sum every element in an array

const sumArray = (arr) => !arr.length ? 0 : arr[0] + sumArray(arr.slice(1));


// console.log(sumArray([1,2,3,4,5]));

// Reverse the elements in an array

const revArr = (arr) => {
    if (!arr.length) return [];
    return [...revArr(arr.slice(1)), arr[0]];
};

// let f7 = []
// let f6 = [...f7, 5];
// let f5 = [...f6, 4];
// let f4 = [...f5, 3];
// let f3 = [...f4, 2];
// let f2 = [...f3, 1];
// let f1 = [...f2, 0];

// console.log(f1);

// console.log(revArr([1,2,3,4,5]));

// Reverse a string

const revString = (str) => {
    if(!str.length) return '';
    return revString(str.slice(1)) + str[0];
};

// console.log(revString('hello'))

// Make an array of a range of nums from start..stop

const rangeArr = (start, stop) => {
    if(start > stop) return [];
    return [start, ...rangeArr(start + 1, stop)];
};

console.log(rangeArr(1, 10));