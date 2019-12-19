//import { without } from 'lodash'; - this syntax is with webpack & es6
// console.log(without);

// To use the following we need npm install -g browserify
var _ = require('lodash');
//now in terminal we say : browserify BackgroundGradient.js > bundle.js, and replace the src in the html to it

console.log(_);
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);