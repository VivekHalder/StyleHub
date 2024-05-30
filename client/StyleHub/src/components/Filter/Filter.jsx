import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../style.css'
import { Rating } from '../index'
import { useFilterContext } from '../../context/FilterProvider'

function Filter() {

    const { 
        filterState: { 
            byStock,
            byFastDelivery,
            byRating,
            searchQuery,
        }, 
        filterDispatch 
    } = useFilterContext();


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
                onChange={() => {
                    filterDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh"
                    })
                }}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Descending"
                name="group1"
                type="radio"
                id={`inline-2`}
                onChange={() => {
                    filterDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow"
                    })
                }}
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Include Out of Stock"
                name="group1"
                type="checkbox"
                id={`inline-3`}
                onChange={() => filterDispatch({
                    type: "FILTER_BY_STOCK"
                })}
                checked={ byStock }
            />
        </span>
        <span>
            <Form.Check
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={`inline-4`}
                onChange={() => filterDispatch({
                    type: "FILTER_BY_DELIVERY"
                })}
            />
        </span>
        <span className='flex'>
            <label style={{ paddingRight: "10px" }}>
                Rating: 
            </label>
            <Rating 
                rating={ byRating } 
                onClick={(index) => filterDispatch(
                    {
                        type: "FILTER_BY_RATING",
                        payload: index + 1
                    }
                )} 
                style={{ cursor: "pointer" }}
            />
        </span>
        <Button 
            variant="light"
            onClick={() => filterDispatch({
                type: "CLEAR_FILTERS"
            })}
        >
            Clear Filters
        </Button>
    </div>
  )
}

export default Filter