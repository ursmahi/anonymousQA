import React from 'react'
import Account from './Account'
import { getAccount } from '../../utils/pocketbase'
export default function Pin({ loginString, defPin }) {
    const [pin, setPin] = React.useState('')
    const [ActualPin, setActualPin] = React.useState('')
    const [openAccount, setOpenAccount] = React.useState(false);

    const handelPINSUBMIT = () => {

        if (pin == ActualPin) {
            setOpenAccount(true)
            sessionStorage.setItem("userpin",pin);
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

                <div className='flex min-h-screen flex-col items-center justify-center py-2'>

                    <div className='flex flex-col mt-5'>
                        <input value={pin} type="text" placeholder="Enter 4 digit pin" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500 appearance-none snap-align-none'
                            onChange={(e) => {
                                if (e.target.value.length <= 4) {
                                    // only numbers allowed
                                    if (!isNaN(e.target.value)) {

                                        setPin(e.target.value)
                                    }
                                }
                            }} />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => {
                                if (pin.length > 0) {

                                    handelPINSUBMIT()
                                }

                            }}
                        >
                            ENTER
                        </button>
                    </div>
                </div>
            )
        }
        </>
    )
}
