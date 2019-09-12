// I learned that inside the function I didn't have to write a return statement first and then add the value to a count; I could go straight to "count++" instead. Also learned that the if/else statement does not belong inside the function. 


var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card)  {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
 }


if (count >0)  {
  return count + " Bet";
} else {
  return count + " Hold";
}

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(10); cc("J"); cc("Q"); cc("K"); console.log(cc("A"));
