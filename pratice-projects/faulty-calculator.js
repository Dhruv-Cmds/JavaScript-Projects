/* Create a faulty calculator usingJavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()

let a = prompt("Enter first number: ")
let b = prompt("Enter second number: ")
let operation = prompt("Enter operation: ")

function calculator(a, b, operation) {

    if (operation == '+') {

        if (random < 0.1) {
            console.log(Number(a) - Number(b));
        }

        else {
            console.log(Number(a) + Number(b));
        }
    }

    else if (operation == '*') {

        if (random < 0.1) {
            console.log(Number(a) + Number(b));
        }

        else {
            console.log(Number(a) * Number(b));
        }
    }

    else if (operation == '-') {

        if (Number(b) === 0) {
            console.log("Invalid number")
        }

        if (random < 0.1) {
            console.log(Number(a) / Number(b));
        }

        else {
            console.log(Number(a) - Number(b));
        }
    }

    else if (operation == '/') {

        if (random < 0.1) {
            console.log(Number(a) ** Number(b));
        }

        else {
            console.log(Number(a) / Number(b));
        }
    }
}

calculator(a, b, operation);