import React from 'react'
import Card from 'react-bootstrap/Card'
import { Rating } from '../index'
import Button from 'react-bootstrap/Button'
import { useCartContext } from '../../context/CartProvider'

function Products({ product }) {

  const { 
    state: { cart },
    dispatch
   } = useCartContext();

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={product.image} alt={product.name}/>
        <Card.Title>
          {
            product.name
          }
        </Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>₹ {product.price.split('.')[0]} </span>
          {
            product.fastDelivery ? 
              <div>
                Fast Delivery
              </div>
              :
              <div>
                4 Day Delivery
              </div>
          }
          <Rating rating={product.rating}/>
        </Card.Subtitle>
        {
          cart.some( ( prod ) => prod.id === product.id ) ? (
            <Button 
              onClick={ () => dispatch( {
                type: "REMOVE_FROM_CART",
                payload: product.id
              } ) } 
              variant='danger'
            >
              Remove from Cart
            </Button>
          )
          :
          (
            <Button 
              onClick={ () => dispatch( {
                type: "ADD_TO_CART",
                payload: product
              } ) } 
              disabled={ !product.inStock }
              variant='primary'
            >
              {
                !product.inStock ? 
                  "Out of Stock"
                  :
                  "Add to Cart"
              }
            </Button>
          )
        }
      </Card>
    </div>
  )
}

export default Products