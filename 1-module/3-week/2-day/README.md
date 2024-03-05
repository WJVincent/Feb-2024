# M1-W3-D2

- Call Stack
- Recursion

## The Call Stack

- JavaScript is single threaded, meaning that it can only do one thing at a time.
- The call stack is the structure that JavaScript uses to determine what order a
task evaluates.
- A stack is a data structure that follows the rule FILO (First In - Last Out)

```js
function foo() {
  debugger
  return 2 + bar();
}

function bar() {
  debugger
  return 6 + baz();
}

function baz() {
  debugger
  return 3;
}

console.log(foo());
```

## Recursion

- What is a recursive function?
  1. A function that calls itself, until it doesn't
- What are the 'parts' of a recursive function?
  1. Base Case (When should we stop)
  2. Recursive Case (When should we recurse)
  3. Recursive Step (How do I move toward the BC or move out of the RC)

### Recursion Problem Demo

- Log every number from 1..N
- Sum to N: Sum all the numbers from 1..N
- Log every element in an array
- Sum every element in an array
- Reverse the elements in an array
- Reverse a string
- Make an array of a range of nums from start..stop

## Solving Problems Recursively p1 (1h, Paired)

## Solving Problems Recursively p1 Walkthrough

## Solving Problems Recursively p2 (1h, Paired)

## Solving Problems Recursively p2 Walkthrough

## Debugging Recursive Solutions (25m, Paired)

## Debugging Recursive Solutions Walkthrough

## Solving Problems Recursively (Paired, Until EOD)