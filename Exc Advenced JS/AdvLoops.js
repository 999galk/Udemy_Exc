/*

In JS iteration is allowed over arrays and strings.
We do have a way to iterate over Objects but that will be called enumerating.

Starting ES6 - 2 new ways to iterate over an array:
1. for of - for (item of array) { console.log(item);}
# You can't use this type of loop over an Object, only over iterables.

2. for in - runs over an object. its not iterating its enumerating - meaning runs over the object properties.
example: const obj = { apples: 2, oranges:5, grapes:10} -> for (item in obj){console.log(item);}
 -> this will print : apples oranges grapes
#if you run for in loop on an iterable object like an array - it will run on the indexes! cause arrays and strings are actually objects that their keys (or properties) are 0,1,2,...
#Usually running on objects will be with Object.keys/entries/values...

*/

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99]; // should return 100
const array2 = ['a', 3, 4, 2]; // should return 4
const array3 = []; // should return 0

function biggestNumberInArray(arr) {
    if(arr.length > 0){
        return arr.reduce((acc, item) => { if(item > acc) { acc=item;} return acc;}, -Infinity);
    }
    return 0;
}
biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);

function biggestNumberInArray2(arr) {
    let biggest = -Infinity;
    if(arr.length > 0){
        arr.forEach(item => {if(item > biggest) {biggest = item;}});
        return biggest;
    }
    return 0;
}

function biggestNumberInArray3(arr) {
    let biggest = -Infinity;
    if(arr.length > 0){
        for (item of arr){
            if (item > biggest){
                biggest = item;
            }
        }
        return biggest;
    }
    return 0;
}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
    for (item in basket){
        if (lookingFor === item){
            return `${lookingFor} is in your basket`;
        }
     }
     return 'this item does not exist in your basket';
}



var users=[
{
    username: "saswata",
    password:1234,
},
{
    username: "yoo",
    password:5678,
},
{
    username: "poo",
    password: 1234,
}
]

var timeline=[
{
    username:"ronaldo",
    post:"we did"
},
{
    username:"benz",
    post:"we "
},
{
    username:"mar",
    post:"did"
}
]

var login=function (name,pass) {
    var userExist=false;
    for(i=0;i<users.length;i++)
    {
        if(name===users[i].username && pass===users[i].password)
        {
            console.log(timeline);
            userExist=true;
        }
        else if (name===users[i].username && pass!==users[i].password) 
        {
            // Means that the user exist in the system but pass is incorrect
            console.log("password is wrong");
            userExist=true;
        }
        // if you had another 'else' here saying both username&pass are incorrect you would get the error messeage in every iteration of the loop (unless it was the first object in the array), we need to finish going over all the array elements before we can determine if user exists or not.
        // This is why I kept a bool var that indicates if we found that the user exists meaning we already notified something to the console and we don't want to notify anything else
    }
    
    if(!userExist){
      console.log("user doesn't exist");
    }
  }

var name=prompt("Enter your username");
var pass=Number(prompt("Enter your password"));
login(name,pass);
      