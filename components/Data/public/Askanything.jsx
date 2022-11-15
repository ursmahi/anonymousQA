import React from 'react'

export default function Askanything() {
    return (
        <>
            <div className='h-24'>
            </div>
            <div className='flex justify-center'>

                <div className='bg-white flex flex-col rounded-3xl w-10/12 sm:rounded-3xl sm:w-6/12 '>
                    <div className='flex'>
                        <img className='w-12 h-12 rounded-full m-4 ring-2 ring-indigo-500' src='https://placeimg.com/192/192/people' alt='profile' />
                        <div className=' mt-5'>

                            <p className='font-normal'>@username</p>
                            <p className='font-semibold'>
                                <span className='text-gray-500'>Name:</span>
                                </p>
                        </div>
                    </div>

                    <textarea className=' rounded-2xl bg-indigo-400 text-xl font-semibold  border-gray-300  h-32 sm:h-40 w-full p-3 sm:p-5 resize-none focus:outline-none placeholder:font-semibold placeholder:text-2xl placeholder:text-white placeholder:opacity-50' placeholder='send me anonymous messages…' />
                </div>
            </div>
                <p className='text-center p-5'>🔒 anonymous q&a</p>
            <div className='flex justify-center'>
                <button className='bg-black text-xl  rounded-3xl w-10/12 sm:rounded-3xl sm:w-6/12  text-white font-bold py-2 px-4'>
                    Send
                </button>
            </div>
        </>
    )
}
