import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../style.css'
import { Rating } from '../index'

function Filter() {

    const [ rate, setRate ] = useState(2)

  return (
    <div className='filters'>
        <span className='title'>
            Filter Products
        </span>
        <span>
            <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name="group1"
                type="radio"
                id={`inline-2`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Include Out of Stock"
                name="group1"
                type="checkbox"
                id={`inline-3`}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={`inline-4`}
            />
        </span>
        <span className='flex'>
            <label style={{ paddingRight: "10px" }}>
                Rating: 
            </label>
            <Rating rating={ rate } onClick={(index) => setRate(index+1)} style={{ cursor: "pointer" }}/>
        </span>
        <Button variant="light">
            Clear Filters
        </Button>
    </div>
  )
}

export default Filter