export default class User {
    static getUser(url) {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch User.');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error Fetching User:', error);
                throw error;
            });
    }
}