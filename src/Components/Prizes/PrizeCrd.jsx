import React from 'react'

const PrizeCrd = (props) => {
  return (
    <div className={`w-[13.25rem] h-[16.5rem] border-2 rounded-lg relative ${props.style} flex flex-col justify-end items-center p-4`}>
        <img src={props.img} alt="" className={`absolute -top-[30%] ${props.imgSize}`}/>
      <h1 className='text-[2rem]'>{props.num}</h1>
      <p className='text-3xl font-bold'>{props.position}</p>
      <p className='text-2xl'>{'Runner'}</p>
      <h2 className={`text-[2rem] ${props.color}`}>{props.amount}</h2>

    </div>
  )
}

export default PrizeCrd
