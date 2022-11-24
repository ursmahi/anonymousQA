import { React, useState } from 'react';
import { createNewAccount } from '../../utils/pocketbase'
import PocketBase from 'pocketbase';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
export default function Createpin({ loginString }) {

    const [newPin, setNewPin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const [confirmLoginString, setConfirmLoginString] = useState('')
    const [alertMSG, setAlertMSG] = useState('')

    const handleSubmition = async () => {
        if (newPin === confirmPin && newPin.length===4 && loginString === confirmLoginString) {
            await createNewAccount(confirmLoginString, confirmPin)
            .then((res) => {
                if (res) {
                    setAlertMSG('Account Created Successfully')
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            }).catch((err) => {
                console.log(err);
                setAlertMSG('Account Already Exist or Unknown Error')
                setTimeout(() => {
                    setAlertMSG('')
                }, 2000);
            })
            // wait for the account to be created



            // setAlertMSG('Account Created Sucessfully')
            // window.location.reload();
        }
        else if (loginString != confirmLoginString) {
            setAlertMSG('Please Check the Login String')
            setTimeout(() => {
                setAlertMSG('')
            }, 2000);
        }
        else if (newPin != confirmPin) {
            setAlertMSG('PIN SHOULD MATCH')
            setTimeout(() => {
                setAlertMSG('')
            }, 2000);
        }
        else if (newPin.length != 4) {
            setAlertMSG('PIN SHOULD BE 4 DIGIT')
            setTimeout(() => {
                setAlertMSG('')
            }, 2000);
        }

    }
    return (
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
                    {alertMSG.length>0 ? <div className='text-red-500 bg-white z-60 border-b-2 border-black w-full text-center'>{alertMSG}</div> : <div className='h-6'></div>}
                <div className='flex flex-col mt-5'>
                    <span className='text-xl text-center m-2'>Enter your Login String</span>
                    <input type="password" placeholder="Enter your Login String" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500'
                        onChange={(e) => {

                            ; setConfirmLoginString(e.target.value)
                        }} />

                    <span className='text-xl text-center m-2'>Create New Pin</span>
                    <input value={newPin} type="password" placeholder="Enter New 4 digit pin" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500 appearance-none snap-align-none'
                        onChange={(e) => {
                            if (e.target.value.length <= 4) {
                                // only numbers allowed
                                if (!isNaN(e.target.value)) {

                                    setNewPin(e.target.value)
                                }
                            }
                        }} />
                    <div>
                    </div>
                    <input value={confirmPin} type="password" placeholder="Confirm 4 digit pin" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500 appearance-none snap-align-none'
                        onChange={(e) => {
                            if (e.target.value.length <= 4) {
                                // only numbers allowed
                                if (!isNaN(e.target.value)) {
                                    setConfirmPin(e.target.value)
                                }
                            }
                        }}
                        onKeyUp={
                            (e) => {
                                if (e.key == 'Enter') {
                                    handleSubmition()
                                }
                            }}
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            handleSubmition()
                        }}
                    >
                        ENTER
                    </button>
                </div>
            </div>
        </div>
    )
}
