import React from 'react'
import Createpin from './Createpin'
import { MdOutlineContentCopy } from 'react-icons/md'
export default function Createaccount() {

    const [createString, setCreateString] = React.useState('')
    const [openPin, setOpenPin] = React.useState(false)

    const generateAlphaNumeric = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const createAccount = () => {
        const st = generateAlphaNumeric(15);
        setCreateString(st);
    }
    React.useEffect(() => {
        createAccount();
    }, [])
    return (
        <>{
            openPin ? (
                <Createpin loginString={createString} />
            ) : (
                <div className='flex bg-gray-100  min-h-screen flex-col items-center justify-center py-2'>
                    <div className=' sm:rounded-xl drop-shadow-lg bg-white p-2 text-center'>

                        <p className='text-xl mt-5'>Your Account has been created successfully.</p>
                        <p className='mt-5'>Copy the code below and store it  for future login.</p>
                        <div className=' mb-5  rounded-xl flex justify-center items-center'>
                            <p className='m-2 hover:cursor-pointer' onClick={() => {
                                    navigator.clipboard.writeText(createString);
                                }}>{createString}</p>
                            <button title='CLICK TO COPY' className=' p-2   m-2'
                                onClick={() => {
                                    navigator.clipboard.writeText(createString);
                                }}>
                                <MdOutlineContentCopy size={30} className='hover:fill-blue-500' />
                            </button>
                        </div>
                        NOW SET YOUR ACCOUNT LOGIN PIN
                        <div className='h-8'></div>
                        <button className='mt-2 text-black text-xl border-2 border-gray-500 rounded-xl  p-2  hover:bg-gray-500 hover:rounded-xl hover:text-white'
                            onClick={() => { setOpenPin(true) }}
                        >SET PIN</button>

                    </div>
                </div>
            )}
        </>
    )
}
