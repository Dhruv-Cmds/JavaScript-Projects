use('CrudDb');

// CREATE    create documents (table)
// db.createCollection("courses")

// add data inside documents
// db.courses.insertOne({
//   name: "dhruv",
//   age: 100,
//   isFine: false
// })

// db.courses.insertMany([
//   { name: "dhruv", age: 100, isFine: false },
//   { name: "rahul", age: 25, isFine: true },
//   { name: "aarav", age: 32, isFine: true },
//   { name: "neha", age: 28, isFine: false },
//   { name: "priya", age: 41, isFine: true },
//   { name: "rohan", age: 19, isFine: true },
//   { name: "kiran", age: 35, isFine: false },
//   { name: "ananya", age: 22, isFine: true },
//   { name: "vikas", age: 47, isFine: false },
//   { name: "meera", age: 30, isFine: true }

// ])

// let a = db.courses.find({isFine: false})
// console.log(a.toArray())

// UPDATE
// db.courses.updateMany({isFine: false}, {$set:{isFine: true}})
// db.courses.updateOne({isFine: false}, {$set:{isFine: true}})

// DELETE
db.courses.deleteMany({isFine: true})
// db.courses.deleteOne({name: "vikas"})


console.log("done")
