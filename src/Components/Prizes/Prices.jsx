import React from 'react'
import "./Price.css"
import PrizeCrd from './PrizeCrd'
const Prices = () => {
  return (
    <div className='priceWrapper'>
      <div className="priceLeft">
        <img src="/cup.png" alt="" />
      </div>
      <div className="priceRight">
        <div className="priceHeader">
            <p>Price and</p>
            <p>Rewards</p>
        </div>
        <h2 className='w-[20rem]'>Highlight of the prizes or rewards for winners and for Participants</h2>
        <div className="awards">
<PrizeCrd 
position={'2nd'}
amount={'300,000'}
img="/silver.png"
style="border-primaryPurple border-2 "
color={'text-primaryPurple'}

/>
<PrizeCrd 
imgSize={'w-[35rem'}
position={'1st'}
amount={'400,000'}
img="/gold.png"
style="border-primaryBlue border-2 "
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
