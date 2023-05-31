import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import './Footer.css';
import { SlLocationPin } from 'react-icons/sl'
import { BsTelephone } from 'react-icons/bs'
import { MdEmail,MdCall } from 'react-icons/md'
import { SiInstagram } from 'react-icons/si'
import { FaFacebookF} from 'react-icons/fa'
import { AiFillYoutube} from 'react-icons/ai'

const Footer = () => {

    return (
        <div className="footer-container">
            <Container >
                <Row style={{display:"flex"}} >
                    <Col lg='4' sm='6' style={{justifySelf:'center'}}>
                        <img className="footer-logo"  src='https://res.cloudinary.com/ktpthtw/image/upload/v1684669330/Logo/lord_white_wkvuld.png' />
                        <div className="footer-btn-container">
                            <button className="footer-btn-contact">
                                <MdCall className="footer-btn-contact-icon"/>
                            </button>
                            <button className="footer-btn-contact">
                                <SiInstagram className="footer-btn-contact-icon"/>
                            </button>
                            <button className="footer-btn-contact">
                                <FaFacebookF className="footer-btn-contact-icon"/>
                            </button>
                            <button className="footer-btn-contact">
                                <AiFillYoutube className="footer-btn-contact-icon"/>
                            </button>
                        </div>
                        
                    </Col>
                    <Col lg='3' sm='6'>
                        <Row>
                            <p className="footer-headertext">LIÊN HỆ</p>

                            <div className="footer-contact-detail">
                                <SlLocationPin  className="footer-contact-detail-icon"/>
                                <p className="footer-contact-detail-text">Sunview Town, Thủ Đức, Hồ Chí Minh</p>
                            </div>
                            <div className="footer-contact-detail">
                                <BsTelephone className="footer-contact-detail-icon"/>
                                <p className="footer-contact-detail-text">0343393337</p>
                            </div>
                            <div className="footer-contact-detail" style={{marginBottom:'10px'}}>
                                <MdEmail className="footer-contact-detail-icon"/>
                                <p className="footer-contact-detail-text">minhhung.0163@gmail.com</p>
                            </div>
                        </Row>
                    </Col>
                    <Col lg='2' sm='6'>
                        <p className="footer-headertext">VỀ LORDEDU</p>
                        <ul className="footer-aboutlink">
                            <li className="footer-aboutlink-text">
                                <Link>Trang chủ</Link>
                            </li >
                            <li className="footer-aboutlink-text">
                                <Link>Danh sách khóa học</Link>
                            </li>
                            <li className="footer-aboutlink-text">
                                <Link>Liên hệ</Link>
                            </li>
                            <li className="footer-aboutlink-text">
                                <Link>Giỏ hàng</Link>
                            </li>
                            <li className="footer-aboutlink-text" style={{marginBottom:'10px'}}> 
                                <Link>Tài khoản</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col lg='3' sm='6'>
                        <p className="footer-headertext">HỖ TRỢ</p>
                        <ul className="footer-aboutlink">
                            <li className="footer-aboutlink-text">
                                <Link>Chính sách và điều khoản</Link>
                            </li >
                            <li className="footer-aboutlink-text">
                                <Link>Đội ngũ phát triển</Link>
                            </li>
                            <li className="footer-aboutlink-text">
                                <Link>Đóng góp dịch vụ</Link>
                            </li>
                            
                        </ul>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
export default Footer;