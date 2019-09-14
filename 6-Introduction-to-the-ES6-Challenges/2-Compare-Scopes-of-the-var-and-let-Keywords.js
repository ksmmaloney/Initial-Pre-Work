// By using "let" you can declare variables in relation to their scope. Instead of declaring variables globally, as var does, you can use 'let' to declare variables locally inside blocks, statements, or expressions.


function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
