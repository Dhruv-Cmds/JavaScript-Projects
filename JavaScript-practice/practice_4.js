// 1. What will the following print in JavaScript?,
    console.log("har\"".length);
    
    // OUTPUT: 4 (bcuz after that \ we have an extra ")

// 2. Explore the includes, stratsWith & endsWith functions of a String

let a = "Your_name";
console.log(a.startsWith("Y"));
console.log(a.endsWith("e"));

// 3. Write a program to convert a given Stirng to lowercase,

let b = "lowerCaseString";
console.log(b.toLowerCase());

// 4. Extract the amount out of this String, 
    //  "Please give RS 1000"

let c = "Please give RS 1000";
console.log(c.slice(15));

// 5. Try to change 4th character of a given String were you able to do it?,
    // No, you cannot change the 4th character of a String in JavaScript because strings are immutable.
