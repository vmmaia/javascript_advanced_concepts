const increment = (val) => val + 1;

const compose = (func1, func2) => (val) => func1(func2(val));

console.log(compose(increment, increment)(10)); //12
