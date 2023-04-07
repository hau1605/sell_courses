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
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";
import Product from '../Product/Product'

import Button from 'react-bootstrap/Button';
import { useEffect } from 'react'

const Banner = () => {
    const [index, setIndex] = useState(0);
    const swiper = useSwiper();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    useEffect(() => {
        //     const btn_fc=document.querySelectorAll(".btn_fc");
        // btn_fc.addEventListener('click',()=>{
        //     btn_fc.classList.add("btn_new_focus");
        //     console.log('huhu')

        // });
        let btnnew_List = document.querySelectorAll('.btn_fc');
        btnnew_List.forEach(btnnew => {
            btnnew.addEventListener('click', () => {
                document.querySelector('.btn_new_focus').classList.remove('btn_new_focus');
                btnnew.classList.add('btn_new_focus');
            })
        })

    }, [])


    return (
        <div className='body'>
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
                    loop={true}

                    modules={[Navigation]}
                    navigation={true}
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
            <div className='dm-course'>
                <div className='line-box'></div>
                <h2 className='header-text'>DANH MỤC KHÓA HỌC</h2>
                <Container>
                    <Row>
                        <Col>
                            <button className='dm-btn'>
                                <Row>
                                    <Col xs='2'>
                                        <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-1.png?v=1650870899583' />
                                    </Col>
                                    <Col><p className='dm-text'>Kỹ năng ngoại ngữ</p></Col>
                                </Row>
                            </button>
                        </Col>
                        <Col>
                            <button className='dm-btn'>
                                <Row>
                                    <Col xs='2'>
                                        <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-1.png?v=1650870899583' />
                                    </Col>
                                    <Col><p className='dm-text'>Kỹ năng ngoại ngữ</p></Col>
                                </Row>
                            </button>
                        </Col><Col>
                            <button className='dm-btn'>
                                <Row>
                                    <Col xs='2'>
                                        <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-1.png?v=1650870899583' />
                                    </Col>
                                    <Col><p className='dm-text'>Kỹ năng ngoại ngữ</p></Col>
                                </Row>
                            </button>
                        </Col><Col>
                            <button className='dm-btn'>
                                <Row>
                                    <Col xs='2'>
                                        <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-1.png?v=1650870899583' />
                                    </Col>
                                    <Col><p className='dm-text'>Kỹ năng ngoại ngữ</p></Col>
                                </Row>
                            </button>
                        </Col>
                    </Row>
                </Container>
                <div className='line-box'></div>

                <Row>
                    <Col xs='3'>
                        <h2 className='header-text mgl-12'>KHÓA HỌC MỚI NHẤT</h2>
                    </Col>
                    <Col className='col-new'>
                        <button className='btn-new btn_fc btn_new_focus' autoFocus={true}>
                            Tất cả
                        </button>
                        <button className='btn-new btn_fc' >
                            Thiết kế đồ họa
                        </button>
                        <button className='btn-new btn_fc' >
                            Sale, bán hàng
                        </button>
                        <button className='btn-new btn_fc' >
                            Gia đình
                        </button>
                        <button className='btn-new btn_fc' >
                            Tin học văn phòng
                        </button>

                    </Col>

                </Row>
                <Row>
                    <Col className='col-new-mobile'>
                        <Swiper
                            scrollbar={{
                                hide: false,
                            }}
                            modules={[Scrollbar]}
                            slidesPerView={4}
                            className="mySwiper"
                            breakpoints={
                                {
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10
                                    }, 200: {
                                        slidesPerView: 2,
                                        spaceBetween: 10
                                    }, 500: {
                                        slidesPerView: 3,
                                        spaceBetween: 15
                                    }, 650: {
                                        slidesPerView: 4,
                                        spaceBetween: 20
                                    }

                                }
                            }
                        >
                            <SwiperSlide><button className='btn-new btn_fc btn_new_focus' autoFocus={true}>
                                Tất cả
                            </button></SwiperSlide>
                            <SwiperSlide><button className='btn-new btn_fc' >
                                Thiết kế đồ họa
                            </button></SwiperSlide>
                            <SwiperSlide><button className='btn-new btn_fc' >
                                Sale, bán hàng
                            </button></SwiperSlide>
                            <SwiperSlide><button className='btn-new btn_fc' >
                                Gia đình
                            </button></SwiperSlide>
                            <SwiperSlide><button className='btn-new btn_fc' >
                                Tin học văn phòng
                            </button></SwiperSlide>
                        </Swiper>
                    </Col>
                </Row>
                <Row >
                    <Col xs={6} lg={4} style={{ padding: '8px' }}>
                        <Product /></Col >
                    <Col xs={6} lg={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={4} style={{ padding: '8px' }}>
                        <Product /></Col><Col xs={6} lg={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                </Row>
                <Row>
                    <Col>
                        <button className='btn-all'>Xem tất cả</button></Col>
                </Row>
            </div>
            <div className='hot-course'>
                <div className='line-box'></div>
                <h2 className='header-text'>KHÓA HỌC NỔI BẬT</h2>
            </div>
        </div>

    )
}
export default Banner;