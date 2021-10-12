export default async function apiCall({
    url,
    method = 'get',
    bosy,
    headers,
}){
    try {
        const response = await fetch(url,{
        method,
        bosy,
        headers,
    });

    return response.json();
    } catch (error) {
        Promise.reject(error);
    }
    
}
 
