import { types } from "../types/types";

/*
    {
        "name": "sofy",
        "email": "test4@test.com",
        "role": "ADMIN_ROLE",
        "state": true,
        "google": false,
        "uid": "61de3141b65f3a23e466a536"
    }

*/

const initialState = {
    eventsUser: [],
    actionEventUser: null,
    switchUser: null
}

export const usersReducer = ( state =initialState, action) => {

    switch ( action.type ) {

        case types.userSetActive:
            return{
                ...state,
                actionEventUser: action.payload
            }
            
        case types.userClearActiveEvent:
            return {
                ...state,
                actionEventUser: null
            }
            
        case types.userAddNew:
            return {
                ...state,
                eventsUser: [
                    ...state.eventsUser,
                    action.payload
                ]
            }
        

        case types.userUpdated:
            return {
                //  e => (e.uid === action.payload.uid ) ? action.payload : e
                ...state,
                eventsUser: state.eventsUser.map(
                    e => (e.uid === action.payload.uid ) ? action.payload : e
                )
            }

        case types.userDeleted:
            return {
                ...state,
                eventsUser: state.eventsUser.filter(
                    e => ( e.uid !== action.payload )
                ),
                actionEventUser: null
            }
        
        case types.userLoaded:
            return {
                ...state,
                eventsUser: [ ...action.payload ]
            }

        case types.switchUserList:
            return {
                ...state,
                switchUser: action.payload
            }
            
        default:
            return state;
    }
}