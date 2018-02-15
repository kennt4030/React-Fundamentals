class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //method 1
    greet(){
        console.log('Welcom back,' + this.name);
    }
    //method 2
    status(){
        console.log('Current status:' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User('Anonymous dude');


//We can now use the instance and the . operator
// to access the 2 methods
anonDude.greet();
anonDude.status();

// Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet();
anonLady.status();


//another instance of the class
var jeff = new User("Jeff");
jeff.greet();
jeff.status();


// another instance of a class
var tom = new User("Tom");
tom.greet();
tom.status();

// another instance
var kim = new User("Kim");
kim.greet();
kim.status();

