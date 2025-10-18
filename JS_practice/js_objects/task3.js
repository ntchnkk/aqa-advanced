const car1 = {
  brand: 'DeLorean Motor Company',
  model: 'DMC-12',
  year: 1983,
};

const car2 = {
  brand: 'Chevrolet',
  model: 'Impala',
  owner: 'Dean Winchester',
};

const car3 = { ...car1, ...car2 };

console.log(car3);
