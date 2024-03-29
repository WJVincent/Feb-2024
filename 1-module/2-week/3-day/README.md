# M1-W2-D3

- Callbacks
- Pair Programming

## Callbacks

- First Class Function | [MDN:](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

  1. Stored in a variable (last week)
  2. Passed as an argument to a function (today)
  3. Returned from a function (Later this week)

- Stored in a variable

  ```js
  let func1 = function(){
    console.log('I\'m stored in a variable');
  };

  console.log(func1());
  ```

- Passed as an argument to a function

  ```js
  let higherOrderFunction = function(callback){
    callback();
  };

  let intoAFunction = function() {
    console.log('I\'m being passed into a function');
  };

  let intoAFunctionPt2 = function() {
    console.log('I\'m ALSO being passed into a function');
  }

  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);
  ```

- Returned from a function (Later this week and also week 5)

`Vocabulary`

- Higher Order Function
  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

## Practice Session 1 (30m)

- Callbacks Heading (not the long practice)

## Pair Programming

### Driver vs Navigator

- Driver: hands on keyboard, only driver types
- Navigator: decision maker, choosing what to do next, solving the problem, lead development, choose the direction of where to go next

### Pairing Guidelines

- meet and greet - get to know each other
- decide whose gonna drive and navigate first
- driver is going to clone repo
- switch roles every 15 minutes
- stick to this pattern no matter what
- COMMUNICATE WITH EMPATHY
    - avoid using accusatory terms like "you did this",
    - use WE, THE, IT
    - Avoid - YOU, YOUR,

### Skills we gain from pairing

- How to communicate abstract and technical concepts - how to “speak in code”
- How to give and receive constructive, effective feedback
- How to problem solve aloud. This is an essential skill for technical interviews.

### What if your pair is more experienced?

- Don’t feel bad, it’s always okay to slow down
- Don’t get discouraged; it’s normal that people have different comfort and skill levels.
- Everyone has good and bad days, and over a 6 month course life will sometimes get in the way.  If you feel like you don’t know as much as your pair today, very likely tomorrow you will be the one who knows more
- Everyone learns differently: own what you know and what you don’t. Your instructors are here to answer all your questions - technical and non-technical
- If you’re silent about your needs and slowing down, you can hurt yourself and you are likely depriving your pair of an opportunity to practice communicating and dig deeper on concepts as well

### What if you are more experienced?

- Check in with your partner regularly - make sure they’re comfortable with solutions and topics before moving on.
- Do you think out loud or in silence? Talk openly about this so you know how to support each other
- Take this as an opportunity to practice talking about the concepts. You know you’ve learned the content if you can help another understand it.
- Take responsibility for your pairing experience. 

### What if you feel like you are not being respected?

- That’s not okay!
- We all have differences, but you need to be able to work professionally with fellow students, your instructors, and your eventual coworkers
- Please speak up (to your pair, to your instructors 1:1, via optional pairing report or mandatory weekly report, via anonymous report)
    - Communicate if it’s great, communicate if it’s terrible.
    - We all have to take steps to improve the situation
    - You’re helping your pair improve: at a/A, in their careers

## Git Flow

Check out the git-flow.md file attached for step by step instructions.

Demo and Code-Along for getting a project onto github and ready for pairing

## Callbacks Project Long Practice (Paired, Until EOD)

If you finish this, feel free to go back to work on the POJO Basics Long Practice / Advanced Arrays Long Practice.  

