/*  If you need to find out which character is at a specific spot (or "index") in a string so that you can assign that value to a variable, you would use "bracket notation."

You add one set of brackets to the end of the variable you're searching. Inside the brackets you put the number of the character position in the string. (JavaScript starts counting at 0, which is called zero-based indexing).

*/

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];
