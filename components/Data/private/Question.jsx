import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { addQuestion, deleteQuestion } from './../../../utils/pocketbase'
import { handelTime } from './../../../utils/handyFunctions'
import { RiDeleteBin4Line } from 'react-icons/ri'
import { MdOutlineContentCopy } from 'react-icons/md'
import { FiLink } from 'react-icons/fi'
import { AiOutlineSend } from 'react-icons/ai'

export default function Question() {
  const [question, setQuestion] = useState('');
  const [questionList, setQuestionList] = useState([]);

  const generateAlphaNumeric = (l) => {
    let r = '';
    let c = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < l; i++) {
      r += c.charAt(Math.floor(Math.random() * c.length));
    }
    return r;
  }
  const handleQuestionSubmit = (e) => {
    if (question !== '') {
      e.preventDefault();
      let ques = {
        question: question,
        questionID: generateAlphaNumeric(6),
      }
      if (questionList.length === 0) {
        setQuestionList([ques]);
      } else {

        setQuestionList([ques, ...questionList]);
      }
      setQuestion('');
      addQuestion(localStorage.getItem('loginString'), ques.questionID, ques.question);
    }
  }

  const handleQuestionDelete = (questionID, index) => {

    let temp = questionList;
    temp.splice(index, 1);
    setQuestionList([...temp]);
    deleteQuestion(localStorage.getItem('loginString'), questionID);

  }


  useEffect(() => {
    const loginString = localStorage.getItem('loginString');
    axios.get(`/api/userQA?loginString=${loginString}&questionlist=true`)
      .then((response) => {
        setQuestionList(response.data);
      }
      )
  }, [])

  return (
    <div className='bg-gray-100 mt-0 top-0'>
      <div className='m-1 relative'>
        <div className='h-16 '>
        </div>
        <div className='flex flex-col items-center justify-center'>

          <textarea value={question} onChange={(e) => {
            if (e.target.value.length <= 200) {

              setQuestion(e.target.value.trimStart())
            }
          }}
            onKeyUp={
              (e) => {

                if (question && e.key == 'Enter') {
                  handleQuestionSubmit(e)
                }
              }
            }
            className={` rounded-t-2xl  bg-white text-xl font-semibold  border-gray-300 overflow-hidden h-32 sm:h-40 w-11/12 sm:w-9/12 p-3 sm:p-5 resize-none focus:outline-none placeholder:font-semibold placeholder:text-2xl placeholder:text-black placeholder:opacity-50 ${question === '' ? 'rounded-b-2xl shadow-2xl' : ''}`} placeholder='Your Question..' />
          <div className=' bg-white   rounded-b-2xl w-11/12 sm:w-9/12'>

            <button onClick={(e) => { handleQuestionSubmit(e) }} className={` float-right p-5  ${question === '' ? 'hidden' : ''}`}>
              <AiOutlineSend size={40} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${question === '' ? 'h-36' : 'h-16'}`}>
      </div>
      <div className='m-1 min-h-screen'>
        {questionList.length ?
          <p className='text-center font-semibold underline'> Your Questions  </p>
          :
          <p></p>
        }
        <div className='mt-5 flex flex-col items-center  '>
          {
            questionList.map((question, index) => {
              return (
                <div className='bg-white w-11/12 rounded-lg drop-shadow-lg  sm:w-9/12  p-2 mb-5' key={index}>
                  <div className=''>

                    <p className='text-sm p-2 font-bold mb-3'>{question.question}</p>
                    <div className='flex mt-5 items-center hover:cursor-pointer'
                      onClick={() => {
                        navigator.clipboard.writeText(`http:localhost:3000/${question.questionID}`);
                      }}
                    >
                      <span className='text-xs font-semibold mr-2'><FiLink size={20} /> </span>
                      <span className='text-sm font-mono'>{window.location.href.split('question')[0]}{question.questionID}</span>
                    </div>
                    <div className='mt-5'>
                      <span >
                        <button className='hover:text-blue-600 m-2 float-left' title='COPY LINK'
                          onClick={() => {
                            navigator.clipboard.writeText(`${window.location.href.split('question')[0]}${question.questionID}`);
                          }}
                        >
                          <MdOutlineContentCopy size={30} />
                        </button>
                      </span>
                      <span>
                        <button className='hover:text-red-500 m-2 float-right' title='DELETE'
                          onClick={() => {
                            handleQuestionDelete(question.questionID, index);
                          }}
                        >
                          <RiDeleteBin4Line size={30} />
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className='h-16'>

                  </div>
                  <p className=' text-center text-sm opacity-80 -mt-5'>{handelTime(question.createdAt).toLocaleString()}</p>
                </div>
              )
            }
            )
          }
        </div>
      </div>
    </div>
  )
}
