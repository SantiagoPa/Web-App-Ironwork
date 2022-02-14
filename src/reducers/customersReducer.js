import { types } from "../types/types";

/*
    {
    
      "name": "",
      "type": COMPANY, NATURAL,
      "CC": "",
      "RUT": "",
      "NIT": "",
      "email": "test@test.com",
      "address": "xxxxx",
      "phone": "",
      "status": ""  

    }

*/

const initialState = {
    eventsCustomer: [],
    actionEventCustomer: null,
    switchCustomer: null
}

export const customersReducer = ( state =initialState, action) => {


    switch (action.type) {
        
        case types.customerSetActive:
            return{
                ...state,
                actionEventCustomer: action.payload
            }

        
        case types.customerClearActiveEvent:
            return {
                ...state,
                actionEventCustomer: null
            }
        
        case types.customerAddNew:
            return {
                ...state,
                eventsCustomer: [
                    ...state.eventsCustomer,
                    action.payload
                ]
            }
        
        case types.customerUpdated:
            return {
                //  e => (e.uid === action.payload.uid ) ? action.payload : e
                ...state,
                eventsCustomer: state.eventsCustomer.map(
                    e => (e._id === action.payload._id ) ? action.payload : e
                )
            }


        case types.customerDeleted:
            return{
                ...state,
                eventsCustomer: state.eventsCustomer.filter(
                    e => ( e._id !== action.payload )
                ),
                actionEventCustomer: null
            }
        
            
        case types.customerLoaded:
            return {
                ...state,
                eventsCustomer: [ ...action.payload ]
            }
                
        case types.switchCustomerList:
            return {
                ...state,
                switchCustomer: action.payload
            }

        default:
            return state;
    }
}
