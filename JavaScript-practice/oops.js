// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;


class Animal {
    constructor(name) {

        this.name = name;
        console.log("Object is created...")
    }

    eats() {
        console.log('Kha raha hoon');
    }

    jums() {
        console.log('kood raha hoon');
    }
}

// class Lion extends Animal {
//     constructor(name) {
//         super(name);
//         console.log("Object is created and he is lion...")
//     }

//     eats() {
//         super.eats(); // to call parent as well
//         console.log('Kha raha hoon roar');
//     }
// }

// let a = new Animal("Bunny");
// console.log(a.name);
// a.eats();
// a.jums();

// let l = new Lion("Shera");
// l.eats()





//  GET SET


class User {
    constructor(name) {
        // invokes the setter
        this._name = name
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}

let user = new User("Alice");
console.log(user.name); // John

user = new User(""); // Name is too short