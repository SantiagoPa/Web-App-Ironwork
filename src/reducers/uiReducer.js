import { types } from "../types/types";

const initialState = {
    modalOpenUserC: false,
    modalOpenUserU: false,
    modalOpenProductC: false,
    modalOpenProductU: false,
    modalOpenCustomerC: false,
    modalOpenCustomerU: false,
}

export const uiReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.uiOpenModalUserU:
            return {
                ...state,
                modalOpenUserU: true
            }
        
        case types.uiCloseModalUserU:
            return {
                ...state,
                modalOpenUserU: false
            }
         
        case types.uiOpenModalUserC:
            return {
                ...state,
                modalOpenUserC: true
            }

        case types.uiCloseModalUserC:
            return{
                ...state,
                modalOpenUserC: false
            }
        case types.uiOpenModalProductC:
            return {
                ...state,
                modalOpenProductC: true
            }
        case types.uiCloseModalProductC:
            return {
                ...state,
                modalOpenProductC: false
            }
        case types.uiOpenModalProductU:
            return {
                ...state,
                modalOpenProductU: true
            }
        case types.uiCloseModalProductU:
            return{
                ...state,
                modalOpenProductU: false
            }
        
        case types.uiOpenModalCustomerC:
            return{
                ...state,
                modalOpenCustomerC: true
            }
        
        case types.uiCloseModalCustomerC:
            return{
                ...state,
                modalOpenCustomerC: false
            }
        
        case types.uiOpenModalCustomerU:
            return {
                ...state,
                modalOpenCustomerU: true
            }
        
        case types.uiCloseModalCustomerU:
            return{
                ...state,
                modalOpenCustomerU: false
            }

        default:
            return state;
    }


}