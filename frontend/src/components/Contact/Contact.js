import React, { useEffect, useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { MdLocationPin, MdOutlineMailOutline } from "react-icons/md"
import { BsTelephoneFill } from "react-icons/bs"

import ContactForm from "../ContactForm/ContactForm";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Contact.css"
import Banner from "../Banner/Banner";

function BreadcrumbExample() {
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item className="home-link" href="/">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item active>
                <strong>
                    <span>Liên hệ</span>
                </strong>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>   
    );
  }

function AutoLayoutExample() {
  return (
    <Container>
        <Row>
        <Col>
            <div className="single-contact clearfix">
                <div className="contact-icon"><MdLocationPin /></div>
                <div className="content_contact">
                    <h3>    Địa chỉ </h3>
                    <span>Tầng 4 - Tòa nhà Hanoi Group - 442 Đội Cấn - Ba Đình - Hà Nội</span>
                </div>
            </div>
        </Col>
        <Col>
            <div className="single-contact clearfix">
                <div className="contact-icon"><MdOutlineMailOutline /></div>
                <div className="content_contact">
                    <h3>Email</h3>
                    <a className="phone" href="mailto:20520412@gm.uit.edu.vn">20520412@gm.uit.edu.vn</a>
                    <a className="phone" href="mailto:support@uit.edu.vn">support@uit.edu.vn</a>
                </div>
            </div>
        </Col>
        <Col>
            <div className="single-contact clearfix">
                <div className="contact-icon"><BsTelephoneFill /></div>
                <div className="content_contact">
                    <h3>Số điện thoại</h3>
                    <a className="phone" href="tel:19006750">1900 6750</a>
                    <a className="phone" href="tel:0918291529">0918291529</a>
                </div>
            </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-contact-form">
            <div className="contact_form">
                <h3 className="tittle_form">Liên hệ với chúng tôi</h3>
                <ContactForm />
            </div>
        </Col>  
      </Row>
    </Container>    
  );
}

const Contact =() => {
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    return (
        <div className="contact_page">
            <Banner imgs={img} />
            <div className="body-contact">
                {/* <p><Link title="text-link-home" to="/">Trang chủ</Link>/<span title="text-link-types">Liên hệ</span></p> */}
                <BreadcrumbExample className="breadcrumb-contact" tex/>
                <div className="page-contact page" style={{margin: '20px 0'}}>
                    <div className="container-contact">
                        <h1 className="pageTitle">Liên hệ</h1>
                        <AutoLayoutExample />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;