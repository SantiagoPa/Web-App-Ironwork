import { types } from "../types/types";

/*

    product = {
                "price": 0,
                "amount": 0,
                "_id": "61ddebd6b3fc8eca2bb10c12",
                "name": "llave",
                "brand": "gucci",
                "__v": 0,
                "status": true
            },

    product.propiedad = nuevo valor

    item = product
*/



const initialState = {
    eventsProduct: [],
    actionEventProduct: null,
    salesProductForCustomer: [],
    buyProductForCustomer: [],
    salesProductForProvider: [],
    buyProductForProvider: [],
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
        
        case types.productAddSales:

            let newProduct = state
            .salesProductForCustomer
            .reduce(
                (acc, el) => {
                    if (el._id === action.payload._id) {
                        acc = el;
                        return acc;
                    }else {
                        acc = action.payload;
                        return acc;
                    }

                }
            ,action.payload);

            let selectProduct = state
            .salesProductForCustomer
            .find(
                product => product._id === action.payload._id
            )

            if(newProduct){

                return {
                    ...state,
                    salesProductForCustomer: [
                        ...state.salesProductForCustomer,
                        newProduct
                    ],

                    buyProductForCustomer: [
                        ...state.buyProductForCustomer,
                        (selectProduct)
                        ? null
                        : newProduct
                    ]

                }               
            }
            break;

        case types.productRemoveToSales:
            return {
                ...state,
                salesProductForCustomer: state.salesProductForCustomer.filter(
                    e => ( e._id !== action.payload )
                ),
                buyProductForCustomer: state.buyProductForCustomer.filter(
                    e => ( e !== null )
                ).filter(
                    e => (e._id !== action.payload)
                ),

            }
        
        case types.clearProductSales:
            return {
                ...state,
                salesProductForCustomer: [],
                buyProductForCustomer: []
            }

        case types.buyProductForCustmer: 
             return {
                 ...state
             }
        
        case types.productAddSalesForProvider:

            let newProductProvider = state
            .salesProductForProvider
            .reduce(
                (acc, el) => {
                    if (el._id === action.payload._id) {
                        acc = el;
                        return acc;
                    }else {
                        acc = action.payload;
                        return acc;
                    }

                }
            ,action.payload);

            let selectProductProvider = state
            .salesProductForProvider
            .find(
                product => product._id === action.payload._id
            )

            if(newProductProvider){

                return {
                    ...state,
                    salesProductForProvider: [
                        ...state.salesProductForProvider,
                        newProductProvider
                    ],

                    buyProductForProvider: [
                        ...state.buyProductForProvider,
                        (selectProductProvider)
                        ? null
                        : newProductProvider
                    ]

                }               
            }
            break;

        case types.productRemoveToSalesForProvider:
            return {
                ...state,
                salesProductForProvider: state.salesProductForProvider.filter(
                    e => ( e._id !== action.payload )
                ),
                buyProductForProvider: state.salesProductForProvider.filter(
                    e => (e._id !== action.payload)
                ),

            }
        
        case types.clearProductSalesForProvider:
            return {
                ...state,
                salesProductForProvider: [],
                buyProductForProvider: [],
            }
    
        default:
            return state;
    }
}