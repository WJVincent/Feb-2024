# M3-W8-D3

-   Promises
-   aysnc/await
-   fetch

## Why Promises?

Remember your guessing game project?

Here is a conceptual example of what it might look like callbacks that respond to success/failure conditions

```js
function main(){
    turnNumReq({
        success: rangeReq({
            success: guessReq({
                success: win(),
                error: handleError()
            }),
            error: handleError()
        });
        error: handleError()
    })
};
```

Converting that to promises might look something like this

```js
function controller() {
    main()
        .then(rangeReq)
        .then(guessReq)
        .then(win)
        .catch(handleError);
}
```

Promises allow us to control flow aysnc functions with much less boilerplate and much less confusing conditional logic

## Promises

A promise in JS is a commitment that at some point in the future your code will resolve into some value

Promises can exist in one of three states:

1. pending: it has been neither fulfilled nor rejected
2. fulfilled: the action has succeeded
3. rejected: the action has failed

```js
//promise constructor

//takes in a cb function (cb return value is ignored)
// returns a promise object

new Promise((resolveFunc, rejectFunc) => {
    //some async code
});


.then() //do something after the promise is fulfilled
.catch() //do something if the promise is rejected or there is an error due to an unhandled rejection
.finally() //do something after the promise resolved either fulfilled or rejected
```

```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
```

## Exercise: Create and Handle Promises (SOLO, 25m)

## Walkthrough: Create and Handle Promises

## Exercise: Promise.all (SOLO, 25m)

## Walkthrough: Promise.all

## async/await

async/await was built to make handling promises easier and more ergonomic

```js
function controller() {
    main().then(rangeReq).then(guessReq).then(win).catch(handleError);
}
```

```js
async function controller() {
    try {
        await main();
        await rangeReq();
        await guessReq();
        await win();
    } catch {
        handleError();
    }
}

async function controller() {
    await main();
    await rangeReq();
    await guessReq();
    await win();
}.catch(handleError);
```

## Exercise: async/await (SOLO, 25m)

## Walkthrough: async/await

## fetch

fetch is a function used to make http requests

it became available in node in v18

```js
fetch(url, optionsObj);
```

## Exercise: fetch from server (SOLO, 25m)

## Walkthrough: fetch from server

## Exercise: fetch (SOLO, 25m)

## Walkthrough: fetch

## Long Practices (paired)

-   Exploring Promises
-   fetch
