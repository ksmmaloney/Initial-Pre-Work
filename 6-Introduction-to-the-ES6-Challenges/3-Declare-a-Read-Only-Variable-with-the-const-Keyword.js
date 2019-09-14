/*  Besides "let", you can also declare variables with the "const" keyword.

- const cannot be reassigned; it's read-only.
- use it with all uppercase letters and words separated by an underscore
- use const with variables that you know you won't want to change

*/

"use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
