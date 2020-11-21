/* const a = function () {
  console.log("a ", this);

  const b = function () {
    console.log("b ", this);

    const c = {
      hi: function () {
        console.log("c ", this);
      },
    };

    c.hi();
  };

  b();
};

a(); */

// what will happen?

// MY ANSWER
// a global, b global, c obj c

// global.a()
// global.a(b())
// global.a(b(c.hi()))

/* const obj = {
  name: "Billy",
  sing() {
    console.log("a ", this);
    var anotherFunc = function () {
      console.log("b ", this);
    };
    anotherFunc();
  },
};

obj.sing(); */

// What will happen?

// MY ANSWER
// a obj, b global

const obj = {
  name: "Billy",
  sing() {
    console.log("a ", this);
    var anotherFunc = () => {
      console.log("b ", this);
    };
    anotherFunc();
  },
};

obj.sing();

// What will happen?

// MY ANSWER
// a obj, b obj
