import React from 'react'
import { useCartContext } from '../../context/CartProvider'
import { Products, Filter } from '../index';
import "../style.css"
import { useFilterContext } from '../../context/FilterProvider';

function Home() {

    const { state: { products } } = useCartContext();
    const { filterState: { 
        sort,
        byStock,
        byFastDelivery,
        byRating,
        searchQuery,
    } } = useFilterContext();

    const transformProducts = () => {
        let sortedProducts = products;

        if(sort){
            sortedProducts = sortedProducts.sort( ( a, b ) => 
                sort === "lowToHigh" ? 
                a.price - b.price 
                :
                b.price - a.price
            )
        }

        if(!byStock){
            sortedProducts.filter((product) => product.inStock);
        }

        if(!byFastDelivery){
            sortedProducts.filter((product) => product.fastDelivery);
        }

        if(!byRating){
            sortedProducts.filter((product) => product.rating >= byRating);
        }

        if(searchQuery){
            sortedProducts.filter((product) => product.name.toLowerCase().includes(searchQuery));
        }

        return sortedProducts;
    }

  return (
    <div className='flex'>
        <Filter/>
        <div className='productContainer'>
            {
                transformProducts().map((product) => (
                    <Products product={ product } key={ product.id }/>
                ))
            }
        </div>
    </div>
  );
}

export default Home