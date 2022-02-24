export const getProductByName = ( name = '',  eventsProduct) => {
    
    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return eventsProduct.filter( product => product.name.toLocaleLowerCase().includes(name));
}