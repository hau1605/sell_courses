import React from 'react';

function VideoPlayer({ video }) {
  if (!video || !video.video_url) {
    return <div>Video không khả dụng</div>;
  }  
  return (
    <div className="video-player">
      <iframe src={video.video_url} title={video.title} width="100%" height="520px" allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
}
export default VideoPlayer;