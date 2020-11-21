/* function heavyDuty(index) {
  const bigArray = new Array(7000).fill('Vasco');
  console.log('created!');
  return console.log(bigArray[index]);
}

heavyDuty(688);
heavyDuty(688);
heavyDuty(688);
heavyDuty(688); */

function heavyDuty() {
  const bigArray = new Array(7000).fill('Vasco');
  console.log('created!');
  return (index) => {
    console.log(bigArray[index]);
  };
}

const hv = heavyDuty();

hv(688);
hv(688);
hv(688);
hv(688);
