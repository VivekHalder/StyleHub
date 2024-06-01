;import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../../context/CartProvider';
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../style.css'

function Navbar() {

    const { 
        state: { cart },
        dispatch
    } = useCartContext();

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <>
        <div className='h-1/8 pb-3 bg-white flex' style={{borderBottom: '1px solid #ccc'}}>
            <div className='text-3xl pr-7 pl-3'>
                StyleHub
            </div>
            <div className='flex flex-grow text-xl'>
                <ul className='flex h-full pl-6'>
                    <li className='my-auto pr-5'>
                        <select name="categories" id="categories" style={{outline: 'none'}}>
                            <option value="All categories">All Categories</option>
                            <option value="Tops">Tops</option>
                            <option value="Bottoms">Bottoms</option>
                            <option value="Dresses">Dresses</option>
                            <option value="Outerwear">Outerwear</option>
                            <option value="Activewear">Activewear</option>
                        </select>
                    </li>
                    <li className='my-auto pl-3 pr-5'>
                        Collection
                    </li>
                    <li className='my-auto pl-3 pr-5'>
                        Focus
                    </li>
                    <li className='my-auto pl-3 pr-5'>
                        Service Point 1
                    </li>
                    <li className='my-auto pl-3 pr-5'>
                        Assistance
                    </li>
                    <li className='my-auto pl-3 pr-5'>
                        Contacts
                    </li>
                </ul>

                <ul className='flex flex-grow justify-end mr-5'>
                    <li className='my-auto pl-3 pl-5'>
                        <FontAwesomeIcon icon={ faBell } />
                    </li>
                    <li className='flex'>
                        <Dropdown>
                            <Dropdown.Toggle variant='success'>
                                <FaShoppingCart color='white' fontSize='25px'/>
                                <Badge>{ cart.length }</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {
                                    cart.length > 0 ? 
                                    (
                                        <>
                                            {
                                                cart.map( ( product ) => (
                                                    <span className='cartItem' key={ product.id }>
                                                        <img 
                                                            src={ product.image } 
                                                            alt={ product.name } 
                                                            className='cartItemImg'
                                                        />
                                                        <div className='cartItemDetails'>
                                                            <span>
                                                                {
                                                                    product.name
                                                                }
                                                            </span>
                                                            <span>
                                                                {
                                                                    product.price.split(".")[0]
                                                                }
                                                            </span>
                                                        </div>
                                                        <AiFillDelete
                                                            fontSize='20px'
                                                            style={ { cursor: 'pointer' } }
                                                            onClick={( () => dispatch({
                                                                type: 'REMOVE_FROM_CART',
                                                                payload: product.id
                                                            }) )}
                                                        />
                                                    </span>
                                                ) )
                                            }
                                        </>
                                    )
                                    :
                                    (
                                        <span style={ { padding: 10 } }>
                                            Cart is Empty!
                                        </span>
                                    )
                                }
                                <Link to='/cart'>
                                    <Button style={{ width: '95%', margin: '0 10px' }}>
                                        Go To Cart
                                    </Button>
                                </Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    <li className='my-auto pl-3 pl-5'>
                        <Dropdown>
                            <Dropdown.Toggle variant='outline-light' className='text-black'>
                                {
                                    !isLoggedIn ? 'Hello, sign in\nAccount & Lists' : 'Account'
                                }
                            </Dropdown.Toggle>
                        
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                            {
                                                !isLoggedIn ? 
                                                    <div className='flex flex-col'>
                                                        <Link to='/login'>
                                                            <Button>
                                                                Sign In
                                                            </Button>
                                                        </Link>
                                                        <span>
                                                            New Cutomer? Start here.
                                                        </span>
                                                    </div>
                                                :
                                                    <Button>
                                                        Sign out
                                                    </Button>
                                            }
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
}

export default Navbar