import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { addQuestion, deleteQuestion } from './../../../utils/pocketbase'
export default function Question() {
  const [question, setQuestion] = useState('');
  const [questionList, setQuestionList] = useState([]);

  // console.log(getQuestions(loginString));
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
        <div className='flex flex-col items-center'>

        <textarea value={question} onChange={(e) => {
          if (e.target.value.length <= 200) {
            setQuestion(e.target.value)
          }
          else {
            alert('max 200 characters')
          }
        }} className=' rounded-2xl drop-shadow-2xl bg-white text-xl font-semibold  border-gray-300  h-32 sm:h-40 w-11/12 sm:w-8/12 p-3 sm:p-5 resize-none focus:outline-none placeholder:font-semibold placeholder:text-2xl placeholder:text-black placeholder:opacity-50' placeholder='Your Question..' />
        <button onClick={(e) => { handleQuestionSubmit(e) }} className={` text-white bg-gray-800 hove:bg-black rounded-xl p-3 text-sm font-semibold  m-2 float-right ${question === '' ? 'hidden' : ''}`}>ADD Your Question</button>
        </div>
      </div>
      <div className='h-16'>
      </div>
      <div className='m-1 min-h-screen'>
        { questionList.length ?
        <p className='text-center font-semibold underline'> Your Questions  </p>
      :
      <p></p>
      }
      <div className='mt-5 flex flex-col items-center  '>
        {
          questionList.map((question, index) => {
            return (
                <div className='bg-white w-11/12  sm:w-8/12  p-2 border' key={index}>
                  <div className=''>

                    <p className='text-sm font-semibold mb-3'>{question.question}</p>
                    <span className='text-xs font-semibold'>LINK : </span>
                    <span className='text-xs font-mono'>http:localhost:3000/{question.questionID}</span>
                    <div className='mt-3'>
                      <span>
                        <button className=' bg-gray-800 hover:bg-black hover:shadow-lg text-white rounded-xl p-2 text-sm font-semibold  m-2 float-left' title='Click Here to DELETE THE LINK'
                          onClick={() => {
                            handleQuestionDelete(question.questionID, index);
                          }}
                        >DELETE</button>
                      </span>
                      <span >
                        <button className=' bg-gray-800 hover:bg-black  hover:shadow-lg text-white rounded-xl p-2 text-sm font-semibold  m-2 float-right' title='Click Here to COPY The Question Link'
                          onClick={() => {
                            navigator.clipboard.writeText(`http:localhost:3000/${question.questionID}`);
                          }}
                        >COPY LINK</button>
                      </span>
                    </div>
                  </div>
                  <div className='h-16'>

                  </div>
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
