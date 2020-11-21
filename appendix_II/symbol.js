// Create unique references for ojects that are otherwise equal

// Usually used to differentiate between object keys

const a = Symbol("teste");
const b = Symbol("teste");

const obj1 = {
  ["teste"]: "hello1",
  ["teste"]: "hello2",
};

const obj2 = {
  [a]: "hello1",
  [b]: "hello2",
};

console.log(a === b); //false
console.log(obj1); // { teste: 'hello2' }
console.log(obj2); // { [Symbol(teste)]: 'hello1', [Symbol(teste)]: 'hello2' }
