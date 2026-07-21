// 1 Create an array of numbers and take input from the user to add numbers to this array,

// let arr1 = [1, 2, 3, 4, 5];

// let userInput = prompt("Enter a number: ")

// arr1.push(Number(userInput))
// console.log(arr1)

// 2 Kep adding numbers to the arrya in until 0 is added to the array,

// let arr2 = [1, 2, 3, 4, 5];


// while (true) {

//     let userInput = prompt("Enter a number: ")

//     if (Number(userInput) === 0) {

//         break;
//     }

//     arr2.push(Number(userInput));
// }

// console.log(arr2);

// 3. Filter for numbers divisible by 10 from a given array
// arr = [10, 20, 30, 40, 50],

let arr3 = [10, 20, 34, 40, 50];

console.log(arr3.filter(
    (e) => e % 10 === 0)
);


// 4. Use reduce to calculate factorial of a given number from an array of first n natural numbers


function factorical(n) {

    if (n < 0) return undefined;

    const numbers = Array.from({length: n}, (_, i) => i + 1);

    return numbers.reduce((a, b) => 
        a * b , 1
    );
}

console.log(factorical(5));