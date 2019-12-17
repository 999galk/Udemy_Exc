/*
Reference Type:
Passed by value ->
primitive variable types are passed by value , meaning its assigned to the variable as a copy of the value.
If a=5 and b=a - if you do b++ it will change b but won't change a. b is not referencing a, its just copied its values and then its independent.
Passed by reference ->
This is true for objects and its the same idea as pointers - if you assign object1 = object2 -> you just create a reference for object1 to object2.
If object2 content will be changed you will see the changes in object1 as well, cause its just referencing to the same memory address as object2

Shallow clone ->
If you do want to have another object with the same content as another object but not depended on it - you can clone this object to a new one:
let newClonedObj = Object.assign({},obj); --> the {} means create a new object, the obj is the original object you want to copy
Another syntax for the same purpose is : let newCloneObj2 = {...obj};
Its called a shallow clone cause if the cloned object contains another object - the deeper one will be passed by reference.
Meaning - if any changed happen to the object that is inside the cloned object - it will changed in the new object as well.

Deep clone ->
To solve the above issue we use JSON:
let superClone = JSON.parse(JSON.stringify(obj)); -> it turns the obj to string and then parse it again as object
careful - it can be heavy to stringify a huge object and parse it again - performance issue may happen.

context:
The word "this" reflects the current object environment in which were at.
In the console - "this" will be the window.
Inside an object - "this" will be the object.

Instantiation:
Same concept as extend and inheritance in Java
class = an object we will probably want to make copies from. you can create instances of it using "const player1 = new Player".
You have class Player (capital at the beginning!), and have a constructor for it.
Then you can create another class that will extend from the Player class -
it will have its own constructor but it'll have to call super() - which is the father constructor.
In the extended function you can only use "this" after the father constructor ran.

Type Coercion:
The JS language has a built in type coercion that when comparions of 2 different types is asked - JS will try and convert the right type to the left type:
1 == '1' -> JS will convert the right side string ('1') to int 1.
This happens when you use '=='
If you use '===' it tells JS not to coerce the type , meaning 1==='1' will return false.

*/

//Evaluate these:
//#1
[2] === [2] //false
{} === {}  //true

//#2 what is the value of property a for each object.
const object1 = { a: 5 };
console.log('object1.a : ', object1.a)
const object2 = object1; // object2.a is first 5 then 4
console.log('object2.a : ', object2.a)
const object3 = object2; // object3.a is first 5 then 4
console.log('object3.a : ', object3.a)
const object4 = { a: 5}; // object4.a is 5 and stays 5
console.log('object4.a : ', object4.a)
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class.
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color.

class Animal {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
}
class Mamal extends Animal{
    constructor(name,type,color){
        super(name,type);
        this.color = color;
    }
    sound(){
        console.log(`moooo im ${this.name} and im a ${this.color} ${this.type}`);
    }
}
const cow = new Mamal('Shiphra','cow','dotted');
console.log(cow);
cow.sound();