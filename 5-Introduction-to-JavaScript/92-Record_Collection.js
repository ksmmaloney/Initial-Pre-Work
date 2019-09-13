// I got this test to pass but not without most of the help from the hint solution. I was able to create elements of the solution but learned that I still have a lot to learn!


// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock", 
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
      if (prop === "tracks" && value !== "")  {
        if(collection[id][prop])    {
          collection[id][prop].push(value);
      }
      else {
        collection[id][prop]=[value];
      }
      } else if (value !=="") {
        collection[id][prop] = value;
      } else {
        delete collection[id][prop];
      }

      return collection;
}


       //If prop is "tracks" but the album doesn't have a "tracks" property, create an empty array


// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA"));
