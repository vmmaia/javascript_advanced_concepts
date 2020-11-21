//How would you compare two objects if they are pointing to a different location in memory but still have the same properties?

/* var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
alert(eq); // gives false */

// MY SOLUTION

var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };

var eq = JSON.stringify(user1) === JSON.stringify(user2);

console.log(eq); // gives false

// COURSE SOLUTION
// https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
