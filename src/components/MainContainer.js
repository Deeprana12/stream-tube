import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {    

  return (
    <div className="flex flex-col justify-center bg-white sm:mt-14 md:mt-2">
        <ButtonList />
        <VideoContainer />        
    </div>
  )
}

export default MainContainer