import React from 'react'
import { increment, decrement } from '../../../redux/cart'
import { useDispatch } from 'react-redux'
import './CartButtons.css'

const AfterCart = ({productId, cartCount}) => {
    const dispatch = useDispatch()
  return (
    <div className='after-cart'>
      <button className='cart-counter-button' onClick={() => dispatch(decrement(productId))}>-</button>
      <div className='cart-count'>{cartCount}</div>
      <button className='cart-counter-button' onClick={() => dispatch(increment(productId))}>+</button>
    </div>
  )
}

export default AfterCart
