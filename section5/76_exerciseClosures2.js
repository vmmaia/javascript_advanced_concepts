/* let view;

function initialize() {
  view = 'mountain';
  console.log('view has been set!');
}

initialize();
initialize();
initialize();

console.log(view); */

let view;

function initialize() {
  let initialized = false;

  view = 'mountain';

  return () => {
    if (!initialized) {
      initialized = true;
      console.log('view has been set!');
    }
  };
}

const initializer = initialize();
initializer();
initializer();
initializer();

console.log(view);
