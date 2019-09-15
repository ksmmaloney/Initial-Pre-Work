/*
An easy way to define object literals is to use simple fields. If the property name and the property value of an object are the same, you can combine them and only write them one time. So instead of this object:
  {
 name: name,
 age: age,
 gender: gender
};

you can combine them to:
{
name,
age,
gender
};

*/

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
