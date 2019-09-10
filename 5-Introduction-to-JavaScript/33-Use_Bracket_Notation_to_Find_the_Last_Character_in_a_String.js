/* You can subtract one from the length of a string to find the last character. Think of it as first finding the length of the string with " .length" Next, you subtract one from the string's length to allow for zero being the first position.

This method is a variation on finding the length of a string; it simply adds one more element, that of subtracting one from the answer. 
*/

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];
