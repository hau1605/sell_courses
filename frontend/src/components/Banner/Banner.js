import React, { useState } from 'react';
import "./Banner.css"; import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
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
import { Grid, Navigation, Pagination, Autoplay } from 'swiper';
import "swiper/css/grid";
import "swiper/css/pagination";
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
        let btnnew_List = document.querySelectorAll('.btn_fc');
        btnnew_List.forEach(btnnew => {
            btnnew.addEventListener('click', () => {
                document.querySelector('.btn_new_focus').classList.remove('btn_new_focus');
                btnnew.classList.add('btn_new_focus');
            })
        })

    }, [])
    const settings = {
        slidesToShow: 3, dots: true, infinite: false,

        rows: 4,
        slidesPerRow: 1
        , responsive: [
            {
                centerPadding: "60px",
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    rows: 4,
                    slidesToScroll: 2,
                    dots: true, infinite: false,
                    slidesPerRow: 1
                }
            }, {
                breakpoint: 635,
                settings: {
                    slidesToShow: 1,
                    rows: 4, infinite: false,
                    slidesToScroll: 1,
                    dots: true,
                    slidesPerRow: 1
                }
            }]
    };

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
            <div className='dm-course'>
                <div className='line-box'></div>
                <h2 className='header-text'>DANH MỤC KHÓA HỌC</h2>
                <div className='slider-dm'>
                    <Slider {...settings} style={{ margin: '0 -20px' }}>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-1.png?v=1650870899583' />
                                </Col>
                                <Col><p className='dm-text'>Kỹ năng ngoại ngữ</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-2.png?v=1650870918480' />
                                </Col>
                                <Col><p className='dm-text'>Phát triển cá nhân</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-3.png?v=1650870939317' />
                                </Col>
                                <Col><p className='dm-text'>Sales, bán hàng</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-4.png?v=1650870959740' />
                                </Col>
                                <Col><p className='dm-text'>Phong cách sống</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-5.png?v=1650871002043' />
                                </Col>
                                <Col><p className='dm-text'>Thiết kế đồ họa</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-6.png?v=1650871017387' />
                                </Col>
                                <Col><p className='dm-text'>Tin học văn phòng</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-7.png?v=1650871036620' />
                                </Col>
                                <Col><p className='dm-text'>Công nghệ thông tin</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-8.png?v=1650871148297' />
                                </Col>
                                <Col><p className='dm-text'>Nhiếp ảnh, quay phim</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-9.png?v=1650871168327' />
                                </Col>
                                <Col><p className='dm-text'>Marketing</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-10.png?v=1650871192850' />
                                </Col>
                                <Col><p className='dm-text'>Kinh doanh khởi nghiệp</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-11.png?v=1650871213070' />
                                </Col>
                                <Col><p className='dm-text'>Sức khỏe, giới tính</p></Col>
                            </Row>
                        </button>
                        <button className='dm-btn'>
                            <Row >
                                <Col xs='2'>
                                    <img src='https://bizweb.dktcdn.net/thumb/large/100/453/393/collections/cate-12.png?v=1650871223330' />
                                </Col>
                                <Col><p className='dm-text'>Gia đình</p></Col>
                            </Row>
                        </button>
                    </Slider>
                </div>




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
                    <Col style={{ textAlign: 'center' }}>
                        <button className='btn-all'>Xem tất cả</button>
                    </Col>
                </Row>
            </div>
            <div className='hot-course'>
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
                <Row style={{ padding: '15px 0px' }}>
                    <Col xs={6} style={{ padding: '0px 8px' }}>
                        <img style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_1.png?1676281841878' />
                    </Col>
                    <Col xs={6} style={{ padding: '0px 8px' }}>
                        <img style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_2.png?1676281841878' />

                    </Col>
                </Row>
                <Row >
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col >
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                    <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product /></Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <button className='btn-all'>Xem tất cả</button>
                    </Col>
                </Row>
            </div>


        </div>

    )
}
export default Banner;