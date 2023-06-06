import React from 'react';

function VideoItem({ video, onSelectVideo }) {
    return (
      <li className="video-item" onClick={() => onSelectVideo(video)}>
        <div className="video-item-thumbnail">
          <img src={video.thumbnail_url} alt={video.title} />
        </div>
        <div className="video-item-title">{video.title}</div>
      </li>
    );
  }

  export default VideoItem;