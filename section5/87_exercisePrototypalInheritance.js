//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.

/* new Date('1900-10-10').lastYear() */
//'1899'

// MY SOLUTION

/* Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

console.log(new Date('1900-10-10').lastYear()); */

//#Bonus
// Mofify .map() to print 'map' at the end of each item.
/* console.log([1,2,3].map()) */
//1map, 2map, 3map

// MY SOLUTION

/* Array.prototype.map = function () {
  let res = '';

  this.forEach((element) => {
    res += `${element}map, `;
  });

  return res.slice(0, res.length - 2);
};

const arr = [1, 2, 3];

console.log(arr.map()); */

// COURSE SOLUTION

//Array.map() => to print '🗺'
Array.prototype.map = function () {
  // what happens with arrow function here?
  arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + '🗺');
  }
  return arr;
};
console.log([1, 2, 3].map());

//Date object => to have method .yesterday() which shows you yesterday's day in 'YYYY-MM-DD' format.
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

new Date('1900-10-10').lastYear();
// don't worry if you didn't get this... we will expand on this later.
