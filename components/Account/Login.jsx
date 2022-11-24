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
  const [alert, setAlert] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState('Not A Valid Login String')


  const loginAccount = () => {
    getAccount(loginString).then((res) => {
      if (res.loginString === loginString) {
        setdefPin(res.userpin)
        setOpenPin(true)
        localStorage.setItem('loginString', loginString);
        sessionStorage.clear();
      }
      else{
        setAlert(true)
        setTimeout(() => {
          setAlert(false)
        }, 2000);
      }
    }).catch((err) => {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000);
    });
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
                  <input type="password" placeholder="Your Login String" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500'
                    onChange={(e) => { setLoginString(e.target.value) }}
                    onKeyUp={
                      (e) => {
                        if (e.key == 'Enter' && loginString.length > 0 ) {
                          loginAccount()
                        }
                        else if(e.key == 'Enter' && loginString.length == 0){
                          setAlert(true)
                          setAlertMessage('Please Enter Login String')
                          setTimeout(() => {
                            setAlert(false)
                          }
                            , 3000)
                        }
                        else{
                          setAlert(false)
                        }
                      }
                    }
                  />

                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      if (loginString.length > 0) {

                        loginAccount()
                      }
                      else {
                        setAlert(true)
                        setTimeout(() => {
                          setAlert(false)
                        }
                        , 3000)
                      }
                    }
                  }>
                    Login
                  </button>
                  <div className='mt-5'>

                  </div>
                  <button onClick={() => { setCreateString(true) }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Create Account
                  </button>
                {alert ? <p className='text-red-500  text-center'> {alertMessage}</p> : <div className='h-6'></div>}
                </div>
              </div>
            )}
          </>
        )}
    </>
  )
}

