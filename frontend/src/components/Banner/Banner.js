import React, { useState } from 'react';
import "./Banner.css";
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from "./slider_1.webp"
import slider_2 from "./slider_2.webp"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper';
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
            <Swiper freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className='mySwiper'
            slidesPerView={4}
            spaceBetween={15}
            >
            <SwiperSlide className='sl'>
                <h4>GIẢNG VIÊN UY TÍN</h4>
                <p>Bài học chất lượng</p>
            </SwiperSlide>
            <SwiperSlide className='sl'>
                <h4>GIẢNG VIÊN UY TÍN</h4>
                <p>Bài học chất lượng</p>
            </SwiperSlide><SwiperSlide className='sl'>
                <h4>GIẢNG VIÊN UY TÍN</h4>
                <p>Bài học chất lượng</p>
            </SwiperSlide><SwiperSlide className='sl'>
                <h4>GIẢNG VIÊN UY TÍN</h4>
                <p>Bài học chất lượng</p>
            </SwiperSlide>
            </Swiper>
        </div>

    )
}
export default Banner;