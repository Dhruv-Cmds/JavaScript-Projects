// shift is pop's brother and unshitft is push's brother

// shift -> pop from start of array
// pop -> pop from start of array
// unshift -> push from start of array
// push -> push from end of array

// let arr = [1, 2, 4, 9, 10, 8];

// arr[0] = 46;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);


// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let a3 = [7, 8, 9];

// console.log(a1.concat(a2, a3));



// -----------------------------------LOOPS----------------------------------------

// let a = [1, 2, 4, 9, 10, 8];

// for (let i = 0; i < a.length; i++) {
//     const value = a[i];
//     console.log(value);
//     // console.log(a[i]);
// }

//  you can give any name you want like value ---> index or x or y etc.. and same with rest
// a.forEach((value, index, arr) => {
//     console.log(value, index, arr)
// })


// Map filter reduce

let b = [1, 13, 5, 7, 11];

let c = [];

for (let i = 0; i < b.length; i++) {

    const square = b[i] * b[i];
    c.push(square);
}

console.log(c);

// Map method

let d = b.map((square) => {
    return square ** 2;
})

console.log(d);

// FILTER

const greaterThanSeven = (e) => (

    e > 7 ? true : false
    
);

console.log(b.filter(greaterThanSeven));

// console.log(b.filter
//     ((e) => (

//     e > 7 ? true : false
    
// )));


// REDUCE

let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b) => {
    return a + b
};

console.log(arr2.reduce(red))