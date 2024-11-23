import React from 'react'

const SubscriptionBox = () => {

    const onSubmitHandler = (event)=>{
        event.preventDefault(); //prevent reloading of the page on submit
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now</p>
      <p className='text-gray-400 mt-3'>
        Provide your e-mail to recieve regular updates about new stuff
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='enter your e-mail' required/>
        <button type='submit' className='bg-black text-white text-md px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default SubscriptionBox
