/*
Strings options:
- padStart(5) - will give a string spaces before the word starts.
The number of chars of the string is included in the argument number, meaning if a string is 'Gal' and padStart is 5 - it will add 2 spaces before the word.
If the pasStart argument if smaller than the number of the actual string - it will not do anything.
- padEnd() - same.

Error handling:
- Starting now if you have a comma (,) at the end of a function's params list it won't give an error.
Meaning : function gel(1,2,3,){} - the comma at the end is now valid.

Objects iteration:
Example foe object: let obj = {user1:'abc',user2:'cdb',user3:'fgh'};

Get object values:
How we get object's values list before es8:
Object.keys(obj) -> will return an array of the object keys [0:user1 1:user2 3:user3)]
To get the values you can run Object.keys(obj).forEach((key,i) => return obj[key]);
How we get object's values list with es8:
Object.values(obj).forEach(value => console.log(value) );

Get object entries:
In es8 we can Object.entries(obj), and we'll get an array of arrays, each inner array will be 0:key 1:value
For the object in the example we'll get:
0: (2) ["user1", "abc"]
1: (2) ["user2", "cdb"]
2: Array(2)
0: "user3"
1: "fgh"
*/

// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.padStart(9);
rabbit = rabbit.padStart(9);

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'
// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);



// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
//trim removed white spaces. padEnd when added with a char will fill the entire wanted padding with the char:
"🐢======="

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

//option 1:
Object.entries(obj).reduce((acc, value) => {
return acc + value[0] + ' ' + value[1] + ' '}, '');
//option 2:
Object.entries(obj).map(value => value.join(" ")).join(" ");

