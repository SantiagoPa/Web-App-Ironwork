import { types } from "../types/types";

const initialState = {
    eventsTransaction: [],
    eventsPurchases: [],
}

export const transactionReducer = ( state =initialState, action) => {
    switch (action.type) {
        
        case types.transactionAddNew:
            
            return {
                ...state,
                eventsTransaction: [
                    action.payload,
                    ...state.eventsTransaction,
                ]
            }
        
        case types.purchaseAddNew:
            return {
                ...state,
                eventsPurchases: [
                    action.payload,
                    ...state.eventsPurchases
                ]
            }
        
        case types.transactionLoaded:
            return {
                ...state,
                eventsTransaction: [ ...action.payload ]
            }
        
        case types.purchasesLoaded:
            return {
                ...state,
                eventsPurchases: [ ...action.payload ]
            }
    
        default: return state;
    }

}