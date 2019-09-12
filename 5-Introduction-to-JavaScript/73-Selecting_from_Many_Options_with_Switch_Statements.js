/* I had real trouble with understanding the instructions in this lesson. I felt like they didn't explain the concept very well. For example, in their pseudocode, some of the terms are actual words you'd use in the code, such as "case" and "break," and some were terms that acted like placeholders, such as "statement." I had to look elsewhere for help. Anyway, here's what I ultimately learned.

The switch statement executes a block of code depending on different cases. The switch statement first evaluates an expression. In this challenge, (val) is the expression being evaluated. (Val) is then compared with the values of each case in the structure (the 1 in "case 1", then the 2 in "case" 2, etc). If there is a match, the associated block of code is executed. If "val" is 1, it matches "case 1" and then 'return "alpha"' is executed.

A switch statement is used with "break" which stops executing statements. If "break" is omitted, the next statement will be executed.

Note that case values are tested with strict equality (===).
*/

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val)  {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(caseInSwitch(1));
