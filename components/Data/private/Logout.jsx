import React from 'react'
import { MdLogout } from 'react-icons/md'
export default function Logout() {
    const userLoutOut = () => {
        localStorage.removeItem('loginString');
        sessionStorage.removeItem('userpin');
        window.location.reload();
    }
    return (
        <div className='bg-gray-100  top-0 fixed z-50 mt-1'>
            <div className='h-4'></div>
            <button className=' text-black text-xl flex items-center p-2  hover:bg-gray-500 hover:rounded-xl hover:text-white'
                onClick={userLoutOut}
            >

                <MdLogout className='mr-2' size={25} />
                <p className=''>Log Out</p>


            </button>
        </div>
    )
}
