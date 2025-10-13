//1.1
function getTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch Todo.');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error Fetching ToDo:', error);
      throw error;
    });
}

//1.2
function getUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch User.');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error Fetching User:', error);
      throw error;
    });
}

//2
const promiseAll = Promise.all([getTodo(), getUser()]);
promiseAll.then(console.log).catch((error) => console.log('Promise.all Error:', error));

const promiseRace = Promise.race([getTodo(), getUser()]);
promiseRace.then(console.log).catch((error) => console.log('Promise.race Error:', error));
