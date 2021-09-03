
export const productsFakeStore = async () => {
    const url = 'https://fakestoreapi.com/products';
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}