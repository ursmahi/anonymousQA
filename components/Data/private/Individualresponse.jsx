import React from 'react'
import { handleStringTime } from './../../../utils/handyFunctions'
import { BsPinAngleFill } from 'react-icons/bs'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
export default function Individualresponse({ data }) {
   
    const [res, sentRes] = React.useState(data.responses);
    return (
        <div className='mb-2'>
            <div className='bg-gray-100 w-full  top-0 fixed z-10'>

                <button className=' text-black text-xl mt-5 flex items-center p-2  hover:bg-gray-500 hover:rounded-xl hover:text-white ' onClick={
                    () => { window.location.reload() }
                }>
                    <MdOutlineArrowBackIosNew className='mr-2' /> BACK
                </button>
            </div>
            <div className='sm:h-8'>

            </div>
            <div className='flex items-center justify-center'>

                <div className=' bg-white border-t border-r  rounded-2xl drop-shadow-lg font-bold resize-none p-2 w-11/12 sm:w-9/12'>
                    {data.question}
                    <div className='h-8'></div>

                    <p className='text-center'>Responses : {res.length}</p>
                    {
                        res.map((ans, index) => {
                            return (
                                <div key={index} className=' mt-5 '>
                                    <div className='flex mb-16'>
                                        <div className='pr-5 mt-5'>
                                            <BsPinAngleFill className='fill-red-600 text-lg sm:text-xl' />
                                        </div>
                                        <div className='w-full p-2 border-t border-r shadow-xl rounded-xl '>

                                            <p className=' font-mono'>{ans.answer}</p>
                                            <p className='text-center text-sm font-normal opacity-80 mt-5'>{handleStringTime(ans.time)}</p>
                                        </div>
                                    </div>
                                    {/* <div className='border border-black ml-11 mb-5'></div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
