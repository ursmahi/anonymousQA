import {React, useState} from 'react'
import {answerQuestion} from './../../../utils/pocketbase'
import Loader from './../../Animation/Loader'

export default function Askanything({uniqueID, question }) {
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAnswerSubmit = async(e) => {
        if (answer !== '') {
            e.preventDefault();
            setAnswer('');
            let sendingAnswer = answer;
            await answerQuestion(uniqueID, sendingAnswer).then((res)=>{
                setLoading(true);
                setTimeout(() => {
                    window.location.replace('/sent')
                },2000);
            }).catch((error)=>{
                console.log(error)
                
            })
        }
    }


    return (
        <>
        {
            loading? <Loader/>:
        <div className='min-h-screen bg-gradient-to-b from-purple-700  via-indigo-500 to-purple-300'>

            <div className='h-24'>
            </div>
            <div className='flex justify-center'>

                <div className='bg-white flex flex-col rounded-3xl w-10/12 sm:rounded-3xl sm:w-6/12 '>
                    <div className='flex p-2'>
                        {/* <img className='w-12 h-12 rounded-full m-4 ring-2 ring-indigo-500' src='https://placeimg.com/192/192/people' alt='profile' /> */}
                        
                        <div className=' mt-5'>

                            <p className={`font-semibold  ${question.length <100 ? "text-lg sm:text-xl":"text-sm sm:text-lg"}`}>
                                <span className='text-gray-900'>{question}</span>
                            </p>
                        </div>
                    </div>

                    <textarea value={answer} onChange={
                        (e) => {
                            if(e.target.value.length <250){

                                setAnswer(e.target.value.trimStart())
                            }
                        }
                    } className=' rounded-2xl bg-indigo-400 text-xl font-mono resize-none  border-gray-300  h-32 sm:h-40 w-full p-3 sm:p-5  overflow-hidden focus:outline-none placeholder:font-semibold placeholder:text-2xl placeholder:text-white placeholder:opacity-50' placeholder='send me anonymous messages…' />
                </div>
            </div>
            <p className='text-center p-5'>🔒 anonymous q&a</p>
            {/* <p>{uniqueID}</p> */}
            <div className='flex justify-center'>
                <button onClick={
                    (e) => {
                        handleAnswerSubmit(e)
                    }
                } className='bg-black text-xl  rounded-3xl w-10/12 sm:rounded-3xl sm:w-6/12  text-white font-bold py-2 px-4'>
                    Send
                </button>
            </div>
        </div>

                }
                </>
    )
}
