const getHeaders = (token) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    if (token) {
        headers['Authorization'] = token;
    }

    return headers;
};

export function fetchProducts() {
    return fetch(`${process.env.API_URL}/products`, {
        method: 'GET'
    });
}

export function loginUser(data) {
    return fetch(`${process.env.API_URL}/login`, {
        headers: getHeaders(),
        method: 'POST',
        body: JSON.stringify(Object.assign({}, data))
    });
}

export function getUser() {
    const token = localStorage.getItem('token');

    return fetch(`${process.env.API_URL}/user`, {
        headers: getHeaders(token),
        method: 'GET'
    });
}

export function uploadImage(data) {
    return fetch(`${process.env.API_URL}/images`, {
        headers: getHeaders(),
        method: 'POST',
        body: JSON.stringify(Object.assign({}, data))
    });
}
