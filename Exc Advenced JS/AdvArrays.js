/*
Map()
replaces forEach. difference that map always has a return element, so if you need an action to happen on every element use map.
In ES6 - whenever you want to loop on an array and have an action on each element use array.map(param).
Map is a function that goes over an origin array , run action and returns a value that is stored in a new array.
const array=[1,2,3] ; const newArray=array.map(a => a*2); --> newArray will be [2,4,6]

Filter()
Option to filter array values based on condition and return it to a new array.
const array=[1,2,3] ; const newArray=array.filter(a => a>1); --> newArray will be [2,3]

Reduce
Kind of a רקורסיה
const array=[1,2,3] ; const reduceArr = array.reduce((accumulator, num) => { return accumulator + num }, 0);
The accumulator is set to default on the end of the function (0 in our case), and its set to the last calculation in every iteration.
In the example above the accumulator is : 0, then 0+1, then 1+2, then 3+3.
*/

// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const newArr=[];
array.forEach(obj => newArr.push(obj.username + '!'));
console.log('foreach', newArr);

//Create an array using map that has all the usernames with a "? to each of the usernames
const newMapArr = array.map(obj => obj.username + '?');
console.log('map', newMapArr);

//Filter the array to only include users who are on team: red
const filterArr = array.filter(obj => obj.team === 'red');
console.log('filter', filterArr);

//Find out the total score of all users using reduce
const reduceArr = array.reduce((acc, obj) => {return acc + obj.score},0);
console.log('reduce', reduceArr);

// (1), what is the value of i? ---> newArray will be: [2,4,8,10,16,18] , i = 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
/*const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})*/
const newArrayPure = arrayNum.map(num => num * 2);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const advArr = array.map(obj => {
obj.items = obj.items.map(item => item + "!");
return obj;
});
console.log(advArr);