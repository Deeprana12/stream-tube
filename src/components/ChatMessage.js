import React from 'react'

const ChatMessage = ({ name, message }) => {

  const randomEmail = `${Math.random().toString(36).substring(2, 7)}@example.com`;

  const gravatarUrl = `https://www.gravatar.com/avatar/md5${(randomEmail)}?s=200`;

  return (
    <div className="flex border-b mt-2 p-1">
        <img className="h-6 m-2" alt="user_logo" src={gravatarUrl} />
        <div className='mx-2'>
          <span className='font-bold'>{name}</span>
          <span className='m-1 break-words'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage