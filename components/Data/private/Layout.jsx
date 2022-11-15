import React from 'react'
import Answer from './Answer'
import Question from './Question'

export default function Layout() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-red-700  via-red-500 to-red-300'>
            <div className='grid grid-cols-8'>
            <div className='col-span-1  border-black min-h-screen bg-white'></div>
            <div className='col-span-3 border-2 border-black'>
                <Question />
            </div>
            <div className='col-span-3 border-2 border-black'>
                <Answer />
            </div>
            <div className='col-span-1  border-black bg-white'></div>

            </div>

        </div>
    )
}
