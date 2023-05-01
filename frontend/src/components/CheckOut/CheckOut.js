import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaRegAddressCard, FaRegCreditCard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs"

import "./CheckOut.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BreadcrumbExample() {
    return (
      <div>
        <Breadcrumb>
            <Breadcrumb.Item className="home-link" href="/">Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item active>
                <strong>
                    <span>Thanh toán</span>
                </strong>
            </Breadcrumb.Item>
        </Breadcrumb>
    </div>   
    );
}

function ContainerFluidBreakpointExample() {
    return (
      <Container fluid="md">
        <Row>
          <Col md= {8}>
            <Row className="title_row">
              <Col>
                  <h3>CARD IMFORMATION</h3>
              </Col>
            </Row>
            <ResponsiveAutoExample />
          </Col>
          <Col>

          </Col>
        </Row>  
      </Container>
    );
  }

function ResponsiveAutoExample() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="section">
              <div className="section_header">
                <div className="section_title">
                  <h4>
                    <FaRegAddressCard className="hidden-lg" />
                    <label className="control-label">Thông tin nhận hàng</label>
                  </h4>
                </div>
              </div>
              <div className="section_content">
                <Row>
                  <Col >
                    <div>
                        <input type="text" name="fullname" placeholder="Họ và tên người nhận"></input>
                    </div>
                  </Col>
                </Row>
                <Row>
                    <Col >
                    <div>
                        <input type="text" name="phoneNumbers" placeholder="Số điện thoại"></input>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <div>
                        <input type="text" name="address" placeholder="Địa chỉ"></input>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <div>
                        <input type="text" name="email" placeholder="Email"></input>
                    </div>
                    </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col>
            <div className="section payment-methods">
              <div className="section_header">
                <div className="section_title">
                  <h4>
                    <FaRegCreditCard className="hidden-lg" />
                    <label className="control-label">Thanh toán</label>
                  </h4>
                </div>
              </div>
              <div className="section_content">
                <div className="content-box">
                  <div className="content-box_row">
                    <div className="radio-wrapper">
                      <label className="radio_label">Thanh toán qua ngân hàng</label>
                      <BsBank2 />
                    </div>
                    <div className="purchase-decription">
                      <div className="banking-account">
                        <p>Ngân hàng Vietcombank CN Hùng Vương</p>
                        <p>Số TK: 0441000707892Chủ TK: Phan Tuấn Anh</p>
                        <p>(Nội dung chuyển khoản: Tên + Số ĐT đặt hàng)</p>
                        
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    );
  }

const CheckOut = () => {

    return (
        <div className="checkOutPage">
            <div className="">
                <BreadcrumbExample className="breadcrumb-contact" tex/>
            </div>
            <div className="body-checkOut">
                <div className="container">
                <ContainerFluidBreakpointExample />
                </div>
            </div>
        </div>
    )
}

export default CheckOut;