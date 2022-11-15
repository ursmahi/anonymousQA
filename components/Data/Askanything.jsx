import React from 'react'

export default function Askanything() {
    return (
        <div className='flex justify-center scroll-mt-3.5'>
            Hello

            <textarea className='border-2 border-gray-300 bg-white h-40 w-96 rounded-lg px-4 py-2 resize-none focus:outline-none focus:border-indigo-500' placeholder='Ask anything' />

        </div>
    )
}
