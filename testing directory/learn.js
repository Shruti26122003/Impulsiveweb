//console.log('hello world');

//variable in javascript
let name = 'hello';
console.log(name);

/* rules to declare variables 
   cannot be a reserved keyword
   should be meaningful
   cannot start with a number
   cannot contain a space or hypen(-)
   case sensitive 
*/ 

//primitive types in javascript

let sname = 'hey';  //string
let age = 30;    //number
let isApproved = false; //boolean
let firstname = undefined;
let selectedcolor = null;

//reference types in javascript
// objects

let person = {
    mname:'shurti',
    age : 32
};

//dot notation
person.mname = 'mishra';

//bracket notation
person['mname'] = 'lucy';
console.log(person.mname)


//array
let selectedcolors = ['red', 'black'];
selectedcolors[2] = 1;
console.log(selectedcolors[0]);

//functions
function greet(name) {
    console.log('hello ' +name);
}
greet('john');


// string

//string primitive
const message = 'this is my\n first message';

//string objects
const another = new String('hi');


//conditional statment

let time = 15;
if (time < 10) {
    console.log("good morning");
  } else if (time < 20) {
    console.log ("Good day");
  } else {
    console.log ("Good evening");
  }


  //loops in java script 
  for (let i = 1; i < 6; i++) {
    console.log(i);
}

// initialize variable i
let i = 1;

// loop runs until i is less than 4
while (i < 4) {
    console.log(i);
    i += 1;
}


// getter and setter in javascript

// getter = access the property
// setter = change (muted) them

const info = { 
	firstName: "lucy", 
	lastName: "doe", 
	get fullName() { 
		return `${this.firstName} ${this.lastName}`; 
	}, 
	set fullName(name) { 
		const parts = name.split(" "); 
		this.firstName = parts[0]; 
		this.lastName = parts[1]; 
	}, 
}; 

console.log(info.fullName); // "John Doe" 

info.fullName = "lyka Smith"; 
console.log(info.firstName); // "Jane" 
console.log(info.lastName); // "Smith"

//local variable vs global variable

//global variable = declared outside of any function or block scope.

let petName = 'Lucy' // Global variable
myFunction()

function myFunction() {
    fruit = 'apple'; // Considered global
    console.log(typeof petName +'- ' +  'My pet name is ' + petName)
}
console.log( typeof petName + '- ' + 'My pet name is ' + petName + 'Fruit name is ' + fruit)

//local variable = Local variables are defined within functions in JavaScript.

myfunction();
anotherFunc();
let petsName;
function myfunction() {
    let petsName = "Lucy"; // local variable
    console.log(petName);
}
function anotherFunc() {
    let petName = "Lyka"; // local variable
    console.log(petName);
}
console.log(petName);

// this keyword in javascript

const video = {
    title : 'a',
    tags: ['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
        }, this);
    }
};
video.showTags();
