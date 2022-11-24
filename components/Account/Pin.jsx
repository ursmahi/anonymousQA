import React from 'react'
import Account from './Account'
import { getAccount } from '../../utils/pocketbase'
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
export default function Pin({ loginString, defPin }) {
    const [pin, setPin] = React.useState('')
    const [ActualPin, setActualPin] = React.useState('')
    const [openAccount, setOpenAccount] = React.useState(false);
    const [alert, setAlert] = React.useState(false)
    const [alertMessage, setAlertMessage] = React.useState('Please Check the  PIN')

    const handelPINSUBMIT = () => {

        if (pin == ActualPin) {
            setOpenAccount(true)
            sessionStorage.setItem("userpin", pin);
        }
        else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 2000);
        }
    }
    React.useEffect(() => {
        const str = localStorage.getItem('loginString');
        getAccount(str).then((res) => {
            if (res.loginString === str) {
                setActualPin(res.userpin)

            }
        }).catch((err) => {

        }
        )

        const getSessionPin = sessionStorage.getItem("userpin");
        if (getSessionPin) {
            setOpenAccount(true);
        }

    }, [])

    return (
        <>{
            openAccount ? (
                <Account loginString={localStorage.getItem('loginString')} />
            ) : (
                <div>
                    <div className='sm:ml-36 w-full top-0 fixed z-10'>

                        <button className=' text-black text-xl flex mt-1 items-center p-2  hover:bg-gray-500 hover:rounded-xl hover:text-white ' onClick={
                            () => { 
                                localStorage.removeItem('loginString');
                                sessionStorage.removeItem('userpin');
                                window.location.reload();
                             }
                        }>
                            <MdOutlineArrowBackIosNew className='mr-2' /> BACK
                        </button>
                    </div>
                    <div className='flex min-h-screen flex-col items-center justify-center py-2'>

                        <div className='flex flex-col mt-5'>
                            <input value={pin} type="password" placeholder="Enter 4 digit pin" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500 appearance-none snap-align-none'
                                onChange={(e) => {
                                    if (e.target.value.length <= 4) {
                                        // only numbers allowed
                                        if (!isNaN(e.target.value)) {

                                            setPin(e.target.value)
                                        }
                                    }
                                }}
                                onKeyUp={
                                    (e) => {
                                        if (e.key == 'Enter') {
                                            handelPINSUBMIT()
                                        }


                                    }
                                }
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => {
                                    if (pin.length > 0) {

                                        handelPINSUBMIT()
                                    }

                                }}>
                                ENTER
                            </button>
                            {alert ? <div className='text-red-500 text-center'>{alertMessage}</div> : <div className='h-6'></div>}
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}
