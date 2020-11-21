// var is partially hoisted and functions are fully hoisted

console.log(one); // undefined (not reference error)

var one = 1;
var one = 2;

console.log(one); // 2

a(); // bye

function a() {
  console.log("hi");
}

a(); // bye

function a() {
  console.log("bye");
}

a(); // bye
