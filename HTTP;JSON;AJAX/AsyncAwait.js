/*

AsyncAwait - A function that returns a promise, makes code easier to read
We declare a function as 'async', then we use await in front of any function that returns a promise.
The code is very sync like so we can asign every promise to a variable and use it.


*/

//This is a promise syntax:

fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => console.log(users));

//Same in a AsyncAwait :

async function fetchUsers() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	console.log(data);
}

//Promise syntax to run on array and fetch:

const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/users'
]

Promise.all(urls.map(url => {
	return fetch(url).then(response => response.json())
})).then(results => {
	console.log(results);
}).catch(() => console.log('error'))

// AsyncAwait combined with promise:
// With AsyncAwait we have to use try catch (we dont have the .catch like we have with promise)

const getData = async function(){
	try {
		const [ users, posts, albums ] = await Promise.all(urls.map(url => {
		return fetch(url).then(response => response.json())
		}))
		console.log('users', users);
		console.log('posts', posts);
		console.log('albums', albums);	
	} catch (err){
		console.log('error occured', err);
	}	
}


// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

async function fetchStar(){
	const resp = await fetch('https://swapi.co/api/starships/9/');
	const data = await resp.json();
	console.log(data);
}

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}

//Answer:
const getData = async function() {
	try{
		const [ users, posts, albums ] = await Promise.all(urls.map(async (url) => {
	    const resp = await fetch(url);
	    const data = await resp.json();
	    return data;
	  	}));
	  	console.log('users', users);
	  	console.log('posta', posts);
	  	console.log('albums', albums);		
	} catch (err){
		console.log("Error fetching URLs");
	}
  
}



// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholdeTYPO.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]