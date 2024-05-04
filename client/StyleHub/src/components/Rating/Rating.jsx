import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

function Rating({ rating, onClick, style }) {
  return (
    <div className='flex inline'>
        {
            [...Array(5)].map((_, index) => (
                <span key={ index } onClick={() => onClick(index)} style={style}>
                    {
                        index < rating ? 
                            (
                                <AiFillStar fontSize="15px"/>
                            ) 
                            : 
                            (
                                <AiOutlineStar fontSize="15px"/>
                            )
                    }
                </span>
            ))
        }
    </div>
  )
}

export default Rating