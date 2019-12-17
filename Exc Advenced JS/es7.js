/*
Includes:
for strings : 'Helo'.includes('o') -> true
for arrays ; [1,2,3].includes(2) -> true

Exponentiation operator:
x**2 is x^2
*/

// Solve the below problems:

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes('John'));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const johnDragons = dragons.filter(name => name.includes('John'));
console.log(johnDragons);

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const expo100 = num => num**100;
console.log(expo100(1));

// #4) Useing your function from #3, put in the paramter 10000. What is the result? - 'Infinity'
// Research for yourself why you get this result
