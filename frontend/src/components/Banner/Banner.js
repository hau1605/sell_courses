import React, { useState } from 'react';
import "./Banner.css";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slider_1 from "./slider_1.webp"
import service_1 from "./service_1.png"
import service_2 from "./service_2.png"
import service_3 from "./service_3.png"
import service_4 from "./service_4.webp"
import slider_2 from "./slider_2.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='body'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider_1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider_1}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div className='service'>
                <Swiper freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className='mySwiper'          
                    breakpoints={
                        {
                            0:{
                                slidesPerView:1,
                                spaceBetween:10
                            },530:{
                                slidesPerView:2,
                                spaceBetween:10
                            },799:{
                                slidesPerView:3,
                                spaceBetween:15
                            },1075:{
                                slidesPerView:4,
                                spaceBetween:20
                            }
                        }
                    }
                >
                    <SwiperSlide>
                        <Container>
                        <Row className='row'>
                            <Col className='col-img' xs='3'>
                                <img className='icon' src={service_1} />
                            </Col>
                            <Col className='col-text'>
                                <Row>
                                    <p className='top-text'>GIẢNG VIÊN UY TÍN</p>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Bài học chất lượng</p>
                                </Row>
                            </Col>
                        </Row>
                        </Container>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='icon' src={service_2} />
                            </Col>
                            <Col className='col-text' >
                                <Row>
                                    <h6 className='top-text'>THANH TOÁN MỘT LẦN</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Học mãi mãi</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide><SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='icon' src={service_3} />
                            </Col>
                            <Col className='col-text'>
                                <Row>
                                    <h6 className='top-text'>HỌC TRỰC TUYẾN</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Hỗ trợ trực tuyến</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide><SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='icon' src={service_4} />
                            </Col>
                            <Col className='col-text'>
                                <Row>
                                    <h6 className='top-text'>CAM KẾT CHẤT LƯỢNG</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Chứng chỉ giáo dục</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    )
}
export default Banner;