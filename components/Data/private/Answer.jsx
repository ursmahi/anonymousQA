import axios from 'axios';
import React from 'react'
import { MdOutlineModeComment } from 'react-icons/md'
import { RiDeleteBin4Line } from 'react-icons/ri'
import Individualresponse from './Individualresponse'
import { addQuestion, deleteQuestion } from './../../../utils/pocketbase'
import { handelTime } from './../../../utils/handyFunctions'

export default function Answer() {
  const [qaList, setQAList] = React.useState([]);
  const [active, setActive] = React.useState(true);
  const [sendData, setSendData] = React.useState({
    question: '',
    responses: ''
  })


  const handleQuestionDelete = (questionID, index) => {

    let temp = qaList;
    temp.splice(index, 1);
    setQAList([...temp]);
    deleteQuestion(localStorage.getItem('loginString'), questionID);

  }

  React.useEffect(() => {
    const loginString = localStorage.getItem('loginString');
    axios.get(`/api/userQA?loginString=${loginString}&qa=true`).then(
      (response) => {
        setQAList(response.data)

      }
    )
  }, []);
  return (
    <div className='bg-gray-100 mt-0 top-0 min-h-screen'>
      <div className='m-1 relative'>
        <div className='h-16 '>

        </div>
        {
          active ? <>

            {
              qaList.length === 0 ? <p className='text-center'> Add a Question first to check the Responses </p>
                :
                qaList.map((response, index) => {
                  return (
                    <div className='flex flex-col  mt-5' key={index}>
                      <div className='flex items-center  justify-center'>
                        <div className='bg-white rounded-lg drop-shadow-lg font-bold resize-none p-2 w-11/12 sm:w-9/12' >
                          {response.question}
                          <div className=' flex justify-between mt-5'>
                            <div className=' flex hover:cursor-pointer' onClick={
                              () => {
                                setSendData({
                                  question: response.question,
                                  responses: response.answers["answers"]
                                });
                                setActive(false);
                              }
                            }>
                              <MdOutlineModeComment size={30} className='fill-black mt-5 ml-5' />
                              <span className='mt-2 text-gray-800'>
                                {response.answers["answers"].length ? response.answers["answers"].length : ''}
                              </span>
                            </div>
                            <div className='mt-4 mr-4 right-0 '>
                              <RiDeleteBin4Line size={30} className='hover:fill-red-600 hover:cursor-pointer'
                                onClick={() => {
                                  handleQuestionDelete(response.questionID, index);
                                }}
                              />
                            </div>
                          </div>
                          <p className='text-center text-sm font-normal opacity-80'>{handelTime(response.createdAt)}</p>
                        </div>
                      </div>
                      {/* {
                  response.answers["answers"].map((ans,index) => {
                    return(

                      <div key={index} className='bg-red-500'>{ans}</div>
                    )
                  })
                } */}
                    </div>
                  )
                }
                )
            }
          </>
            :
            <Individualresponse data={sendData} />
        }
      </div>
    </div>
  )
}
