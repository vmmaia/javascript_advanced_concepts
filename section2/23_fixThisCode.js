// This recursive function creates a stack overflow.
// How can you fix this code by still keeping the recursive call around,
// but only adding something that you have learned in this section to
// not cause this stack overflow.

/* const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    removeItemsFromList();
  }
}

removeItemsFromList(); */

// MY SOLUTION - works

/* const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(() => removeItemsFromList(), 0);
  }
}

removeItemsFromList(); */

// COURSE SOLUTION

const list = new Array(60000).join("1.1").split(".");

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(removeItemsFromList, 0);
  }
}

removeItemsFromList();

list;
