import React from 'react'
import { BsPinAngleFill } from 'react-icons/bs'
export default function Individualresponse({ data }) {
    const [res, sentRes] = React.useState(data.responses);
    return (
        <div className=''>
            <button className=' text-black text-xl p-2 -mt-3 hover:bg-gray-500 hover:rounded-xl hover:text-white ' onClick={
                () => { window.location.reload() }
            }>
                {'> BACK'}
            </button>
            <div className='h-16'>

            </div>
            <div className='flex items-center justify-center'>

                <div className=' bg-white rounded-lg drop-shadow-lg font-bold resize-none p-2 w-11/12 sm:w-9/12'>
                    {data.question}
                    <div className='h-8'></div>

                    <p className='text-center'>Responses : {res.length}</p>
                    {
                        res.map((ans, index) => {
                            return (
                                <div key={index} className=' mt-2 '>
                                    <div className='flex'>
                                        <div className='pr-5'>
                                            <BsPinAngleFill size={25} className='fill-red-600' />
                                        </div>
                                        <p className=' font-mono'>{ans}</p>
                                    </div>
                                    <div className='border border-black ml-10 mb-5'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
