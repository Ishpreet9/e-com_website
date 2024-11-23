import React from 'react'
import Prime from '../components/Prime'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import SubscriptionBox from '../components/SubscriptionBox'

const Home = () => {
  return (
    <div className='mt-10'>
      <Prime/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <SubscriptionBox/>
    </div>
  )
}

export default Home
