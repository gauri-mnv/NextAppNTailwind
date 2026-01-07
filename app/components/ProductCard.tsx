 
import React from 'react'
import  AddToCart from './AddToCart';
// import styles from './ProductCard.module.css' 
// or we can directly add tailwind css in class name

const ProductCard = () => {
  return (
    // <div className={styles.card}>
    //{/* <div className="p-5 my-5 rounded-lg shadow-md bg-white text-black">  */}

    <div>
            <h1 className="text-l font-semibold text-sky100">ProductCard</h1>
            <AddToCart />
    
    </div>
    
  )
}

export default ProductCard 