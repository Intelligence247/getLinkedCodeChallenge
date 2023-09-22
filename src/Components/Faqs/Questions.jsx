import React from 'react'

const Questions = ({ques,ans}) => {
    const [active, setActive] = React.useState(false)
  return (
    <div className='QuesW lg:full w-full m-auto border-b-primaryPurple'>
        <div className='question' 
        onClick={()=>{setActive(!active)}}>
           <p className='lg:text-base text-sm'>{ques}</p> 
           <p className='lessmore'>{active ? "-" : '+' }</p>
        </div>
        <div className={`ans ${active && 'activeQ'}`}>{ans}</div>
    </div>
  )
}

export default Questions

