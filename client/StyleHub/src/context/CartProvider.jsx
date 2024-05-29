import React, { useReducer } from 'react'
import CartContext from './CartContext'
import { faker } from '@faker-js/faker';
import { CartReducer } from './CartReducer';
import { useContext } from 'react';

function CartProvider({ children }) {

    const generateRandom = (arr) => {
        return arr[Math.floor(arr.length * Math.random())];
    }


    const products = [...Array(200)].map(() => ({
        id: faker.commerce.isbn(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        desc: faker.commerce.productDescription(),
        image: faker.image.urlLoremFlickr({ category: 'fashion' }),
        inStock: generateRandom([0, 3, 5, 7, 10, 13]),
        fastDelivery: faker.datatype.boolean(),
        rating: generateRandom([0, 1, 2, 3, 4, 5]),
        category: generateRandom(["All Categories", "Tops", "Bottoms", "Dresses", "Outerwear", "Activewear"])
    }));
    

    const [ state, dispatch ] = useReducer( CartReducer, {
        products,
        cart: []
    } );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
        {
            children
        }
    </CartContext.Provider>
  )
}

export default CartProvider;

export const useCartContext = () => {
    return useContext( CartContext );
}