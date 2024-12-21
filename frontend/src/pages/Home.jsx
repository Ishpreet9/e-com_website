import React, { useEffect,useState } from 'react'
import Prime from '../components/Prime'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import SubscriptionBox from '../components/SubscriptionBox'

const Home = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [])

  return (
    <div className={`mt-10 transition-opacity ease-in duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Prime />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <SubscriptionBox />
    </div>
  )
}

export default Home
