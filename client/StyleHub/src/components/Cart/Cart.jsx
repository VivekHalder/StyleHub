import React, { useState } from 'react';
import { useCartContext } from '../../context/CartProvider';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { AiFillDelete } from 'react-icons/ai'
import { Rating } from '../index';
import '../style.css';


function Cart(){
    const 
        { 
            state: { cart, total }, 
            dispatch 
        } = useCartContext();

    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                    {
                        cart.map((product) => (
                            <ListGroup.Item key={product.id}>
                                <Row>
                                    <Col md={ 2 }>
                                        <Image src={product.image} fluid rounded/>
                                    </Col>
                                    <Col md={ 2 }>
                                        <span>
                                            { 
                                                product.name
                                            }
                                        </span>
                                    </Col>
                                    <Col md={ 2 }>
                                        {
                                            product.price
                                        }
                                    </Col>
                                    <Col md={ 2 }>
                                        <Rating rating={ product.rating }/>
                                    </Col>
                                    <Col md={ 2 }>
                                        <Form.Control as='select' value={ product.qty }>
                                            {
                                                [
                                                    ...Array(product.inStock).keys()
                                                ].map((x) => (
                                                    <option key={x+1}>
                                                        {
                                                            x+1
                                                        }
                                                    </option>
                                                ))
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <AiFillDelete
                                            fontSize='20px'
                                            style={ { cursor: 'pointer' } }
                                            onClick={( () => dispatch({
                                                type: 'REMOVE_FROM_CART',
                                                payload: product.id
                                            }) )}
                                        />
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className='filters summary'>
                <span className='title'>
                    Subtotal ({ cart.length }) items
                </span>
                <span style={ { fontSize: 20, fontWeight: 700 } }>
                    Total: ₹ {total}
                </span>
                <Button type='button' variant='primary' disabled={cart.length === 0}>
                    Proceed to checkout
                </Button>
            </div>
        </div>
    )
}

export default Cart;