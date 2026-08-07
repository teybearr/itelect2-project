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
        .finally(() => { 
            console.log('Fetch attempt finished.'); 
        });
}