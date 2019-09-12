/* The default statement will be executed if no matching case statement is found. You would use a default statement if you can't specify all possible values as case statements. The default statement is placed at the end as the last case.

Think about "string" and "number" data types: case values have to be inside quotes if they are letters. Number values don't need quotes.
*/

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val)  {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default:
      return "stuff";
      break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
console.log(switchOfStuff(4));
