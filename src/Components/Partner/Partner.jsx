import React from 'react'
import "./Partner.css"
const Partner = () => {
  return (
    <div className='partnerWrapper'>
      <div className="partnerHeader">
        <h1>Partners and Sponsors</h1>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
companies as its partners and sponsors</p>
      </div>
      <main className="partnerMain">
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
                <p className='absolute bottom-[30%] text-[8px] right-0'>Design Studios</p>
        <img src="img6.png" alt="" />
        </div>
        <p className='Line'></p>

        </div>

      </main>
    </div>
  )
}

export default Partner
