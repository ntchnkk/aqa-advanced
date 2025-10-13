//1.1
async function getTodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Failed to fetch Todo.');
        }
        const toDo = await response.json();
        return toDo;
    } catch (error) {
        console.error('Error Fetching ToDo:', error);
        throw error;
    }
}

//1.2
async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        if (!response.ok) {
            throw new Error('Failed to fetch User.');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error Fetching User:', error);
        throw error;
    }
}

//2
const promiseAll = Promise.all([getTodo(), getUser()]);
promiseAll.then(console.log).catch((error) => console.log("Promise.all Error:", error));

const promiseRace = Promise.race([getTodo(), getUser()]);
promiseRace.then(console.log).catch((error) => console.log("Promise.race Error:", error));