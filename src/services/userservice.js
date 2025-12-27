export async function getUsers() {
    const API_URL = 'https://jsonplaceholder.typicode.com/users'
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error('response was not ok');
        }
        const data = await response.json()
        return data;
    }
    catch(error){
        console.error('Error fetching users:', error);
        return [];
    }
}