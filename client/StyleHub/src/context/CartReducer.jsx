export const CartReducer = ( state, action ) => {
    switch (action.type){
        case "ADD_TO_CART":
            return { 
                ...state, 
                cart: [ ...state.cart, { ...action.payload, qty: 1 } ]
            };
        case "REMOVE_FROM_CART":
            return { 
                ...state, 
                cart: state.cart.filter( ( prod ) => prod.id !== action.payload )
            };
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id
                    ? { ...product, qty: action.payload.qty }
                    : product
                )
            };
        default:
            return state;
    }
}