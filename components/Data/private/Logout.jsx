import React from 'react'

export default function Logout() {
    const userLoutOut = () => {
        localStorage.removeItem('loginString');
        sessionStorage.removeItem('userpin');
        window.location.reload();
    }
    return (
        <div className='flex justify-end m-5 fixed'>
            
            <button className='p-2 bg-gray-700 hover:bg-gray-900 text-white rounded-xl mt-2'
                onClick={userLoutOut}
            >
                Logout
            </button>
        </div>
    )
}
