let name = "Dhruv";

console.log(name[1]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

let real_name = "dhurv";
let friend = "Rohan";

console.log(`His name is ${real_name} and his friends name is ${friend}`);

let b = "Ajay";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.split(""));
console.log(b.split("a"));
console.log(b.startsWith("A"));
console.log(b.length);
console.log(b.slice(1,3));
console.log(b.slice(1));
console.log(b.charAt(1));
console.log(b.indexOf("A"));
console.log(b.endsWith("y"));

console.log(b.replace("Ajay", "55"));
/* only first accurence will repalce by your replacement

FOR EXAMPLE:

let b = "Ajay";
console.log(b.replace("Ajay", "55"));

OUTPUT: 55

let b = "AjayAjay";
console.log(b.replace("Ajay", "55"));

OUTPUT: 55Ajay
*/

let a1 = "a";
let a2 = "b";
let a3 = a1.concat(a2);
let a4 = a1.concat(a2 + "yes");
console.log(a3);
console.log(a4);

let name_trim = " Dhruv ";
console.log(name_trim.trim());