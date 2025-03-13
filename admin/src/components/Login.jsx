import React, { useState } from 'react'
import axios from 'axios';
import { backendUrl } from '../App' 
import { toast } from 'react-toastify';

const Login = ({setToken}) => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl+'/api/user/admin',{username,password});
            if(response.data.success)
            {
              setToken(response.data.token);
            }
            else{
              toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(response.message);
        }
    }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-black bg-opacity-40 border-4 border-neutral-600 rounded-lg px-8 flex flex-col items-center gap-5 py-8'>
        <h1 className='text-4xl font-bold'>ADMIN PANEL</h1>
        <form action="" className='flex flex-col items-center' onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-96'>
                <p className='text-xl font-medium text-neutral-300 mb-2'>Username</p>
                <input onChange={(e)=>setUsername(e.target.value)} value={username} className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none bg-black bg-opacity-25' type="text" placeholder='Enter admin username' required/>
            </div>
            <div className='mb-3 min-w-96'>
                <p className='text-xl font-medium text-neutral-300 mb-2'>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-3 border border-gray-300 outline-none bg-black bg-opacity-25' type="password" placeholder='Enter password' required />
            </div>
            <button type='submit' className='mt-4 bg-black px-10 py-3 rounded-md border-2 border-gray-300 text-xl font-bold bg-opacity-60'>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Login
