/*
    fetchSampleUsers() -- uses fetch to call https://jsonplaceholder.typicode.com/users,
    wrapped in try/catch/finally. On success, returns an array of only { id, name, email } for
    each user. On any error, logs the error and returns [].

    fetchSampleUsersPromise() -- same result as fetchSampleUsers(), but written using
    .then() / .catch() chaining instead of async/await (no try/catch, no await).

    Both functions must return a Promise that resolves to the same shape: an array of { id,
    name, email } objects
*/ 

export const fetchSampleUsers = async () => {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        return users.map(user => ({ id: user.id, name: user.name, email: user.email }));
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    } finally {
        console.log('Fetch attempt finished.');
    }
}

export const fetchSampleUsersPromise = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => users.map(user => ({ id: user.id, name: user.name, email: user.email })))
        .catch(error => {
            console.error('Error fetching users:', error);
            return [];
        })
        .finally(() => { console.log('Fetch attempt finished.'); });
}