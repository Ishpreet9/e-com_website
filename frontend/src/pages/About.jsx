import React from 'react'
import Title from '../components/Title'
import SubscriptionBox from '../components/SubscriptionBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="p-6 font-sans">
      {/* About Us Section */}
      <div className="mb-12">
        <div className="text-center text-2xl mb-6">
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-gray-700 leading-relaxed text-lg">
            Welcome to our e-commerce website! We are dedicated to providing you with an exceptional online shopping
            experience. With a wide range of products, competitive prices, and a seamless shopping journey, we aim to be
            your one-stop solution for all your needs. Our commitment is to ensure you enjoy shopping with ease and
            confidence.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mb-12">
        <div className="text-center text-2xl mb-6">
          <Title text1={'OUR'} text2={'MISSION'}/>
        </div>
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to revolutionize the way you shop online by combining quality, convenience, and customer
            satisfaction. We strive to create a platform that not only meets but exceeds your expectations, ensuring a
            seamless and enjoyable shopping experience every time.
          </p>
        </div>
      </div>

      {/* Title: Why Choose Us */}
      <div className="text-left text-xl mb-6 max-w-4xl mx-auto">
        <Title text1={'WHY'} text2={'CHOOSE US'} className="text-4xl md:text-5xl lg:text-6xl font-semibold" />
      </div>

      {/* Three Boxes: Centered and Aligned */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* Box 1: Quality Assurance */}
        <div className="flex-1 max-w-xs border border-gray-300 rounded-lg p-6 text-center">
          <strong className="text-xl font-semibold block mb-2">Quality Assurance</strong>
          <p className="text-gray-600 text-base">
            We ensure that all our products meet the highest standards of quality, offering you the best value for your
            money.
          </p>
        </div>

        {/* Box 2: Convenience */}
        <div className="flex-1 max-w-xs border border-gray-300 rounded-lg p-6 text-center">
          <strong className="text-xl font-semibold block mb-2">Convenience</strong>
          <p className="text-gray-600 text-base">
            Shop anytime, anywhere with our user-friendly platform designed for effortless browsing and checkout.
          </p>
        </div>

        {/* Box 3: Exceptional Customer Service */}
        <div className="flex-1 max-w-xs border border-gray-300 rounded-lg p-6 text-center">
          <strong className="text-xl font-semibold block mb-2">Exceptional Customer Service</strong>
          <p className="text-gray-600 text-base">
            Our support team is always ready to assist you, ensuring a smooth and satisfying shopping experience.
          </p>
        </div>
      </div>

      {/* Subscription Box */}
      <div className="mt-10">
        <SubscriptionBox />
      </div>
    </div>
  )
}

export default About
