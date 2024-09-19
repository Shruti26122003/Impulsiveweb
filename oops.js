console.log("lets learn oops concepts");

/* 
  1. abstraction = reduce complexity + isolate impact of change
  2. encapsulation = reduce complexity + isolate impact of changes
  3. inheritence = eliminate redundant code
  4. polymorphism = refactor ugly switch/ case statments.
*/


// objects

const circle = {
    radius : 1,
    location : {
        x : 1,
        y : 1
    },
    draw : function(){
        console.log('draw');
    }
};
circle.draw();

//functions

//factory function
/* 
    function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}
const Circle = createCircle(1);
*/

//constructor function 
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);

// adding annd removing

Circle.location = {x : 1};
delete Circle.location;


//enumarting properties
for (let key in Circle){
    if(typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);