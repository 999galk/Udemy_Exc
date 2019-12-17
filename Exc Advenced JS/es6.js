/*
ECMA Script v6:

Scope
scope now is within every pair of curly brackets!!!
Children scope always have access to their parents scope (child have access to variables in the parent scope),
but parents don't have access to the child scope.

Variables
Don't use var anymore. its let now.
*let -> var as we know it, can be overritten
* const -> trying to change its value will give error. A function can also be const.
- when you assign a function to a var you make sure no one will use the same variable name anywhere else in the code
- If you create a const object and try to change a 'let' property inside of the object it will work.

Destructuring
if you have an object with some properties you can take them out to external variables using this syntax:
const {player, experience} = obj //assuming you have an object named obj and it has the properties player an experience.
now you can use "player" and "experience" as free variables.
* use let if you want the extracted variable to be let

Object properties
in ES6 you can use a variable name as a parameter (or placeholder).
If you have const a="123"; you can assign [a] as property name/value to an object and it will convert to "123".
Also if you want to take a as is to be an object property you can say const obj = {a} and a will be taken as is to be property name and its value.

Template Strings
No longer using "" and \" or + to assemble variables with text. Now you can use `` so \ before " is no longer needed,  and ${name} to use the variable in the text.

Default arguments to functions
parameters you have in your function declaration doesn't have to come from the call,
they can be set to default in the declaration and if its not coming from the call the function will use the default.
function greet(name="gal",age="27"){} -> if function was triggered without name and age - these will be the defaults.
calling the function will stay the same : greet("john",50)

Symbol
sym1=symbol('a') , sym2=symbol('a') , but sym1===sym2 is false

Arrow functions
const add = (a.b) => a+b; /or {return a+b;} --- () contain the function arguments and after the arrows are the function actions

*/

// change everything below to the newer Javascript!
// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';

// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city : "tlv"
};
/*var firstName = person.firstName;
//var lastName = person.lastName;
//var age = person.age;
var eyeColor = person.eyeColor;*/
const {firstName, lastName, age, eyeColor, city} = person;

// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {a,b,c};
/*  a: a,
  b: b,
  c: c
};*/

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

const message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;

// default arguments - default age to 10;
const isValidAge = (age='10') => age;

// Symbol - Create a symbol: "This is my first Symbol"
const sym = Symbol('This is my first Symbol');

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
const whereAmI = (username, location) => { return (username && location) ? "I am not lost":"I am totally lost!";}