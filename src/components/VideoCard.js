import React from 'react'

const VideoCard = ({info}) => {    

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;    

    return (      
        <div className='p-2 m-2 w-[350px] bg-white'>
            <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium?.url} />
            <ul className='mt-2 mx-2'>
                <li className='font-bold line-clamp-2'>{title}</li>
                <li className='text-sm'>{channelTitle}</li>
                {
                    statistics ? (<li className='text-sm'>{(statistics?.viewCount / 100000).toPrecision(2)}L Views</li>) :null
                }
            </ul>
        </div>
    )
}

export default VideoCard