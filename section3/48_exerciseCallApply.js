// How could you implement this:

/* const array = [1,2,3];

function getMaxNumber(arr){
  // code here
}

getMaxNumber(array); // should return 3 */

// MY ANSWER

/* const array = [1, 2, 3];

function getMaxNumber(arr) {
  //return Math.max(...arr);
  // or
  //return Math.max.apply(null, arr);
}

console.log(getMaxNumber(array)); // should return 3 */

// COURSE ANSWER

const array = [1, 2, 3];

// in this case, the 'this' keyword doesn't matter!
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

getMaxNumber(array);
