//  You can chain together if/else statements to meet several conditions. But you Must.Be.Careful. Code is not forgiving if spaces and brackets end up where they shouldn't.



function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }


  return "Change Me";
  // Only change code above this line
}

// Change this value to test
console.log(testSize(25));
