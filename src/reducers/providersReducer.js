import { types } from "../types/types";


const initialState={
    eventsProvider: [],
    actionEventProvider: null,
    switchProvider: null
}

export const providersReducer = ( state = initialState, action) => {
    switch (action.type) {
        
        case types.providerSetActive:
            return{
                ...state,
                actionEventProvider: action.payload,
            }
        
        case types.providerClearActiveEvent:
            return {
                ...state,
                actionEventProvider: null
            }
        
        case types.providerAddNew:
            return {
                ...state,
                eventsProvider: [
                    ...state.eventsProvider,
                    action.payload,
                ]
            }
        
        case types.providerUpdated:
            return {
                ...state,
                eventsProvider: state.eventsProvider.map(
                    e => ( e._id === action.payload._id ) ? action.payload : e
                )
            }

        case types.providerDeleted:
            return {
                ...state,
                eventsProvider: state.eventsProvider.filter(
                    e => ( e._id !== action.payload )
                ),
                actionEventProvider: null
            }
        
        case types.providerLoaded:
            return {
                ...state,
                eventsProvider: [ ...action.payload ]
            }
        
        case types.switchProviderList:
            return {
                ...state,
                switchProvider: action.payload
            }
    
        default:
            return state;
    }
}