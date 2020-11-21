var b = {
  name: "Jay",
  say() {
    console.log(this);
  },
};

var c = {
  name: "Jay",
  say() {
    return function () {
      console.log(this);
    };
  },
};

var d = {
  name: "Jay",
  say() {
    return () => {
      console.log(this);
    };
  },
};

b.say(); // obj b
c.say()(); // global
d.say()(); // obj d
