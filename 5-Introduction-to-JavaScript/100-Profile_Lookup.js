/* I got a few parts of this challenge, but had to resort to the hint to finish it--struggled with this one. I learned yet again that the solution is always much simpler than I try to make it!

After getting the code to work from the hint,
I reviewed several lessons, including "Use Conditional Logic w/ If Statements", "Acessing Object Properties w/Dot Notation," and "Accessing Object Properties with Bracket Notation" to understand the solution. I'll keep reviewing.

*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
        for (var i = 0; i < contacts.length; i++)  {

         if (contacts[i].firstName === name) {
         if (contacts[i].hasOwnProperty(prop)) {
            return contacts [i][prop];
        } else {

        return "No such property";
        }
    }

    }
    return "No such contact";


// Only change code above this line
}

// Change these values to test your function
console.log(lookUpProfile("Sherlock", "likes"));
