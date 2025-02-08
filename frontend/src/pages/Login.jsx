import React, { useState } from 'react'
import Title from '../components/Title';

const Login = () => {

  const [currentState,steCurrentState] = useState('Sign In');

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4'>
      <div className='text-4xl'>
      <Title text1={'Sign'} text2={`${currentState==='Sign In' ? 'In': 'Up'}`}></Title>
      </div>
      <input type="text" className='w-full px-3 py-2 border border-gray-500 bg-black bg-opacity-40' placeholder={`${currentState==='Sign In' ? 'Username' : 'Create Username'}`} required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-500 bg-black bg-opacity-40' placeholder={`${currentState==='Sign In' ? 'Password' : 'Create Password'}`} required/>
      {currentState==='Sign Up' ? <input type="password" className='w-full px-3 py-2 border border-gray-500 bg-black bg-opacity-40' placeholder='Confirm Password' required/> : ''}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer text-md text-yellow-500 text-opacity-90'>Forgot password ?</p>
        {
          currentState === 'Sign In' 
          ? <p onClick={()=>steCurrentState('Sign Up')} className='cursor-pointer font-semibold'>Create Account</p>
          : <p onClick={()=>steCurrentState('Sign In')} className='cursor-pointer font-semibold'>Login Here</p>
        }
      </div>
      <button className='bg-black bg-opacity-25 border-2 border-white border-opacity-75 text-white font-bold px-12 py-4 text-sm active:border-yellow-400 active:bg-black active:bg-opacity-50'>{currentState === 'Sign In' ? 'Sign In' : 'Sign Up' }</button>
    </form>
  )
}

export default Login
