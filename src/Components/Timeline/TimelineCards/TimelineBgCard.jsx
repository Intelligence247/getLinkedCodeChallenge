import React from 'react'

const TimelineBgCard = (props) => {
  return (
    <div className='flex flex-col space-y-3'>
      <h1 className={`font-bold text-2xl text-primaryPurple ${props.style}`}>{props.txt1}</h1>
      <p className={`${props.style}`}>{props.txt2}</p>
    </div>
  )
}

export default TimelineBgCard
