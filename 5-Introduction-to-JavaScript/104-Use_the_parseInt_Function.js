//  parseInt() parses a string and returns an integer. I learned that "77" will return 77, but "7a7" will return only 7. "a7a7" will return NaN. If the first character isn't a number, the return is Nan.

function convertToInteger(str) {

  var integer = parseInt(str);

  return integer

}
console.log(convertToInteger("a7a7"));
