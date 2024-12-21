import React from 'react'

const SubscriptionBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault(); //prevent reloading of the page on submit
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-yellow-400 text-opacity-75'>Subscribe Now</p>
      <p className='text-gray-400 mt-3'>
        Provide your e-mail to recieve regular updates about new stuff
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto my-6 border pl- bg-black bg-opacity-25'>
        <input className='w-full flex-1 outline-none bg-black bg-opacity-25 px-4 py-4 text-gray-300' type="email" placeholder='enter your e-mail' required/>
        <button type='submit' className='bg-black text-white text-md px-8 py-4 font-bold h-full'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default SubscriptionBox
