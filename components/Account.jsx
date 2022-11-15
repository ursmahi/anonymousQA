import React from 'react'

function Account({ loginString }) {

    const userLoutOut = () => {
        localStorage.removeItem('loginString');
        sessionStorage.removeItem('userpin');
        window.location.reload();
    }
    return (
        <>
            <div className='flex justify-end m-5'>
                <button className='p-2 bg-blue-500 hover:bg-blue-700 text-white rounded-xl mt-2'
                    onClick={userLoutOut}
                >
                    Logout
                </button>
            </div>
            <div className='flex justify-center'>
                Account {loginString}
            </div>
        </>
    )
}

export default Account