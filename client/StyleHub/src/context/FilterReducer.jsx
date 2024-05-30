export const FilterReducer = (filterState, filterAction) => {
    switch (filterAction.type) {
        case "SORT_BY_PRICE":
            return {
                ...filterState,
                sort: filterAction.payload
            };
        case "FILTER_BY_STOCK":
            return {
                ...filterState,
                byStock: !filterState.byStock
            };
        case "FILTER_BY_DELIVERY":
            return {
                ...filterState,
                byFastDelivery: !filterState.byFastDelivery
            };
        case "FILTER_BY_RATING":
            return {
                ...filterState,
                byRating: filterAction.payload
            };
        case "FILTER_BY_SEARCH":
            return {
                ...filterState,
                searchQuery: filterAction.payload
            };
        case "CLEAR_FILTERS":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: ""
            };
        default:
            return filterState;
    }
};