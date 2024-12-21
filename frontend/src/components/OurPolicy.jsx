import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <>
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

      <div>
        <img src={assets.exchange_icon} alt="" className='w-12 m-auto mb-5 filter invert brightness-0 opacity-50'/>
        <p className='font-semibold text-yellow-400 text-opacity-75'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle free exchange policy</p>
      </div>

      <div>
        <img src={assets.quality_icon} alt="" className='w-12 m-auto mb-5 filter invert brightness-0 opacity-50'/>
        <p className='font-semibold text-yellow-400 text-opacity-75'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div>
        <img src={assets.support_icon} alt="" className='w-12 m-auto mb-5 filter invert brightness-0 opacity-50'/>
        <p className='font-semibold text-yellow-400 text-opacity-75'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>

    </div>
    
    </>
  )
}

export default OurPolicy
