//  promise async behavior control 



// function getData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
// console.log('Loading modules');

// console.log('Do something else');

// console.log('Load data'); 

// let data = getData();

// data.then((v) => {

//     console.log(data);

//     console.log('process data');

//     console.log('task 2');

//     console.log('task 3');

//     console.log('task 4');
// });


//  using async await  aysnc behavior control



// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

async function getData() {
    let x = await fetch('https:///jsonplaceholder.typicode.com/todos/100')
    let data = await x.json()
    return data
}

async function main() {

    console.log('Loading modules');

    console.log('Do something else');

    let data = await getData();

    console.log(data);

    console.log('process data');

    console.log('task 2');
}

main()