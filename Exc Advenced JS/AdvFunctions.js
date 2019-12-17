/*Currying functions
Split a function that takes multiple arguments into a function that takes them one by one
const multiply (a,b) => a*b;
const curryMul = (a) => (b) => a*b;
then we call it curryMyl(3)(5); if we call it curryMul(3) it will return (b) => a*b (this is actually the result of (a).
Its good for cases where you want to keep only a part of the function as const.
For example if we keep const Mul3 = curryMul(3); you can use the Mul3 as constant multiplier by 3

Compose Functions
function that runs over the output of another function
const comp = (f,g) => (a) => f(g(a));
const sum = (num) => num+1;
comp(sum,sum)(5); === g(a) is sum(a) which is 6, then f(6) is sum(6) which is 7.


Key concepts
1. Avoid side effects - console log, changing external variables - everything that affects the outside world from the function scope try to avoid it or clean it after use.
2. Code functional purity and determinizem - always return a value from a function, don't let it stay undefined AND make sure the function will always return the same value for the same input.
Meaning - no chance well call the function twice with the same input and it will return different results.
*/

//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const add(a,b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y;
var addToTen = addTo(10); // returns y => x+y
addToTen(3);// returns 10+3 -> 13

//Currying: What does the last line return?
const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);//return 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)//returns 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// g is add5 so g(a) is add5(10) = 15
// f is add1 so f(15) is add1(15) = 16

//What are the two elements of a pure function?
// avoid side effects, always return a value AND don't ever return different values for same inputs
