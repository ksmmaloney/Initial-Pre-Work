// This option is for when there's more than one input that has the same output, like when there's a range of values. Also, note that after you declare a case, you put a colon after it, not a semi colon.

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val)  {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;

  }

  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
