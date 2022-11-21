import React from 'react'
import Navbar from './Navbar'
import Navbarsmall from './Navbarsmall'
import Question from './Question'
import Answer from './Answer'
import Logout from './Logout'

export default function Layout({ active }) {
    return (
        <>
            <div className=''>
                <div className='lg:grid lg:grid-cols-12 lg:visible hidden'>
                    <div className=' left-0 fixed bg-white min-h-screen shadow-2xl'>
                        <Navbar active={active} />
                    </div>
                    <div className='col-span-3  border-black bg-gray-100'>

                    </div>

                    <div className='col-span-8 -mt-5 bg-gray-100'>
                        {
                            active ?
                                <Answer />
                                :
                                <Question />
                        }
                    </div>

                    <div className='col-span-1  border-black bg-gray-100'>
                        <Logout />

                    </div>
                </div>
                <div className='lg:hidden top-0'>
                    <div>
                        {
                            active ?
                            <Answer />
                            :
                            <Question />
                        }
                        
                    </div>
                    <div className='fixed  bg-white border w-full overflow-hidden bottom-0'>

                    <Navbarsmall active={active}/>
                   
                    </div>
                </div>

            </div>
        </>
    )
}
