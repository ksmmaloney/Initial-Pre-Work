/*  Getters and setters are functions. They obtain values from an object, and set the value of a property within an object. A setter UPDATES the value of a variable. A getter READS the value of a variable. The advantage is that you can use them to obscure values that you don't want the user to access directly; they hide internal implementation details.

*/


function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor(tempoutside)  {

    this.tempoutside = tempoutside;
  }
      get temperature () {
        return 5/9* (this.farenheit - 32);
    }
      set temperature (celsius) {
        this.farenheit = celsius * 9.0 / 5 + 32;
      }
}
  /* Alter code above this line */
  return Thermostat;
}


const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
