import React from 'react'
export default function Messagesent() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-purple-700  via-indigo-500 to-purple-300'>
        <div className='  rounded-full'>

        <img src='sent.png' className=''/>
        </div>
        <p className='text-white text-xl mt-5 font-bold'>
        Sent!
        </p>
        <div className='h-24'></div>
        <button onClick={()=>{window.location.replace('/');}} className='bg-black pt-5 pb-5 animate-bounce  text-xl text-white rounded-full w-10/12 sm:w-8/12'>
        Get your own messages!
        </button>
    </div>
  )
}
