const multiplyBy = (a) => {
  return (b) => {
    return a * b;
  };
};

const multiplyByTwo = multiplyBy(2);
const multiplyByTen = multiplyBy(10);

console.log(multiplyByTen(5));
