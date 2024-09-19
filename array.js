//array
let selectedcolors = ['red', 'black'];
selectedcolors[2] = 1;
console.log(selectedcolors[0]);

//filter an array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value){
    return value >= 0;
});

console.log(filtered);

// mapping an array

const number = [1, 2, 3, 4, 5];
const doubled = number.map(num => num * 2);
console.log(doubled); 


//reduce method in an array
// The reduce() method in JavaScript is a powerful tool for working with arrays. It allows you to reduce an array to a single value by executing a reducer function on each element of the array, from left to right.

const Num = [1, 2, 3, 4];
const sum = Num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 


