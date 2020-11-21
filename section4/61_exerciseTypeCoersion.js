// JS can be weird when it comes to type coercion. Try to guess what the output for each of the lines below are:false == ""

console.log(false == []); // true
console.log(false == {}); // false
console.log("" == 0); // true
console.log("" == []); // true
console.log("" == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
