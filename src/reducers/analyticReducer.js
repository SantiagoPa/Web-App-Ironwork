import { types } from "../types/types";

const initialState = {
   topSellers: [],
   salesForTrimester: [],
   salesForSemestes: [],
   salesForMonth: [],
}

export const analyticReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case types.analyticsTopSellersLoaded:
            return {
                ...state,
                topSellers:  action.payload 
            }
        
        case types.analyticsCardTrimester:
            return {
                ...state,
                salesForTrimester: action.payload
            }
        case types.analyticsCardSemester:
            return {
                ...state,
                salesForSemestes: action.payload
            }
    
        case types.analyticsChartYear:
            return {
                ...state,
                salesForMonth: action.payload
            }

        default: return state;
    }
}