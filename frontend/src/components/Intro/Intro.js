import React, { useState } from 'react';
import "./Intro.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { useEffect } from 'react'
import banner from './banner_about.webp'
import { Link, useNavigate } from 'react-router-dom';

const Intro = () => {
    const [Intro, setIntro] = useState([]);
    const navigate = useNavigate()
    const settings = {
        responsive: [
            {
                centerPadding: "60px",
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    rows: 2,
                    slidesToScroll: 3,
                    dots: true, infinite: false,
                    slidesPerRow: 1
                }
            }, {
                centerPadding: "60px",
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    rows: 3,
                    slidesToScroll: 2,
                    dots: true, infinite: false,
                    slidesPerRow: 1
                }
            }, {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    rows: 3, infinite: false,
                    slidesToScroll: 1,
                    dots: true,
                    slidesPerRow: 1
                }
            }]
        };
    return(
        <div>
            <section className='section-abt'>
                <Container className='container_intro'>
                    <Row className='element'>
                        <Link to='/' title='banner'>
                            <img className='banner' src={banner}/>
                        </Link>
                    </Row>
                    <Row className='element'>
                        <div className='abt-us'>
                            <Row>
                            <h2 className='title-color'>
                                <a href title="About Us">About Us</a>
                            </h2>
                            <h3 className='title-abt'> Tại sao nên chọn Chúng tôi</h3>
                            <p className='des-abt'>
					        Udemy không chỉ là một lĩnh vực đầu tư tiềm năng mà còn là một sản phẩm nhân văn, mang lại cơ hội tiếp cận tri thức tinh hoa cho tất cả mọi người.
				            </p>
                            <ul className='list-des'>
                                <li>
                                <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#F76758" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>
                                    <span>
                                    Udemy luôn chào đón những nhân tố tài năng và tâm huyết với sứ mệnh "nâng cao giá trị tri thức, phục vụ hàng triệu người Việt Nam"
                                    </span>
                                </li>
                                <li>
                                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#B398FF" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>
                                    <span>An toàn và bảo mật thông tin học viện</span>
                                </li>
                                <li>
                                    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFC107" d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>
                                    <span>Chất lượng bài giảng tốt, nội dung đã qua thẩm định, chọn lọc</span>
                                </li>
                            </ul>
                            </Row>
                            <Row>
                                <Col style={{ textAlign: 'center' }}>
                                    <button className='btn-all' onClick={() => navigate("/ProductList")}>Xem tất cả</button>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    )
}
export default Intro;

