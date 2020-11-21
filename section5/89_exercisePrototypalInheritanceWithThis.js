// How would you be able to create your own .bind() method using call or apply.
// HINT: Function.prototype.bind = function(){}

// COURSE SOLUTION
Function.prototype.bind = function (whoIsCallingMe) {
  const self = this;
  return function () {
    return self.apply(whoIsCallingMe, arguments);
  };
};
