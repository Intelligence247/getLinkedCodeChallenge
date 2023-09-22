import React from 'react'
import "./Privacy.css"

const Privacy = () => {
  return (
    <div className='privacyWrapper'>
      <div className="privacyLeft1">
      <div className="privacyHeader w-full">
            <p>Privacy Policy and</p>
            <p>Terms</p>
        </div>
        <p>Last updated on September 12, 2023</p>
        <p>Below are our privacy & policy, which outline a lot of goodies. 
it’s our aim to always take of our participant</p>
      <div className="privacyLeft">
              <p>At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>

<div className="privacyRightHeader flex flex-col space-y-2 w-full">
    <p className='text-primaryPurple font-bold'>Licensing Policy</p>
    <p>Here are terms of our Standard License:</p>
</div>
<div className="list flex lg:items-baseline items-start space-x-4">
    <img src="/list.png" alt="" />
    <p className='leading-7 lg:text-base text-sm  '>The Standard License grants you a non-exclusive right to
navigate and register for our event</p>
</div>
{/*  */}
<div className="list flex justify-center items-baseline space-x-4">
    <img src="/list.png" alt="" />
    <p className='leading-7 lg:text-base text-sm '>You are licensed to use the item available at any free source
sites, for your project developement</p>
</div>
<button>Read More</button>
      </div>
      </div>
      <div className="privacyRight">
       <img src="privacyImg.png" alt="" />
      </div>
    </div>
  )
}

export default Privacy
