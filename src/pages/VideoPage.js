import React from 'react';
import video from '../video/video.mp4'

const VideoPage = () => {
  return (
  <div className='video'>
      <div className='container'>
        <div className='video__plyer'>
            <video autoPlay muted loop>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
        <div>

        </div>
      </div>
  </div>
  )
};

export default VideoPage;
