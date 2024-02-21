# M1-W1-D3

- Lecture Notes Repo
- Arrays
- Polya's framework
- Debugging
- Function Expressions
- Functions are first class citizens/objects
- Mutability
- Basic Terminal Usage and Local JS

## Lecture Notes Repo

I will post my lecture notes here every day, you are free to view them on github or clone the repo to keep it locally. 

https://github.com/WJVincent/Feb-2024

## Arrays

`Info to know`

- An array holds a `ORDERED LIST` of data
- We can call each item in an array an `element`
- Index starts at 0

`Syntax`

- An array is written with square brackets [] with each element separated by a comma

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]];
  ```

`Indexing`

- Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array[1]); // "cat"
  console.log(array[array.length - 1]); // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array.indexOf("dog")); // 0
  console.log(array.indexOf("elephant")); // -1
  ```

`Properties / Methods`

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"];

  console.log(array.length); // 3
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3];
  let array2 = [4, 5, 6];
  let array3 = [7];

  let array4 = array1.concat(array2, array3);

  console.log(array4); // [1, 2, 3, 4, 5, 6, 7]
  ```

`More Methods`

Other common methods you will use often: (Go look them up on MDN!)
- Array.push
- Array.pop
- Array.shift
- Array.unshift
- Array.slice
- Array.splice

## Polya's Framework

4 part process for problem solving!

1. Define the problem -  what is the prompt asking?
2. Make a plan
3. Execute the plan
4. Refactor


## Degbugging

- Read your error messages
- console.log values you want to test / blocks you want to make sure are running
- Manually test your code, don't just assume that it will work. Check your edge cases.
- Plan, plan, plan, and only then start coding. Think about what you need to code before just throwing some random javascript at the problem. Programming is 95% thinking, typing is just to bring those plans into reality.

## Practice Session 1 (50m)

- Problem Solving Heading
- Intermediate Functions Heading

## Practice Session 1 Walkthrough

- Debugging Practice
- Longest Name Debugging

## Function Expressions

1. variable assignment (name)
2. `function` keyword
3. parenthesis with the functions parameter(s)
4. code block
5. semicolon

```js
//declaration syntax
function greet(name) {
  console.log("Hello, " + name);
};

greet('william');

//expression syntax
let greet = function (name) {
    console.log("Hello, " + name);
};

greet('william');
```

## Functions are First Class Citizens / Objects

1. Can be stored in a variable.
2. Passed into a function as an argument.
3. Returned from a function.

## Mutability

1. Mutable types
   - Arrays
   - Objects (we will learn these later)
2. Immutable Types
   - Numbers
   - Strings
   - NaN
   - undefined
   - null

Notice that the mutable types contain data where the immutable types **are** data.

```js
let arr = [1, 2, 3];
arr[1] = 7;
console.log(arr); //[1,7,3]

let str = "abc";
str[1] = "x";
console.log(str); // 'abc';

//reassigning !== mutable
let str = "abc";
str += "d"; // str = str + 'd';
console.log(str); // 'abcd'
```

## Practice Session 2 (1h)

- Start on the Mutability Heading

## Basic Terminal Usage && Local JS

- Check the [terminal command cheatsheet](./terminal-cheatsheet.md)
- Demo the Intro to Node.js Project

## Practice Session 3 (1h)

- Terminal and Local JavaScript Heading

## Skills Check Setup Demo

## Skills Check Practice (40m)

- This should feel like a challenge
- Don't worry about getting 100% on the tests

## Practice Session 4 

- Until EOD time permitting
- Keep Working on Mutability Heading