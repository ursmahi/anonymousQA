import React from 'react'
import Link from 'next/link'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { MdOutlineQuestionAnswer } from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
export default function Navbarsmall({ active }) {
    
    const [activeTab, setActiveTab] = React.useState(active);

    const activeCSS = `bg-green-100 p-5 font-bold `;
    const normalCSS = `p-5 `;
    const userLoutOut = () => {
        localStorage.removeItem('loginString');
        sessionStorage.removeItem('userpin');
        window.location.replace('/');
    }
    return (
        <div className=''>
            <ul className='flex justify-evenly items-center'>
                <Link href='/question'>
                    <li className={` ${activeTab ? normalCSS : activeCSS}  `}>
                        <div className='flex flex-col items-center'>
                            <AiOutlineQuestionCircle size={30} />

                            <p className='pl-2'>
                                QUESTION
                            </p>
                        </div>
                    </li>
                </Link>
                <Link href='/response'>
                    <li className={` ${activeTab ? activeCSS : normalCSS}   `} >
                        <div className='flex flex-col items-center'>

                            <MdOutlineQuestionAnswer size={30} />

                            <p className='pl-2'>
                                Responses
                            </p>
                        </div>
                    </li>
                </Link>

                <button onClick={
                    ()=>{
                        userLoutOut();
                    }
                } className=' px-6 hover:bg-green-100'>
                <li className={``} >
                        <div className='flex flex-col items-center'>

                            <FiLogOut size={30} />

                            <p className='pl-2'>
                                Logout
                            </p>
                        </div>
                    </li>
                </button>
            </ul>
        </div>
    )
}
