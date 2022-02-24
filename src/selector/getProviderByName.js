export const getProviderByName = ( name = '',  eventsProvider) => {
    
    if (name === '') {
        return [];
    }

    name = name.toLocaleLowerCase();
    return eventsProvider.filter( provider => provider.name.toLocaleLowerCase().includes(name));
}