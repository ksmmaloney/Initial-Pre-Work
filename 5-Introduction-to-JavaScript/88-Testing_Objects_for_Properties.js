// The ".hasOwnProperty" method can be used to find out if an object has a particular property name. .hasOwnProperty returns either a true or false result, depending if it finds the property.


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {

  if (myObj.hasOwnProperty(checkProp) == true) { // Your Code Here
    return myObj[checkProp];

  }
  else {
    return "Not Found"

  }
}



// Test your code by modifying these values
console.log(checkObj("house"));
