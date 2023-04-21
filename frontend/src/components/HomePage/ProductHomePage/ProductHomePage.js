import React, { useState } from 'react';
import "./ProductHomePage.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import "swiper/css/grid";
import "swiper/css/pagination";
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/scrollbar";
import Product from '../../Product/Product';
import { useEffect } from 'react';
import CoursesDataService from "../../../services/CoursesDataService"
import { TbLanguage } from 'react-icons/tb'
import { FaChartLine, FaHeartbeat } from 'react-icons/fa'
import { MdDraw, MdVideoCameraBack, MdDeveloperBoard, MdFamilyRestroom } from 'react-icons/md'
import { HiOutlineDesktopComputer, HiChip, HiMusicNote } from 'react-icons/hi'
import { GiSkills } from 'react-icons/gi'
import { IoIosPeople, } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom';
const ProductHomePage = () => {
    const navigate = useNavigate()
    const [Products, setProducts] = useState([]);
    const [newProducts, setnewProducts] = useState([]);
    useEffect(() => {
        let btnnew_List = document.querySelectorAll('.btn_fc');
        btnnew_List.forEach(btnnew => {
            btnnew.addEventListener('click', () => {
                document.querySelector('.btn_new_focus').classList.remove('btn_new_focus');
                btnnew.classList.add('btn_new_focus');
            })
        })

        CoursesDataService.getNewCourse()
            .then(response => {
                console.log(response.data);
                console.log("ok");
                setnewProducts(response.data.products);
            })
            .catch(e => {
                console.log(e);
            });

        CoursesDataService.getHotCourse()
            .then(response => {
                console.log(response.data);
                console.log("ok");
                setProducts(response.data.products);
            })
            .catch(e => {
                console.log(e);
            });

    }, [])
    const settings = {
        slidesToShow: 4, dots: true, infinite: false,
        rows: 3,
        slidesPerRow: 1
        , responsive: [
            {
                centerPadding: "60px",
                breakpoint: 1250,
                settings: {
                    slidesToShow: 3,
                    rows: 3,
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
    return (
        <div >
            <div className='dm-course'>
                <div className='line-box'></div>
                <h2 className='header-text'>DANH MỤC KHÓA HỌC</h2>
                <div className='slider-dm'>
                    <Slider {...settings} >
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Kỹ năng ngoại ngữ'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <TbLanguage className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Kỹ năng ngoại ngữ</p></Col>
                                </Row></Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Tin học văn phòng'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <HiOutlineDesktopComputer className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Tin học văn phòng</p></Col>
                                </Row>
                            </Link>

                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Sales, bán hàng'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <FaChartLine className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Sales, bán hàng</p></Col>
                                </Row>
                            </Link>

                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Phát triển cá nhân'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <GiSkills className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Phát triển cá nhân</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Thiết kế đồ họa'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <MdDraw className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Thiết kế đồ họa</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Kỹ năng mềm'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <IoIosPeople className='homepage-categories-icon' />                                </Col>
                                    <Col><p className='dm-text'>Kỹ năng mềm</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Công nghệ thông tin'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <HiChip className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Công nghệ thông tin</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Nhiếp ảnh, quay phim'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <MdVideoCameraBack className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Nhiếp ảnh, quay phim</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Marketing'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <MdDeveloperBoard className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Marketing</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Âm nhạc'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <HiMusicNote className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Âm nhạc</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Sức khỏe, giới tính'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <FaHeartbeat className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Sức khỏe, giới tính</p></Col>
                                </Row>
                            </Link>
                        </button>
                        <button className='dm-btn'>
                            <Link to={'/ProductList/Gia đình'} style={{ color: '#5b5b5b', textDecoration: 'none' }}>
                                <Row >
                                    <Col xs='2'>
                                        <MdFamilyRestroom className='homepage-categories-icon' />
                                    </Col>
                                    <Col><p className='dm-text'>Gia đình</p></Col>
                                </Row>
                            </Link>
                        </button>
                    </Slider>
                    <div className='line-box'></div>
                    <h2 className='header-text '>KHÓA HỌC MỚI NHẤT</h2>
                    <div className='new-course'>
                        <Row >
                            {newProducts.map((item) => <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                <Product product={item} />
                            </Col>)}
                        </Row>
                    </div>
                    <Row>
                        <Col style={{ textAlign: 'center' }}>
                            <button className='btn-all' onClick={() => navigate("/ProductList")}>Xem tất cả</button>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='hot-course'>
                <div className='line-box'></div>
                <Row>
                    <Col xs='3'>
                        <h2 className='header-text'>KHÓA HỌC NỔI BẬT</h2>
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
                <div className='list-hot-course'>
                    <Row style={{ padding: '15px 0px' }}>
                        <Col xs={6} style={{ padding: '0px 8px' }}>
                            <img style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_1.png?1676281841878' />
                        </Col>
                        <Col xs={6} style={{ padding: '0px 8px' }}>
                            <img style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_2.png?1676281841878' />

                        </Col>
                    </Row>

                    {Products.length === 0 ? null :
                        <Row >
                            {Products.map((item) => <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                                <Product product={item} />
                            </Col>)}
                        </Row>}
                </div>
                <Row>
                    <Col style={{ textAlign: 'center' }}>
                        <button className='btn-all' onClick={() => navigate("/ProductList")}>Xem tất cả</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default ProductHomePage;