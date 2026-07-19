// 1. Use logical operator to find whether the age of a person livs netween 10 and 20 ?,

let person_age = 1;

if (person_age == 0){
    console.log("You are not a human or you didn't take a birth")
}

if (person_age >= 10 && person_age <= 20) {

    console.log("You live between 10 and 20")
}

else if (person_age < 10) {
    console.log("You are not live between 10 and 20")
}

else {
    console.log("Are you a human or not ?")
}

// 2. Demonstrate the use of switch case statements in JavaScript,

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("No day found");
}

// 3. Write a JavaScript program to find whether a number is Divisible by 2 and 3,

let number = 12;

if (number / 2 && number / 3) {
    console.log("Given number", number, "is Divisible by 2 and 3");
}

else {
    console.log("Given number {number} is not Divisible by 2 and 3");
}

// 4. Write a JavaScript program to find whether a number is Divisible by wither 2 or 3,

let numberr = 10;

if (numberr / 2 || numberr / 3) {
    console.log("Given number", numberr, "is Divisible by 2 or 3");
}

else {
    console.log("Given number", numberr, "is Divisible by 2 or 3");
}

// 5. Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator,

let age = 18;

let age_check = age >= 18 ? "You can Drive" : "You cannot Drive"
console.log(status)
