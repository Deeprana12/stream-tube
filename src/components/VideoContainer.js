import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ShimmerCardList from './ShimmerCardList'
import ShimmerCard from './ShimmerCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);
      const data = await response.json();
      setVideos(data.items);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (loading) {
    return <ShimmerCardList/>
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {videos ? (videos.map((video) => (
        <Link to={"/watch?v="+video.id} key={video.id}><VideoCard info={video} /></Link>
      ))) : <ShimmerCardList/>}
    </div>
  );
};

export default VideoContainer;
