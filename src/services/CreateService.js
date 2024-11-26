const baseUrl = 'http://localhost:3030/data'

export const create = async (token) => {
    let response = await fetch(`${baseUrl}/pizza`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({likes: []})
    });

    let result = await response.json();

    return result;
}   