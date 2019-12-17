var getAge = function(){
console.log("started get age");
var age=prompt("please enter your age:");
checkDriverAge(age);
}
var checkDriverAge = function(age){
if (Number(age) < 18) {
	console.log("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	console.log("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	console.log("Congratulations on your first year of driving. Enjoy the ride!");
}
}
//getAge();

var arrayExc = function(){
var array = ["Banana", "Apples", "Oranges", "Blueberries"];
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array);
array.shift();
console.log(array);
array.sort();
console.log(array);
array.push("Kiwi");
console.log(array);
var a=array.indexOf("Apples");
array.splice(a,1);
console.log(array);
array.reverse();
console.log(array);
console.log(array2[1][1][0]);
}

//arrayExc();

var objExc = function(){
    var user={username:"",password:""};
    console.log(user);
    var database=[];
    user.username="Gal";
    user.password="123";
    console.log(user);
    database.push(user);
    console.log(database);
    var newsfeed=[{username:"",timeline:""},{username:"",timeline:""},{username:"",timeline:""}];
    console.log(newsfeed);
}

objExc();

