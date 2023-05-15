import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import videoData from './VideoData';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import './Video.css';
const VideoPage = (props) => {
    const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
    const location = useLocation();
	console.log("Khoá học đang xem: ", location.state.course);
  
    return (
      	<div className="body p-4">
			<p className='my-course_breadcrumb'><Link className="text-link-home" to='/'>Trang chủ</Link> / <Link className="text-link-home" to="/user/my-course">Khoá học đã mua</Link> / <span className="text-link-loai">{location.state.course.name}</span></p>
			<div className='video-page'>
				<div className="video-content">
					<VideoPlayer video={selectedVideo} />
				</div>
				<div className="video-list-content">
					<VideoList videos={videoData} onSelectVideo={setSelectedVideo} />
				</div>
			</div>
			<div className='video-decription'>
				<h3 className='name'>{location.state.course.name}</h3>
				<h6 className='cost'>Giá: <span className='text-price'>{location.state.course.cost} ₫</span></h6>
			</div>
		</div>
    );
  }

  export default VideoPage;