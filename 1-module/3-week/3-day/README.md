# M1-W3-D3

- IIFE
- Function Hoisting
- Falsey Values


## Immediately Invoked Function Expressions

- Written and run once
- No reference created to be run again
- Useful for niche one off situations
- Will break JS automatic semicolon insertion, so make sure you put them in yourself

```js
(() => {
    console.log('I am immediately Invoked');
})()

((param) => {
    console.log(param);
})(5)
```

## Function Hoisting

- We have already seen how var uses hoisting to pull the declaration of the variable to the top of the file. 
- Function declarations do a similar thing, where all the function definitions are hoisted to the top of the file.
- Function expressions (including arrow functions) are not hoisted due to interacting with the Temporal Dead Zone via let or const.

```js
console.log(myDeclarationFunc);

function myDeclarationFunc(){
    console.log('I was hoisted');
};

console.log(myExpressionFunc)

const myExpressionFunc = function (){
    console.log('not hoisted');
};
```

## Falsy Values [mdn link](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

- A value that JS coerces to be considered false when used in a boolean expression
    - null
    - undefined
    - false
    - NaN
    - 0
    - -0
    - 0m
    - ''

## Recursion Practice Time (Solo)

- You are free to pair up if you would like to, but this is dedicated time to study recursion.
- I reccomend starting over on the practices from yesterday and going back through everything
- Use the debugger to help you analyze your recursive functions
- You can also practice using the js-challenges/recursion-prompts repo that I shared yesterday