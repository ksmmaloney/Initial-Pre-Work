// Object properties can have sub properties, sometimes several of them. to access them, you have to be careful to read top to bottom and note where a property sits inside another one.



// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = console.log(myStorage.car.inside["glove box"]); // Change this line
