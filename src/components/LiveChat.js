import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { getRandomMessage, getRandomNamegenerator } from '../utils/constants'

const LiveChat = () => {

  const dispatch = useDispatch();

  const chatMessages = useSelector((store)=>store.chat.messages)

  const [liveMessage, setLiveMessage] = useState("")

  const chatLive = (e) => {
    e.preventDefault();
    dispatch(addMessage({
      name:"You",
      message:liveMessage
    }))
    setLiveMessage("")
  }

  // setLiveMessage()

  useEffect(() => {    
    const interval = setInterval(() => {
        dispatch(
          addMessage({
            name: getRandomNamegenerator(),
            message: getRandomMessage(Math.floor(Math.random() * 41) + 20)
          })
        )
    }, 1500);
  
    return () => {
      clearInterval(interval)
    }
  }, [])
  

  return (
      <>
      <h1 className='mx-6 mb-2 font-bold text-2xl'>Live Chat</h1>
        <div className='mx-6 p-2 h-[530px] rounded-lg border border-black overflow-y-scroll flex flex-col-reverse'>
            {
              chatMessages.map((message,index)=>{
                return <ChatMessage key={index} name={message.name} message={message.message}/>
              })
            }
        </div>
        <form className='p-2 mt-2 mx-6 border border-gray-400 rounded-md' onSubmit={(e)=>{chatLive(e)}}>
          <input className='w-[80%] border border-black rounded-md px-1' onChange={(e)=>setLiveMessage(e.target.value)} value={liveMessage} type="text" />
          <button className='w-[15%] bg-green-300 border border-black ml-2 px-2 rounded-md' >Send</button>
        </form>
      </>
  )
}

export default LiveChat