/*
NPM - packages library that was first created for Node but now has a lot of other stuff.
Packages are basically code pieces & scripts that you can import to your projects so you dont need to re-write it.
We downloaded Node.js and with that NPM was installed automatically as well.

To see active versions:
node -v
npm -v

Install pachages:
1. Globaly (-g) - you can run it in all your projects and from terminal. You won't see it as a package.json cause it exist globally
2. Locally - npm will install package that is only able to run in the folder where we install it

Two important packages because were using react:

1. live-server
Installed globally, and when you run live-server (command) it creates a fake server (which is actually your computer) that is listening for changes.
It will immidiatly open your index.html file and every 'save' on one of the folder's files will be detected and updated, no need to refresh
127.0.0.1:8080 -> local host, this is the address

2. Lodash
Extension of JS. More functions we can use with JS. This will be installed locally.
Once its installed a package.json will be crated in the folder, showing that the project is not depended on this package.
* Note - this is something to pay attention to, dependencies and version control.
* Another Note - packages can be heavy !! we need to consider how affective and usefull it is .

Usage of local package with Browserify (after package was installed):
In termial: npm install -g browserify
In termial : browserify ourJSfileName.js > bundle.js
In our JS file: var _=require('lodash');
To use one of lodash functions well do _.functionName();
* Note - we need to keep updating the bundle.js file with every change so run command #2 everytime you update

With Git:
No need to upload the node_modules to Git!
When you clone a project and run npm install - it will re-create the node library for you everytime.
NPM knows how to do it based on the package.json file.

NPM scripts:
Found in the package.json file and allows you to create kind of aliases for commonly used scripts. 
For example you can do:
"build" : "browserify myJSfileName.js > bundle.js"
Then you can use "npm run build" instead of typing it manually everytime
*/