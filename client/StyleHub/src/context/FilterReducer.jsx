export const FilterReducer = ( state, action ) => {
    switch(action.type){
        case "SORT_BY_PRICE":
            return {
                ...state,
                sort: action.payload
            };
        case "FILTER_BY_STOCK":
            return {
                ...state,
                byStock: !byStock
            };
        case "FILTER_BY_DELIVERY":
            return {
                ...state,
                byFastDelivery: !byFastDelivery
            };
        case "FILTER_BY_RATING":
            return {
                ...state,
                byRating: !byRating
            };
        case "FILTER_BY_SEARCH":
            return {
                ...state,
                searchQuery: action.payload
            };
        case "CLEAR_FILTER":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: ""
            };
        default:
            return state;
    }
}