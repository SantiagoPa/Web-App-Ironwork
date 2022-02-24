
export const getCustomerByName = ( name = '',  eventsCustomer) => {
    
    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return eventsCustomer.filter( customer => customer.name.toLocaleLowerCase().includes(name));
}