import React from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaRegAddressCard, FaRegCreditCard } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs"
import { useSelector } from "react-redux";

import "./CheckOut.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OrderSummary from './OrderSummary/OrderSummary'

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
          <Col className="main" md= {8}>
            <Row className="title_row">
              <Col>
                  <h3>CARD IMFORMATION</h3>
              </Col>
            </Row>
            <ResponsiveAutoExample />
          </Col>
          <Col className="sidebar">
            <OrderSummary />
          </Col>
        </Row>  
      </Container>
    );
  }

function ResponsiveAutoExample() {
  const user = useSelector((state) => state.user)
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
                        <input value={user.userName} type="text" name="fullname" placeholder="Họ và tên người nhận"></input>
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
                        <input value={user.email} type="text" name="email" placeholder="Email"></input>
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
                      <label className="radio_label">Thanh toán qua Momo</label>
                      <BsBank2 />
                    </div>
                    <div className="purchase-decription">
                      <div>
                        <div className="banking-account">
                          <p>Khách hàng chuyển khoản vào tài khoản của Udemy trong phần Hồ Sơ.</p>
                          <p>Nhân viên của Udemy sẽ gọi điện cho quý khách để xác nhận đơn hàng chuyển khoản.</p>
                          <p>Bạn vui lòng để ý điện thoại ngay khi đặt hàng thành công nhé.</p>
                        </div>
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