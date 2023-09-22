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
        <p>Highlight of the prizes or rewards for winners and for Participants</p>
        <div className="awards">
<PrizeCrd 
position={'2nd'}
amount={'300,000'}
img="/silver.png"
style="border-primaryPurple border-2 "

/>
<PrizeCrd 
position={'2nd'}
amount={'300,000'}
img="/gold.png"
style="border-primaryBlue border-2 "


/>
<PrizeCrd 
position={'2nd'}
amount={'300,000'}
img="/bronze.png"
style="border-primaryPurple"

/>
</div>
      </div>
    </div>
  )
}

export default Prices
