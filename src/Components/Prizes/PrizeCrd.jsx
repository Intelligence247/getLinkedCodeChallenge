import React from 'react'

const PrizeCrd = (props) => {
  return (
    <div className={`w-[13.25rem] h-[21.5rem] border-2 rounded-lg relative ${props.style} flex flex-col justify-end items-center p-4`}>
        <img src={props.img} alt="" className='absolute -top-[30%]'/>
      <h1 className='text-[2rem]'>{props.num}</h1>
      <p className='text-2xl'>{'Runner'}</p>
      <h2 className='text-[2rem]'>{props.amount}</h2>

    </div>
  )
}

export default PrizeCrd
