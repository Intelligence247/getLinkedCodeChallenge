import React from 'react'

const MobileCard = (props) => {
  return (
    <div className='flex justify-center space-x-4 items-center'>
         <div className='LEFT flex flex-col items-center space-y-2'>
      <p className={`h-[4rem] w-[2px] bg-primaryPurple`}></p>
      <p className={` bg-primaryPurple rounded-full w-[1.2rem] h-[1.2rem] grid place-content-center text-[12px] font-bold`}>{props.num}</p>
      </div>
      <div className="RIGHT flex flex-col space-y-1 ">
        <h1 className='text-[12px] text-primaryPurple font-bold'>{props.title}</h1>
        <p className='DESC text-[12px]'>{props.desc}</p>
        <p className='DATE text-[12px] text-primaryPurple font-bold'>{props.date}</p>
      </div>
    </div>
  )
}

export default MobileCard
