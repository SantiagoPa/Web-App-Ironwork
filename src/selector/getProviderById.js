export const getProviderById = ( id , providers ) => {
    return providers.find( provider => provider._id === id );
}