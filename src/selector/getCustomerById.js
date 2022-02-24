export const getCustomerById = ( id , customers ) => {
    return customers.find( customer => customer._id === id );
}