'use client';
import React from 'react'
// https://daisyui.com/components/button/

const AddToCart = () => {
  return (
    <div>

<button className='btn border-t-cyan-100 btn-primary btn-xl p-2 m-3' onClick={()=>{console.log("click")}}>Add To Cart</button>
    </div>
  )
}

export default AddToCart