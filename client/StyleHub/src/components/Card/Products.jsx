import React from 'react'
import Card from 'react-bootstrap/Card'
import { Rating } from '../index'
import Button from 'react-bootstrap/Button'

function Products({ product }) {
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
        <Button variant='danger'>
          Remove from Cart
        </Button>
        <Button disabled={!product.inStock}>
          {
            !product.inStock ? 
              "Out of Stock"
              :
              "Add to Cart"
          }
        </Button>
      </Card>
    </div>
  )
}

export default Products