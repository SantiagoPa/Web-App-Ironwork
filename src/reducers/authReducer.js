import { types } from "../types/types";

const initialState = {
    checking: true,
    // uid: null,
    // nmae: null
}

export const authReducer = ( state=initialState, action ) => {
    
    switch (action.type) {
        case types.authLogin:
            const data = action.payload
            // console.log(action.payload)
            return {
                ...state,
                ...data,
                checking: false
            }
            
        case types.authLogout:
            return {
                checking: false
            }
        
        case types.authChekingFinish:
            return {
                ...state,
                checking: false
            }

        default:
            return state;
    }
}