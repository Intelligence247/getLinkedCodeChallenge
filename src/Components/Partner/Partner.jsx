import React from 'react'
import "./Partner.css"
const Partner = () => {
  return (
    <div className='partnerWrapper relative' id='overview'>
      <img src="starpurple.png" className='left-[20%] lg:top-[30%] top-[20%] absolute lg:w-max w-[10px]  ' alt="" />
      <div className="partnerHeader">
        <h1>Partners and Sponsors</h1>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
      </div>
      <main className="partnerMain relative overflow-hidden">
      <img src="starpurple.png" className='left-[50%] top-[10%] absolute lg:w-max w-[10px]  ' alt="" />
      <img src="starwhite.png" className='left-[45%] bottom-[10%] absolute lg:w-max w-[10px]  ' alt="" />

        <img src="/purple.png" className='absolute bottom-[20%] -left-[50%] scale-[0.6]' alt="" />

        <img src="/purple.png" className='absolute top-[20%] left-[50%] scale-[0.6]' alt="" />
        <div className="eachPartnerImg">
            <div className="imgW">
        <img src="img1.png" alt="" />
        </div>
        <p className='Line'></p>
        </div>
        {/* IMG2 */}

        <div className="eachPartnerImg">
            <div className="imgW">
        <img src="img2.png" alt="" />
        </div>
        <p className='Line'></p>
        </div>
{/*  */}
        <div className="eachPartnerImg">
            <div className="imgW">
        <img src="img3.png" alt="" />
        </div>
        <p className='Line'></p>
        </div>
{/*  */}
<div className="eachPartnerImg">
            <div className="imgW border-0">
        <img src="img4.png" alt="" />
        </div>
        <p className='Line'></p>
        </div>

        <div className="eachPartnerImg">
            <div className="imgW border-0">
        <img src="img5.png" alt="" />
        </div>
        <p className='Line'></p>
        </div>

        <div className="eachPartnerImg">
            <div className="imgW border-0">
                <p className='absolute lg:bottom-[30%] bottom-[10%] lg:text-[8px] text-[3px] right-0'>Design Studios</p>
        <img src="img6.png" alt="" />
        </div>
        <p className='Line'></p>

        </div>

      </main>
    </div>
  )
}

export default Partner
