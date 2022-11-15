import { React, useState } from 'react';
import {createNewAccount} from '../../utils/pocketbase'
import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);
export default function Createpin({ loginString }) {

    const [newPin, setNewPin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const [confirmLoginString, setConfirmLoginString] = useState('')
    const [alertMSG, setAlertMSG] = useState('')

    const handleSubmition = async() => {
        if (newPin === confirmPin && loginString === confirmLoginString) {
            createNewAccount(confirmLoginString, confirmPin);

            alert('Account Created Sucessfully')
            // window.location.reload();
        }
        else if (loginString != confirmLoginString) {
            alert('Wrong Login String')
        }
        else if (newPin != confirmPin) {
            setAlertMSG('PIN SHOULD MATCH')
        }

    }
    return (
        <div className='flex min-h-screen flex-col items-center justify-center py-2'>
            <div className='flex flex-col mt-5'>
                <span className='text-xl text-center m-2'>Enter your Login String</span>
                <input type="text" placeholder="Enter your Login String" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500'
                    onChange={(e) => {

                        ; setConfirmLoginString(e.target.value)
                    }} />

                <span className='text-xl text-center m-2'>Create New Pin</span>
                <input value={newPin} type="text" placeholder="Enter 4 digit pin" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500 appearance-none snap-align-none'
                    onChange={(e) => {
                        if (e.target.value.length <= 4) {
                            // only numbers allowed
                            if (!isNaN(e.target.value)) {

                                setNewPin(e.target.value)
                            }
                        }
                    }} />
                    <div>
                        <span className='text-xl text-center m-2 text-red'>{alertMSG}</span>
                    </div>
                <span className='text-xl text-center m-2'>Confirm Pin</span>
                <input value={confirmPin} type="text" placeholder="Confirm 4 digit pin" className='mb-5 rounded-lg p-2 border-2 border-blue-400 hover:border-red-500 appearance-none snap-align-none'
                    onChange={(e) => {
                        if (e.target.value.length <= 4) {
                            // only numbers allowed
                            if (!isNaN(e.target.value)) {
                                setConfirmPin(e.target.value)
                            }
                        }
                    }} />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        handleSubmition()
                    }}
                >
                    ENTER
                </button>
            </div>
            <p>{loginString}</p>
        </div>
    )
}
