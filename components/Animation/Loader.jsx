import React from 'react'

function Loader() {
  return (
    <>
    <div className='flex flex-row min-h-screen justify-center items-center overflow-hidden ' style={{backgroundColor:'#F2F2F2'}}>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-center items-center'>
                    <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'>
                    </div>
                </div>
                <div className='flex flex-row justify-center items-center'>
                    <h1 className='text-2xl font-bold'>Loading...</h1>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Loader