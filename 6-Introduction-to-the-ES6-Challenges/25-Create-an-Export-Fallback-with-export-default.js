//  In addition to "named export", which makes functions and variables available in other files, another export syntax to know of is "export default". It's mostly used if there's just one value being exported from a file. And it's used to create a fallback value for a file. There can only be one value as a default export in each file (or module). Also, you can't use export default with var, let, or const.

"use strict";
export default function subtract(x,y) {return x - y;}
