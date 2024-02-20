# M1-W1-D2

- Zoom Rules
- Intro to JS
- Expressions
- Data Types
- Variables
- Functions
- Conditionals
- Loops

## Zoom Rules

1. Cameras on unless you have reached out to an instructor and have gotten an ok to be cameras off for the day or have an emergency take place and need to quickly turn the camera off and then back on.
2. Mic Off, unless you have raised a hand in zoom and been called on. Use the raise hand zoom reaction.
3. Be Present, both during lectures and pairing. Dont be playing games on your computer, checking social media, or messing with your phone during class time.
4. Make sure your zoom name matches your preferred name (slack as well)

## Intro to JS

We will be spending a ton of our time here at app academy focusing on javascript in depth. So it is a good idea to have a brief understanding of the history and purpose of the language to give a sense of context to what we are learning.

JavaScript was originally written in 1995 and was created (in its infant form) in just over a week. It was written to be an easy to use and lightweight option for creating dynamic user interactions on web pages in contrast to much bulkier and complex languages.

The name JavaScript was decided on after a couple other options such as Mocha or LiveScript, due in part to the insane marketing push of Java at the time, and JavaScript developers wanting to take part in that name recognition. Seriously, look up the old Java commercials, they are hilarious!

JavaScript is the defacto web programming language today, it has been built from the ground up, since its creation to be purpose built for web development.

Asynchronisity and the built in compatibility of all web browsers is a huge advantage of using JavaScript.

## Expressions

If you think of coding as a language, an expression is like a sentence, a
variable is a noun, and a keyword is a verb. A sentence combines nouns, verbs,
and other elements of language to bring across a single point. It takes words
and produces meaning.

An expression is a statement that __evaluates__ to something as opposed to a
value which __is__ something, or a keyword that __does__ something.

```js
5 + 5 // -> 10

"hello" + " " + "world" // -> "hello world"

5 === 5 // -> true

5 !== 4 // -> true

1 < 2 // -> true

2 > 1 // -> true
```

## Data Types

### Numbers

- We can have whole numbers, decimals, and negative numbers
- Order of Operations
  - P.E.M.D.A.S.
    - Parens
    - Exponent
    - Multiplication / Division / Modulus
    - Addition / Subtraction
- Modulo
  - Returns the remainder of a division expression
- NaN

### Booleans && Comparison Operators

#### Logical Comparison

- `Not` Operator (!)

  - Reverses a boolean

    |   A   |  !A   |
    | :---: | :---: |
    | true  | false |
    | false | true  |

- The `And` Operator (&&)

  - Only true if _both_ sides are true

    |   A   |   B   | A && B |
    | :---: | :---: | :----: |
    | true  | true  |  true  |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |

- The `Or` Operator (||)

  - True if _either_ side is true

    |   A   |   B   | A \|\| B |
    | :---: | :---: | :------: |
    | true  | true  |   true   |
    | true  | false |   true   |
    | false | true  |   true   |
    | false | false |  false   |

#### Value Comparison

  ```js
  // Exclusive Comparison
  console.log(5 < 9); // true
  console.log(5 > 9); // false
  console.log("a" < "b"); // true (dictionary order)
  console.log("cat" < "cats"); // true (dictionary order)

  // Inclusive comparison (... or equal to)
  console.log(7 <= 10); // true
  console.log(10 >= 10); // true
  ```

- Equality

  - `=` is an assignment operator
  - `==` coerces data to check equality, hard to predict; **do not use**
  - `===` strict equality
  - `!==` strict NOT equal

```js
// Equality === and !==
console.log(2 === 2); // true
console.log(2 === 2.1); // false
console.log(2 !== 2.1); // true

// Two equality operators, === and ==
console.log(5 === "5"); // false
console.log(5 == "5"); // true (types are coerced)
console.log([] == 0); // true (can be unpredictable)
console.log([] == '0'); // false (can be unpredictable)

```

### Strings

`Syntax`

- Must use single-quotes (') or double quotes (")
  - [AirBnB Style](https://github.com/airbnb/javascript) guide prefers single by default
  - Be consistent
- You can use single within double or vice-versa
  - If you need both, use an escape character `\`

`Length`

- The `.length` property returns the number of characters in a string:
  - Space and punctuation are also characters

`Indexing`

- `Index`: position of an element
  - **Indices start at 0**

      | index | 0 | 1 | 2 | 3 |
      |-------|---|---|---|---|
      | char  | d | o | g | s |

- Refer to a singe character of a string using `bracket notation`

`IndexOf`

- Find the index of _the first_ given character with `indexOf`

`Concatenate`

- Use `+` to concatenate (join) strings together

### null && undefined

- `undefined`: non specific lack of value
- `null`: a specific value meaning nothing

## Variables

- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like writing a name on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like the object you put in a box.
- Three parts of a variable
- +=, -=, \*=, /=
- Prefix and Postfix ++/--

  ```js
  let name; // declaration (undefined)

  name = "Leroy"; // assignment / reassignment

  let name2 = "Jenkins"; // initialization

  console.log(name, name2);
  ```

## functions

`Vocabulary`

- `function declaration` - writing a function (once)
- `function call` / `invoking` - using a function (once or many times)
- `parameter(s)` - input(s) to a function when _writing_ a function. A variable
  to be used by the function.
- `argument(s)` - input(s) to a function when  _calling_ a function. The value
  assigned to the parameter variable.
- `return` what a function 'equals' or _evaluates_ to.

`Syntax`

- Blueprint for `declaring` a function

  ```js
  function aName (optionalParams) {
    // may have a return value
  }
  ```

`Return`

- Evaluates a function
  - It will evaluate to whatever you put after `return`
  - By default, functions evaluate to (return) `undefined`
- Stops the rest of your code from running

`Invoking a function`

- Blueprint for `invoking` a function

  ```js
    aName(optionalArgs)
    // if no args
    aName();
  ```

`Why Functions?`

- Blocks of code that we can invoke multiple times
- Prevent us from having to rewrite code
- console.log() vs return.
  - console.log we call a SIDE EFFECT, it doesn't effect the VALUE
  - return makes the function's VALUE equal to something when it's invoked

## Functions Lecture Practice

## Practice Session 1 (SOLO, 1h30m)

- Intro to Functions Heading
- Function Parameters Heading
- String Operators in a Function Heading
- Math Operators in a Function Heading

## Practice Session 1 Walkthrough

- Repeat Name
- Yell
- Plus Five
- Average of Four

## conditionals

`Syntax`

- keywords: `if` `else if` `else`
  - `if` & `else if` require a condition inside of parenthesis
  - We can put whatever we want in a condition
    - [Falsy Values]
- a `code block` to run

  ```js
  let c = "turtle";

  if (c === "dog") {
    console.log("I'm a dog!");
  } else if (c === "turtle") {
    console.log("I'm a turtle!");
  } else if (c === "potato") {
    console.log("I'm a potato");
  } else {
    console.log("I don't know what I am");
  }
  ```

## conditionals lecture practice

## Practice Session 2 (SOLO, 35m)

- Conditionals Header

## Practice Session 2 Walkthrough

- is Five
- Odd Num Only
- Valid Substring

## loops

`While Loop`

- Syntax

  - an `initial expression` (like a counter)
  - the `while` keyword
  - parenthesis with a conditional of when to run the loop WHILE the condition is true
  - a step case leading to the conditional resolving to false.

  ```js
  let i = 0;

  while (i < 5) {
    console.log("hello world");
    i++;
  }
  ```

`For Loop`

- Syntax

  - `for` keyword
  - parenthesis that has ... separated by a semi-colon
    - an `initial expression` (like a counter)
    - a conditional of when to run the loop
    - if truthy, the loop will run.
    - a step case leading to the conditional being falsy.
    - `for(start, stop, step)`

  ```js
  for (let i = 0; i < 5; i++) {
    console.log("hello world");
  }
  ```

- When to use?

  - For loop: Use when a loops duration is based on a defined length.
  - While loop: Use when a loops duration is based on a unknown or undefined length.

## loops lecture practice

## Practice Session 3 (SOLO, 1hr)

- Start on the Basic Loops Heading

## Practice Session 3 Walkthrough

- Log Between
- Elements of Odd Indices Reversed
- Second Half
- Log Between Stepper

## Drilling

- Continue with Basic Loops Heading