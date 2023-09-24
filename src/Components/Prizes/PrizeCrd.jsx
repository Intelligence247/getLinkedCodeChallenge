import React from 'react'

const PrizeCrd = (props) => {
  return (
    <div className={`lg:w-[13.25rem] w-[32%] lg:h-[16.5rem] h-[9rem] border-2 rounded-lg relative ${props.style} flex flex-col justify-end items-center lg:p-4 p-2`}>
        <img src={props.img} alt="" className={`absolute lg:-top-[30%] -top-[35%] ${props.imgSize}`}/>
      <h1 className='lg:text-[2rem] text-[12px]'>{props.num}</h1>
      <p className='lg:text-3xl text-[12px]  font-bold'>{props.position}</p>
      <p className='lg:text-2xl text-[12px]'>{'Runner'}</p>
      <h2 className={`lg:text-[2rem] text-[14px] ${props.color}`}>{props.amount}</h2>

    </div>
  )
}

export default PrizeCrd
