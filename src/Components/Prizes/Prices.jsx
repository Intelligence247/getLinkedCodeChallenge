import React from 'react'
import "./Price.css"
import PrizeCrd from './PrizeCrd'
const Prices = () => {
  return (
    <div className='priceWrapper'>
      <div className="priceLeft relative lg:block hidden">
        <img src="/purple.png" className='absolute lg:left-[20%]' alt="" />
        <img src="/cup.png"  className='relative z-10' alt="" />
      </div>

      <div className="priceRight">
        <div className="priceHeader">
            <p>Prizes and</p>
            <p>Rewards</p>
        </div>
       <h2 className='lg:w-[20rem] w-full lg:texrt-base text-sm lg:text-start text-center'>Highlight of the prizes or rewards for winners and for Participants</h2>
       <div className="priceLeft relative lg:hidden block">
        <img src="/purple.png" className='absolute left-0 -top-20' alt="" />
        <img src="/cup.png"  className='relative z-10' alt="" />
      </div>
        <div className="awards">
<PrizeCrd 
position={'2nd'}
amount={'300,000'}
img="/silver.png"
style="border-primaryPurple border-2 "
color={'text-primaryPurple'}

/>
<PrizeCrd 
imgSize={'scale-x-[1.38] scale-y-[1.35]'}
position={'1st'}
amount={'400,000'}
img="/gold.png"
style="border-primaryBlue border-2 scale-y-[1.05]"
color={'text-primaryBlue'}


/>
<PrizeCrd 
position={'3rd'}
amount={'150,000'}
img="/bronze.png"
style="border-primaryPurple"
color={'text-primaryPurple'}

/>
</div>
      </div>
    </div>
  )
}

export default Prices
