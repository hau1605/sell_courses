import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import VideoDes from './VideoDes';
import './Video.css';
import axios from 'axios'
import Form from 'react-bootstrap/esm/Form'
import Button from 'react-bootstrap/Button'
import CourseRating from '../Rating/CourseRating';

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

	const [course, setCourse] = useState([]);
	const [courseDes, setCourseDes] = useState();
	const [selectedVideo, setSelectedVideo] = useState();
	const location = useLocation();

	const courseContent = async () => {
		try {
			const res = await axios.get(`http://localhost:8000/api/courses/content/${location.state.course.course_id}`)
			if (res.status === 200) {
				console.log("Get courseContent thành công: ", res.data.content)
				setCourse(res.data.content)
				console.log("location.state.course: ", location.state.course)
				setCourseDes(location.state.course)
			} else {
				console.log("Get courseContent thất bại")
			}
		} catch (err) {
			console.log("Lỗi lấy data: ", err)
		}
	}

	useEffect(() => {
		courseContent();
		console.log("course: ", course)
	}, [])
	useEffect(() => {
		if (course.length > 0) {
			setSelectedVideo(course[0]);
		}
	}, [course])

	return (
		<div className="body p-4">
			<p className='my-course_breadcrumb'>
				<Link className="text-link-home" to='/'>Trang chủ</Link> /
				<Link className="text-link-home" to="/user/my-course"> Khoá học đã mua</Link> /
				<span className="text-link-loai">{location.state.course.course_name}</span>
			</p>

			<div className='video-page'>
				<div className="video-content">
					<VideoPlayer video={selectedVideo} />
				</div>
				<div className="video-list-content">
					<VideoList videos={course} onSelectVideo={setSelectedVideo} />
				</div>
			</div>

			<div className='video-decription'>
				<VideoDes course={courseDes} video={selectedVideo} />
			</div>

			<div>
				<Form onSubmit={handleQuestionSubmit} className="video-content">
					<Form.Label style={{ fontWeight: '600', fontSize: '20px', border: 'none', marginTop: '10px', marginBottom: '10px' }}>
						Giải đáp cùng AI
					</Form.Label>
					<Form.Control
						type="text"
						value={question}
						onChange={handleQuestionChange}
					/>
					<Button type="submit" style={{ backgroundColor: '#00bc86', border: 'none', marginTop: '10px', marginBottom: '10px' }}>Đặt câu hỏi</Button>
					<Form.Control
						as="textarea" style={{ minHeight: '100px' }}
						value={answer}
						readOnly />
				</Form>
			</div>

			<div>
				<Form.Label style={{ fontWeight: '600', fontSize: '20px', border: 'none', marginTop: '10px', marginBottom: '10px' }}>
					Đánh giá của bạn về khóa học
				</Form.Label>
				<CourseRating courseId={course.id} />
			</div>
		</div>
	);
}

export default VideoPage;