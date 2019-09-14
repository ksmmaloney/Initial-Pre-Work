/*  Oftentimes a function gets created inline, as when passing a function as an argument to another function. There may not be a need to give it a name because it doesn't get reused.

As a way to shorten the process for writing these "anonymous" functions, you can use arrow function syntax, which can do the following*:
- omit the keyword "return"
- omit the brackets around the codes
- shorten the function into one-line statements
* (in the case when there's no function body and only a return value)

*/

const magic = () =>  new Date()
