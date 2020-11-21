const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;

const multiplyBy2 = (val) => curriedMultiply(2)(val);

console.log(multiply(2, 5)); //10
console.log(curriedMultiply(2)(5)); //10
console.log(multiplyBy2(5)); //10
