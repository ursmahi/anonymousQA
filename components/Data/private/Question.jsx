import {React, useState} from 'react'

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
    if(question !== ''){
    e.preventDefault();
    let ques ={
      question: question,
      questionID: generateAlphaNumeric(6),
    }
    if(questionList.length === 0){
      setQuestionList([ques]);
    }else{

    setQuestionList([...questionList, ques]);
    }
    setQuestion('');
    }
  }
  return (
    <div>

      <div className='m-1'>
      <textarea value={question} onChange={(e)=>{setQuestion(e.target.value)}} className=' rounded-2xl bg-slate-100 text-xl font-semibold  border-gray-300  h-32 sm:h-40 w-full p-3 sm:p-5 resize-none focus:outline-none placeholder:font-semibold placeholder:text-2xl placeholder:text-black placeholder:opacity-50' placeholder='Your Question..' />
      <button  onClick={(e)=>{handleQuestionSubmit(e)}} className={`bg-black text-white rounded-xl p-2 text-sm font-semibold  m-2 float-right ${question ===''? 'hidden':''}`}>ADD Your Question</button>
      </div>
      <div className='h-16'>
      </div>
      <div className='m-1'>
    <p className='text-center font-semibold underline'> Anonymous questions which you asked </p>
        {
          questionList.map((question, index) => {
            return (
              <div className='bg-slate-100 rounded-xl p-2 m-2'>
                <div className=''>

                <p className='text-sm font-semibold mb-3'>{question.question}</p>
                <span className='text-xs font-semibold'>LINK : </span>
                <span className='text-xs font-mono'>http:localhost:3000/{question.questionID}</span>
                <div className='mt-3'>
                <span>
                <button className='bg-black text-white rounded-xl p-2 text-sm font-semibold  m-2 float-left' title='Click to DELETE THE LINK'
                onClick={()=>{
                  let temp = questionList;
                  temp.splice(index,1);
                  setQuestionList([...temp]);
                }}
                >DELETE</button>
                </span>
                <span >
                  <button className='bg-black text-white rounded-xl p-2 text-sm font-semibold  m-2 float-right' title='Click to COPY questionID'
                  onClick={() => {
                    navigator.clipboard.writeText(`http:localhost:3000/${question.questionID}`);
                  }}
                  >COPY LINK</button>
                </span>
                </div>
                </div>
              <div className='h-12'>
                
              </div>
              </div>
            )
          }
          )
        }
        </div>
    </div>
  )
}
