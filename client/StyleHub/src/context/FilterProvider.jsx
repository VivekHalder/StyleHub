import { useContext, useReducer } from "react";
import FilterContext from "./FilterContext";
import { FilterReducer } from "./FilterReducer";

function FilterProvider({ children }) {
    const [ filterState, filterDispatch ] = useReducer( FilterReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ""
    } );


    return (
        <FilterContext.Provider value={{ filterState, filterDispatch }}>
            {
                children
            }
        </FilterContext.Provider>
    )
}

export default FilterProvider;

export const useFilterContext = () => {
    return useContext( FilterContext );
}