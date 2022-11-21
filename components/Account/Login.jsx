import React from 'react'
import Pin from './Pin'
import Createaccount from './Createaccount'

import { getAccount } from '../../utils/pocketbase'

const localStorage = typeof window !== `undefined` ? window.localStorage : null;
export default function Login() {
  const [createString, setCreateString] = React.useState(false)
  const [loginString, setLoginString] = React.useState('')
  const [getLocalString, setGetLocalString] = React.useState('')
  const [openPin, setOpenPin] = React.useState(false)
  const [defPin, setdefPin] = React.useState('')


  const loginAccount = () => {
    getAccount(loginString).then((res) => {
      if (res.loginString === loginString) {
        setdefPin(res.userpin)
        setOpenPin(true)
        localStorage.setItem('loginString', loginString);
        sessionStorage.clear();
      }
    })
  }

  React.useEffect(() => {
    const st = localStorage.getItem('loginString');
    if (st) {
      setOpenPin(true);
    }
  }, [])

  return (
    <>

      {
        openPin ? (
          <>
            <Pin loginString={loginString} defPin={defPin} />
          </>
        ) : (

          <>{
            createString ? (
              <>
                <Createaccount />
              </>
            ) : (
              <div className='flex min-h-screen flex-col items-center justify-center py-2'>
                <div className='flex flex-col'>
                  <input type="text" placeholder="Your Login String" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500'
                    onChange={(e) => { setLoginString(e.target.value) }} />

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      if(loginString.length > 0){

                        loginAccount()
                      }}
                    }>
                    Login
                  </button>
                  <div className='mt-5'>

                  </div>
                  <button onClick={() => { setCreateString(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Account
                  </button>
                </div>
              </div>
            )}
          </>
        )}
    </>
  )
}

