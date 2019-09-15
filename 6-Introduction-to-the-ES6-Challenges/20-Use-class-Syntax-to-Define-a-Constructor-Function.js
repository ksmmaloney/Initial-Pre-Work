/*  The keyword class is a new syntax ins ES6 to help create objects. A class is a description of how to create an object of a specific type.

Never having dealt with constructor function creation up until now in fCC, I had to look this one up. Here's what I found, but I'll have more to research:

The constructor is the function that you call to make the object. The class is a placeholder for the object that will be created.

When you write new Vegetable(‘carrot’) it returns a function with ‘carrot’ being passed into the Vegetable class’s constructor function. The constructor function takes a name argument and assigns it to this.name, which allows the created function to have a name property with the value of what was passed into it (in this case ‘carrot’).

*/

function makeClass() {
  "use strict";
  /* Alter code below this line */

class Vegetable {
  constructor(name) {
      this.name= name;
  }
}

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
