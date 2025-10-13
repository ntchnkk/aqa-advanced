export default class ToDo {
    static getToDo(url) {
        return fetch(url)
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
}
