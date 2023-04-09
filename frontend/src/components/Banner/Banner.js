import React, { useState } from 'react';
import "./Banner.css"; 
import "slick-carousel/slick/slick.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import service_1 from "./service_1.png"
import service_2 from "./service_2.png"
import service_3 from "./service_3.png"
import service_4 from "./service_4.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import { useEffect } from 'react'
const Banner = () => {
    return (
        <div >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                grabCursor={true}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img
                    className="d-block w-100"
                    src='https://bizweb.dktcdn.net/thumb/2048x2048/100/453/393/themes/894913/assets/slider_1.png?1676281841878'
                    alt="First slide"
                /></SwiperSlide>
                <SwiperSlide><img
                    className="d-block w-100"
                    src='https://bizweb.dktcdn.net/thumb/2048x2048/100/453/393/themes/894913/assets/slider_1.png?1676281841878'
                    alt="First slide"
                /></SwiperSlide>
                <SwiperSlide><img
                    className="d-block w-100"
                    src='https://bizweb.dktcdn.net/thumb/2048x2048/100/453/393/themes/894913/assets/slider_1.png?1676281841878'
                    alt="First slide"
                /></SwiperSlide>
            </Swiper>
            <div className='service'>
                <Swiper
                    modules={[Scrollbar]}
                    scrollbar={{
                        hide: false,
                    }}
                    className='mySwiper'
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            }, 530: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            }, 799: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            }, 1075: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }
                    }
                >
                    <SwiperSlide style={{ paddingBottom: '12px' }}>
                        <Row className='row'>
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_1} />
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_2} />
                            </Col>
                            <Col className='col-text' >
                                <Row>
                                    <h6 className='top-text'>THANH TOÁN 1 LẦN</h6>
                                </Row>
                                <Row>
                                    <p className='bot-text'>Học mãi mãi</p>
                                </Row>
                            </Col>
                        </Row>
                    </SwiperSlide><SwiperSlide>
                        <Row>
                            <Col className='col-img' xs='3'>
                                <img className='iconn' src={service_3} />
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
                                <img className='iconn' src={service_4} />
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