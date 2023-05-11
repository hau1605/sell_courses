import React, { useState } from 'react';

function VideoItem({ video, onSelectVideo }) {
    return (
      <li className="video-item" onClick={() => onSelectVideo(video)}>
        <div className="video-item-thumbnail">
          <img src={`https://res.cloudinary.com/ktpthtw/video/upload/v1681149149/video/dmf_why-facebook-loves-videos-more-than-anything-else.jpg`} alt={video.title} />
        </div>
        <div className="video-item-title">{video.title}</div>
      </li>
    );
  }

  export default VideoItem;