import React from 'react'
import Createpin from './Createpin'
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
                <div className='flex bg-yellow-200  min-h-screen flex-col items-center justify-center py-2'>
                    <p className='text-xl'>Your New Account created</p>
                    <p>Copy below code and sotre to for future login</p>
                    <div className='mt-5 mb-5 border-2 border-black rounded-xl flex justify-between'>
                        <p className='m-2'>{createString}</p>
                        <button title='CLICK TO COPY' className='bg-blue-500 text-white p-2 rounded-full border-0 m-2'
                            onClick={() => {
                                navigator.clipboard.writeText(createString);
                            }}>
                            Copy
                        </button>
                    </div>
                    NOW SET YOUR ACCOUNT LOGIN PIN
                    <button className='mt-2 bg-blue-600 rounded-xl p-2 text-white hover:bg-blue-800'
                        onClick={()=>{setOpenPin(true)}}
                    >SET PIN</button>

                </div>
            )}
        </>
    )
}
