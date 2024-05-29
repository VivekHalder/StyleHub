export const CartReducer = ( state, action ) => {
    switch (action.type){
        case "ADD_TO_CART":
            return { 
                ...state, 
                cart: [ ...state.cart, { ...action.payload, qty: 1 } ],
                total: state.total + ( Number(action.payload.price.split('.')[0] ) )
            };
        case "REMOVE_FROM_CART":
            return { 
                ...state, 
                cart: state.cart.filter( ( prod ) => prod.id !== action.payload.id ),
                total: state.total - ( action.payload ? parseFloat(action.payload.price.split('.')[0]) : 0 ) 
            };
        default:
            return state;
    }
}