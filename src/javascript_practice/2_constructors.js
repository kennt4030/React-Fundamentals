// class User {
//     constructor(first, last, e) {
//         this.f = first;
//         this.l = last;
//         this.email = e;
//     }
// }

// var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
// console.log(userOne.first); //undefined
// console.log(userOne.f); //Paul
// console.log(userOne.l); //O'Connor
// console.log(userOne); //User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}


// //We name the class
// class User {
//     //We call the constructor function and create parameters.
//     //These will be values that we want to be passed in and stored in the object.
//     constructor(first, last, e) {
//                 //On the right side of these expressions, the word 'first', 'last', and 'e' below, 
//                 //we have the value that is getting passed into the parens when the object is created.
//                 // vvv
//         this.f = first;
//         this.l = last;
//         this.email = e;
//         //^^^^^^^^ 
//       //On the left side we have the actual properties of the object. 
//       //The left side stores the incoming value from the right side as 
//       //the property for 'this' specific object being created.  
//     }
// }


class Player {
    constructor(name, number, points) {
        this.na = name;
        this.nu = number;
        this.ap = points;
    }
}

var playerOne = new Player("Kenny", "21", "45");
console.log(playerOne.na);
console.log(playerOne.nu);
console.log(playerOne.ap);