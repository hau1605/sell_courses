import React, { useState } from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSelectVideo }) => {
    return (
      <ul className="video-list">
        <h5>Danh sách bài giảng</h5>
        {videos.map((video) => (
          <VideoItem key={video.id} video={video} onSelectVideo={onSelectVideo} />
        ))}
      </ul>
    );
  }
  export default VideoList;