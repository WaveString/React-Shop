export function fetchProducts() {
    return fetch(`${process.env.API_URL}/products`, {
        method: 'GET'
    });
}

export function uploadImage(data) {
    return fetch(`${process.env.API_URL}/images`, {
        method: 'POST',
        body: data
    });
}
