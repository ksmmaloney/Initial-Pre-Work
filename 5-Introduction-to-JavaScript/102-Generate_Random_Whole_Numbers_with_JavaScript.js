/*  You can also use the Math.random() function to generate random whole numbers.

The solution to this one felt like a sneaky trick. I think I would have gotten it sooner if "var randomNumberBetween0and10 = Math.floor(Math.random() * 20);" hadn't been placed at the top. It doesn't need to be there to run the code, does it? But the test won't pass without it. I think they put it there to confuse me!
*/

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
