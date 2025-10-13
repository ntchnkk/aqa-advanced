const person = {
  firstName: 'Ben',
  lastName: 'Kenobi',
  age: 35,
};

person.email = 'BenKenobi@starwars.com';

delete person.age;

console.log(person);
