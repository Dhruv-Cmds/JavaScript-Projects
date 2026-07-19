// 1. Write a program to print the marks of a student in an object using for loop,

let obj = {
    harry: 98,
    mohan: 70,
    aakash: 7
}

for (let i in obj) {
    console.log(obj[i])
}


// 2. Write the program in Q1 using for in loop,

for (const i in obj) {
    console.log("Student", i, "'s", "mark is: ", obj[i])
}


// 3. Wirte a program to print "Try again" until the user enters the correct number,

/* let number = 7;

let userInput = prompt("Enter a number:");

if (Number(userInput) === 7) {
    console.log("correct");
}

else {
    console.log("incorrect");
}
    */

// It only works in devtool(console)

// 4. Write a function to find mean of 5 numbers,

let number1 = 10
let number2 = 20
let number3 = 30
let number4 = 40
let number5 = 50

let sum = number1 + number2 + number3 + number4 + number5;

let mean = sum / 5;

console.log("Mean:",mean);