const array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log('I am at index ' + array[i]);
  }, 1000);
}

for (var i = 0; i < array.length; i++) {
  (function (closureI) {
    setTimeout(() => {
      console.log('I am at index ' + array[closureI]);
    }, 1000);
  })(i);
}
