import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import videoData from './VideoData';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import './Video.css';
import axios from 'axios'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button'
const VideoPage = (props) => {
	//Chat GPT
		const [question, setQuestion] = useState('');
		const [answer, setAnswer] = useState('');
	  
		const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
	  
		const handleQuestionChange = (e) => {
		  setQuestion(e.target.value);
		};
	  
		const handleQuestionSubmit = async (e) => {
		  e.preventDefault();
	  
		  if (question.trim() === '') return;
		  setAnswer('Đang trả lời...');
	  
		  try {
			const response = await axios.post(apiUrl, {
			  prompt: `Question: ${question}\nAnswer:`,
			  max_tokens: 500,
			  temperature: 0.6,
			  top_p: 1,
			}, {
			  headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer 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',
			  },
			});
	  
			const answer = response.data.choices[0].text.trim();
			setAnswer(answer);
		  } catch (error) {
			console.error('Error:', error);
		  }
		};

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
			<div>
      <Form onSubmit={handleQuestionSubmit} className="video-content">
		<Form.Label style={{fontWeight:'600',fontSize:'20px', border:'none', marginTop:'10px',marginBottom:'10px'}}>
			Giải đáp cùng AI
		</Form.Label>
        <Form.Control
          type="text"
          value={question}
          onChange={handleQuestionChange}
        />
        <Button type="submit" style={{backgroundColor:'#00bc86', border:'none', marginTop:'10px',marginBottom:'10px'}}>Đặt câu hỏi</Button>
		<Form.Control
          as="textarea" style={{minHeight:'100px'}}
		  value={answer}
       readOnly/>
      </Form>
      
    </div>
		</div>
    );
  }

  export default VideoPage;