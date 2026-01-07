'use client';
import React ,{ useState }  from 'react'
import clsx from "clsx";

// https://daisyui.com/components/button/

const AddToCart = () => {
  const [isActive, setIsActive] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className='m-6'>
    <span className='m-2 text-amber-300 text-sm'>Example of Tailwind Utility-First</span>
    <button className='btn border-t-cyan-100 btn-primary btn-xl p-2 m-3' onClick={()=>
      {console.log("click"); 
      setIsActive(!isActive);}}   
      disabled={isDisabled}>Switch</button>


<div className={clsx(
  "p-4 rounded w-2xs",
  isActive && "bg-sky-500",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>
  DemoButton
</div>
        
    </div>
  )
}

export default AddToCart