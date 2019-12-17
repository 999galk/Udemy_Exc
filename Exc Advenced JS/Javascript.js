/*

Program - allocates memory, parse and execute - read&write commands
Memory
Every global variable is processed by the javascript engine (v8) and put into the memory heap
Memory leak - when you have unused memory laying around, variables you're not using..

Call stack
The part that reads and executes commands

Javascript is a single threaded language that can be non-blocking
- the call stack enters commands like push to a stack (first in last out), executes each line and removes it
-> multi thread = when there are more than 1 stack in the system works in parallel. Javascript is single threaded  meaning 1 command executed at a time -
to avoid issues related to multi thread work (locks, override)
synchronous work when the next command won't start until the previous one is finished
stackover flow - when the stack gets too many commands and doesn't get to handle it fast enough - so the memory heap gets filled up
BUT javascript is also non blocking and we use asynchronous to do that - we set Timeout for functions that we know are heavier - its actually a delay of the time when the command will get into the call stack

Javascript Runtime environment :
We have the engine - V8 that has Memory heap and Call stack
we have the Web API that has the DOM , AJAX and Timeout - these have their own queue (stack)
We have the callback queue and the event loop

When program starts running the javascript engine puts synced actions into the call stack לפי הסדר שלהן , and the timeout actions into the Web API queue גם לפי הסדר
Actions in the call stack starts running, its supposed to be the lighter actions so should be fast.
when the timeout period of actions in the timeout queue is over the task turn to be a callback() action in the callback queue. It Doesn't have to be timeout, it can be other events like onClick, onLoad..
The event loop is a components that checks the call stack if its empty and once its empty it runs the callback

JS Modules:
History : we used inline scripts (implemented directly in the html), then script tags calling external files, then IIFE used to "Immediately Invoked Function Expression"
Then: commonJS & Browserify -> a Module bundle is used to create modules and then import them in every different file where it needs to be used.
No need to think about the js files order of global env getting polluted , global functions are now modules that can be used everywhere - you export a module, then you can require it in another file
Now: ES6+Webpack2 = finally a module system! ->
ES6 allows to export (or export default) a function and then you can import it where ever you want
The Webpack2 is a browser module bundle (bundles javascript files), it also allows to use ES6 in all browsers
When something is made available to other modules, it’s called an export. Once you have an export, other modules can explicitly say that they depend on that variable, class or function.


*/

Question 1: Clean the room function:
given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const origin = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function order(arr){
    arr.sort((a, b)=>a-b);
    let temp,tempArr=[];
    const newArr = [];

    while (arr.length > 0){
       temp = arr[0];
       tempArr = arr.filter(a => a === temp );
       if(tempArr.length > 1){
            newArr.push(tempArr);
       }
       else newArr.push(temp);
       arr = removeTemp(arr,temp);
       tempArr = [];
    }
    return newArr;
}

function removeTemp(arr,x){
    while (arr.indexOf(x) !== -1){
        arr.splice(arr.indexOf(x),1);
    }
    return arr;
}

Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const array = [[1,2,3],1,3,2,1,1,[4,4,4],5,67];
function find(arr, target){
    arr = arr.flat(Infinity);
    arr = arr.filter(a => a <= target);
    arr = arr.sort((a, b)=>a-b);
    arr = removeDup(arr);
    for (let i=0; i<arr.length; i++){
        for (let j=arr.length-1;j>0;j--){
            if(arr[i] + arr[j] === target){
                return [arr[i],arr[j]];
            }
        }
    }
    return 'no possible match';
}

function removeDup(arr){
    let tempArr = [];
    arr.forEach(a => {
        if(tempArr.includes(a) === false)
            tempArr.push(a);
    });
    return tempArr;
}

Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.