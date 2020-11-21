var favouriteFood = "grapes";

var foodThoughts = function () {
  console.log("Original favourite food: " + favouriteFood);

  var favouriteFood = "sushi"; // variable is hoisted because of var keyword => undefined

  console.log("New favourite food: " + favouriteFood);
};

foodThoughts();

/* What will happen?

MY ANSWER (correct)

Original favourite food: undefined
New favourite food: sushi */
