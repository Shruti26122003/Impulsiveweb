/* introductio  portion
console.log('hello world');
let age : number = 20;
if (age < 50)
    age += 10; */


// built in types
let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;

/* any data type
function render(document) {
    console.log(document);
}*/

// arrays

let numbers: number[] = [];
numbers.forEach(n => n.toString)


//tuples
// syntax - let tuple_name = [val1, val2, val3, ...val n];
let arrTuple: [number, string, number, string] = [501, "welcome", 505, "Lucy"];
console.log(arrTuple);

// enums
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  } 
  console.log(StatusCodes.NotFound);
  console.log(StatusCodes.Success);

  // functions

  function CalculateTax(income : number) : number{
    if(income < 50_000)
        return income * 1.2;
        return income * 1.3;
  }

CalculateTax(10_000);


// objects

let employee : {
    readonly id : number,
    name : string ,
    retire : (date : Date) => void
} = { 
    id : 1 , 
    name : 'Lucy',
    retire : (date : Date) =>{
        console.log(date);
    }
};


//section 3 advanced type

// type alias

type Employee = {
    readonly id : number,
    name : string ,
    retire : (date : Date) => void
}

let employees : Employee = {
    id : 1 , 
    name : 'Lucy',
    retire : (date : Date) =>{
        console.log(date);
    }
};








