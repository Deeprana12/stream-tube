import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_COMMENT } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';

const commentData = [
  {
    name: "Deep Rana",
    text: "This is my comment",
    replies: []
  },
  {
    name: "Deep Rana",
    text: "This is my comment",
    replies: [
        {
          name: "Deep Rana",
          text: "This is my comment",
          replies: []
        },
        {
          name: "Deep Rana",
          text: "This is my comment",
          replies: [
            {
              name: "Deep Rana",
              text: "This is my comment",
              replies: [
                {
                  name: "Deep Rana",
                  text: "This is my comment",
                  replies: [
                    {
                      name: "Deep Rana",
                      text: "This is my comment",
                      replies: [
                        {
                          name: "Deep Rana",
                          text: "This is my comment",
                          replies: [
                            {
                              name: "Deep Rana",
                              text: "This is my comment",
                              replies: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "Deep Rana",
          text: "This is my comment",
          replies: []
        }                
      ]
  },
  {
    name: "Deep Rana",
    text: "This is my comment",
    replies: [
      {
        name: "Deep Rana",
        text: "This is my comment",
        replies: []
      }
    ]
  },
  {
    name: "Deep Rana",
    text: "This is my comment",
    replies: []
  }  
]

const Comment = ({ data }) => {    

  const {authorProfileImageUrl, authorDisplayName, textDisplay, likeCount }  = data?.snippet?.topLevelComment?.snippet;
  
  return (
      <div className='flex p-2 rounded-lg'>
        <img className="h-8 w-8 rounded-full" alt="user" src={authorProfileImageUrl} /> 
        <div className='px-3'>
          <p className='font-bold'>{authorDisplayName}</p>
          <p className='break-words line-clamp-1'>{textDisplay}</p>
          <div className='flex'>
            <p>👍 {likeCount}</p>
          </div>
        </div>
      </div>
  )
}

const CommentList = ({comments}) =>{
    return comments.map((comment)=>
      <div className='mt-2'>
        <Comment key={comment.id} data={comment} />        
      </div>
    )
}

const CommentContainer = () => {

  const [searchParams] = useSearchParams()
  const video_id = searchParams.get("v");  
  const [allComments, setAllComments] = useState([])  

  const getVideoAPI = async () => {
      const data = await fetch(YOUTUBE_VIDEO_COMMENT + video_id)
      const json = await data.json()
      console.log(json)
      setAllComments(json.items)
  }    

  useEffect(() => {
    getVideoAPI()      
  }, [])
  

  return (    
    <div className='col-span-4 mt-2'>
      <h1 className='text-lg font-bold'>{allComments?.length} Comments</h1>
      <CommentList comments={allComments}/>
    </div>
  )
}

export default CommentContainer