let prom1 = new Promise((resolve, reject) => {
    let a = Math.floor((Math.random() * 3) + 1);

    if (a > 1) {
        reject("No random number was not supporting you");
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Done by Dhruv");
        }, 2000);
    };
});

// prom1.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err)
// })


let prom2 = new Promise((resolve, reject) => {
    let a = Math.floor((Math.random() * 3) + 1);

    if (a > 1) {
        reject("No random number was not supporting you 2");
    }

    else {
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Done by Dhruv 2");
        }, 1000);
    };
});

let p3 = Promise.all([prom1, prom2]);
 
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err)
})
