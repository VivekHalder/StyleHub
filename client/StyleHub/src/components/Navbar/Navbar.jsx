;import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function Header() {
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
                    <li className='my-auto pl-3 pl-5'>
                        <FontAwesomeIcon icon={ faShoppingCart } />
                    </li>
                    <li className='my-auto pl-3 pl-5'>
                        Account
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header