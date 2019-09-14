/* Radix was a new one to me, but learned that it's a number. I looked it up as "the base of a system of numeration, including zero." In base 10, the radix is 10 because base 10 uses ten digits (0 through 9). In binary, the radix is 2 because binary uses 2 digts (0 and 1).

This challenge is asking for a binary number to be converted to an integer, so we have to specify in the function that it's a binary number. Otherwise, if we don't add the "radix" of 2 in the function, it'll think the number is base 10. So when it converts "10011" to binary, you get 19. If you leave off radix, you get 10011.
*/


function convertToInteger(str) {

    var integer = parseInt(str, 2);

    return integer
}

console.log(convertToInteger("10011"))
