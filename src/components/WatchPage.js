import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer'
import LiveChat from './LiveChat'
import { YOUTUBE_VIDEO_METADAT_API } from '../utils/constants'

const WatchPage = () => {
  
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const video_id = searchParams.get("v");    
  const [videoMetaData, setVideoMetaData] = useState(null)
  const [loading, setLoading] = useState(true)

  const getVideoMetadata = async () => {
      const data = await fetch(YOUTUBE_VIDEO_METADAT_API + video_id);
      const json = await data.json();
      setVideoMetaData(json.items[0])         
      setLoading(false)
  }

  useEffect(() => {      
      dispatch(closeMenu())       
      getVideoMetadata()
  }, [])
    

  return (
    <>{!loading?
      <div className='text-black mt-4'>
        <div className="flex flex-col ml-16">
        <div className="flex flex-row">
          <div className="grow">
            <iframe
              width="100%"
              height="570"
              src={"https://www.youtube.com/embed/" + video_id + "?autoplay=1"}
              title="YouTube video player"
              frameBorder="0"              
              allowFullScreen
            ></iframe>
            <h1 className='mt-2 text-lg text-bold'>{videoMetaData?.snippet?.title}</h1>            
            <h1 className='text-base text-bold'>{videoMetaData?.snippet?.channelTitle}</h1>
            <h2>{(videoMetaData?.statistics?.viewCount / 1000000).toPrecision(2)}L Views</h2>
          </div>
          <div className="w-1/3">
            <LiveChat/>
          </div>
        </div>          
          <CommentContainer/>      
        </div>
      </div>:null}
    </>
  )
}

export default WatchPage