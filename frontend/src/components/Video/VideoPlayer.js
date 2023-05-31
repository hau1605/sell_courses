import React, { useState } from 'react';

function VideoPlayer({ video }) {
    return (
      <div className="video-player">
        <iframe src={video.url} title={video.title} width="100%" height="520px" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    );
  }

  export default VideoPlayer;