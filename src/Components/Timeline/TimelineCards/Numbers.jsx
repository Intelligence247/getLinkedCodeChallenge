import React from 'react'

const Numbers = (props) => {
  return (
    <div className='flex justify-center flex-col items-center space-y-3'>
          <p className={`h-[4.7rem] w-[4px] bg-primaryPurple`}></p>
      <p className={` bg-primaryPurple rounded-full w-[3.3rem] h-[3.3rem] grid place-content-center text-2xl font-bold`}>{props.num}</p>
    
    </div>
  )
}

export default Numbers
