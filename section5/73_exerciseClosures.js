/* function callMeMaybe() {
  const callMe = 'Hi! I am now here!';
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
} */

function callMeMaybe() {
  setTimeout(() => {
    console.log(callMe);
  }, 4000);
  const callMe = 'Hi! I am now here!';
}

callMeMaybe();
