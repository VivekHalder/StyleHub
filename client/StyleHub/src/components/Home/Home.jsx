import React from 'react'
import { useCartContext } from '../../context/CartProvider'
import { Products, Filter } from '../index';
import "../style.css"

function Home() {

    const { state: { products } } = useCartContext();

  return (
    <div className='flex'>
        <Filter/>
        <div className='productContainer flex grid'>
            {
                products.map((product) => (
                    <Products product={ product } key={ product.id }/>
                ))
            }
        </div>
    </div>
  );
}

export default Home