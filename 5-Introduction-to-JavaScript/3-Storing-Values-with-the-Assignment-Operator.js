/*In JavaScript you store values in variables. You use the "assignment" operator, which is the " = " character. Assignments go from right to left. The value is determined on the right side of " = " , then the value gets "assigned" on the left side.

I learned to keep the task of creating variable labels separate from the task of storing values in the variables. I didn't realize at first that "var" doesn't need to stick around after the label is created. You drop the "var" after the name is created. My code worked once I stopped including "var" in the task of assigning. Duh.

This challenge demonstrates that the values of variables are meant to change with new assignments. (in this one, the value of b changed from 2 to 7)
*/

// Setup
var a;
var b = 2;

// Only change code below this line

a = 7;
b = a;
