const func1 = (name) => {
  const str = "My name is: ";

  const func2 = () => {
    return `${str} ${name}.`;
  };

  return func2;
};

const f = func1("Vasco");

// f === func2.
// f knows func1 scope even though it is not referenced

console.log(f()); //My name is: Vasco
