import { useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";
import FilterContext from "./FilterContext";

function FilterProvider({ children }) {
    const [ filterState, filterDispatch ] = useReducer( CartReducer, {
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