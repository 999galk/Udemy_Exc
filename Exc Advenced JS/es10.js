/*
Flat arrays:
If array = [1,[2,3],[4,5]] and we do array.flat() - it will return [1,2,3,4,5] - flattens the nested arrays
the default for flat is to flatten 1 level, meaning array inside array inside array will not be flattened using just 'flat()',
we need to use flat(2) to flatten also te second layer
If you don't know how deep are the arrays are you want to flat them anyways use flat(Infinity)
Flat also flattens empty values. If array = [a,,,,,b] -> flat() will give you [a.b]

Flat Map:
const mappedFlatArray = array.flatMap(a => a+'run') - will first flat and then map into a new array.
for flatMap(), you can only go 1-level deep so if you need it deeper first create a new one using flat(2)

String Trim:
Removes white spaces - functions trimStart() and trimEnd()

fromEntries:
The opposite of entries (es8) - turns array into objects:
array = [[a,1],[b,2],[c,3]]; -> const obj = Object.fromEntries(array) will give:
{a:1, b:2, c:3}

try-catch:
Before es10:
try { bob + 'hi'} catch (error) { console.log ('problem ' + error);}
Starting es10 - not obligated to use 'error' param:
try { bob + 'hi'} catch { console.log ('problem');}
*/

// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const neeArr = array.flat(2);


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];

greeting.flatMap(a => {return a.join(" "); })

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

greeting.flatMap(a => {return a.join(" ")}).join(" ")

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

trapped.flat(Infinity);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

const email = userEmail3.trim();
//or
userEmail3.trimEnd().trimStart()

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArr = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
usersArr.forEach(user => user[1] *= 2);

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
Object.fromEntries(usersArr);