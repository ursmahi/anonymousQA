import React from 'react'
import Link from 'next/link';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlineQuestionAnswer } from 'react-icons/md'
export default function Navbar({ active }) {
    const [activeTab, setActiveTab] = React.useState(active);

    const activeCSS = `flex  items-center mb-16  p-5 hover:cursor-pointer border-2 border-black border-r-transparent bg-gray-100 font-bold rounded-l-full mb-5 text-lg`;
    const normalCSS = `flex  items-center mb-16  p-5 hover:cursor-pointer  text-lg hover:bg-gray-100 hover:rounded-l-full `;

    return (
        <>
            <div className='  pt-5 pb-5 border-none'>
                <nav className=''>
                    <ul className={` ${activeTab ? 'ml-5': 'ml-2.5'}`}>
                        <li className=' p-5  '>

                        </li>
                        <Link href='/question'>
                            <li className={`  ${activeTab ? normalCSS : activeCSS}  `}>
                                <div className='flex '>
                                    <AiOutlineQuestionCircle size={30} />

                                    <p className='pl-2'>
                                        ASK QUESTION
                                    </p>
                                </div>
                            </li>
                        </Link>
                        <Link href='/response'>
                            <li className={`  ${activeTab ? activeCSS : normalCSS}`} >
                                <div className='flex '>

                                    <MdOutlineQuestionAnswer size={30} />

                                    <p className='pl-2'>
                                        Responses
                                    </p>
                                </div>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}
