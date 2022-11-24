import React from 'react'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { GiSplitCross } from 'react-icons/gi'
export default function Landingpage() {
  const [active, setActive] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  const [msg, setMsg] = React.useState('Messages');
  const lstMsg = ['Messages','Suggestions',' Ideas','Feedback','Complaints','Queries','Requests'];
  
  function randomMsg() {
    let rand = Math.floor(Math.random() * lstMsg.length);
    setMsg(lstMsg[rand]);
    setToggle(!toggle);
  }
  React.useEffect(() => {
    setTimeout(randomMsg, 1000);

  }, [toggle]);
  return (
    <>
      <div className={`  ${!active ? 'bg-transparent ' : 'bg-teal-500 text-white'}`}>
        {!active ?
          <div>
            <AiOutlineMenuUnfold size={50} className='cursor-pointer ' onClick={() => {
              setActive(!active);
            }} />
          </div>
          :
          <div className=''>
            <GiSplitCross size={70} className='hover:cursor-pointer hover:animate-spin-slow' onClick={() => {
              setActive(!active);
            }} />
          </div>
        }
      </div>
      {
        active ?
          <div className='min-h-screen w-full fixed bg-teal-500 '>
            <ul>
              <li className='text-4xl w-full hover:border-b hover:text-5xl hover:cursor-pointer text-center text-white p-5 hover:font-semibold' onClick={()=>{window.location.href = '/';}}>Home</li>
              <li className='text-4xl w-full hover:border-b hover:text-5xl hover:cursor-pointer text-center text-white p-5 hover:font-semibold' onClick={()=>{window.location.href = '/account';}}>Account</li>
              <li className='text-4xl w-full hover:border-b hover:text-5xl hover:cursor-pointer text-center text-white p-5 hover:font-semibold' onClick={()=>{window.location.href = '/';}}>About</li>
            </ul>
          </div>
          :
          <div>
            <center>

            <img src='/img/person.png' alt='person' className='sm:w-1/4 sm:h-1/4 w-3/4 h-3/4' />
  
           <h2 className='text-4xl font-semibold'> Get Anonymous  </h2>
           <h3 className='text-3xl'> {msg} </h3>
           <div className='h-16'></div>
           <div className='flex justify-center'>
           <img src='/img/lock.png' alt='lock' className='w-16' />
            <button className='bg-teal-500 text-white text-xl  p-2 rounded-lg hover:bg-teal-600'
            onClick={
              () => {
                window.location.href = '/account';
              }
            }
            >Get Started</button>
            <img src='/img/lock.png' alt='lock' className='w-16' />
           </div>
            </center>
          </div>
      }
      <div>

      </div>
      
    </>
  )
}
