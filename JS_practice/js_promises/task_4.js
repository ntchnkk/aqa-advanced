import ToDo from './task_4.1.js';
import User from './task_4.2.js';

const promiseAll = Promise.all([
  ToDo.getToDo('https://jsonplaceholder.typicode.com/todos/1'),
  User.getUser('https://jsonplaceholder.typicode.com/users/1'),
]);
promiseAll.then(console.log).catch((error) => console.log('Promise.all Error:', error));

const promiseRace = Promise.race([
  ToDo.getToDo('https://jsonplaceholder.typicode.com/todos/1'),
  User.getUser('https://jsonplaceholder.typicode.com/users/1'),
]);
promiseRace.then(console.log).catch((error) => console.log('Promise.race Error:', error));
