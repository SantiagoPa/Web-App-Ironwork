import { types } from "../types/types";

/*

    {
        "price": 0,
        "amount": 0,
        "_id": "61ddebd6b3fc8eca2bb10c12",
        "name": "llave",
        "brand": "gucci",
        "__v": 0,
        "status": true
    },

*/

const initialState = {
    eventsProduct: [],
    actionEventProduct: null,
    switchProduct: null
}

export const productsReducer = (state=initialState, action) => {
    
    switch (action.type) {

        case types.productSetActive:
            return{
                ...state,
                actionEventProduct: action.payload
            }
        
        case types.productClearActiveEvent:
            return {
                ...state,
                actionEventProduct: null
            }

        case types.productAddNew:
            return {
                ...state,
                eventsProduct: [
                    ...state.eventsProduct,
                    action.payload
                ]
            }
        
        case types.productUpdated:
            return {
                //  e => (e.uid === action.payload.uid ) ? action.payload : e
                ...state,
                eventsProduct: state.eventsProduct.map(
                    e => (e._id === action.payload._id ) ? action.payload : e
                )
            }
    
        case types.productDeleted:
            return {
                ...state,
                eventsProduct: state.eventsProduct.filter(
                    e => ( e._id !== action.payload )
                ),
                actionEventUser: null
            }
        
        case types.productLoaded:
            return {
                ...state,
                eventsProduct: [...action.payload]
            }
        
        case types.switchProductList:
            return {
                ...state,
                switchProduct: action.payload
            }
    
        default:
            return state;
    }
}