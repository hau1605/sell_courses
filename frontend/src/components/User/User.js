import React, {useState, useEffect} from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { Card, Layout, Space } from 'antd';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import './User.css'
const User = (props) => {
    useEffect (() => {
        console.log(props.page);
        console.log(document.getElementById(props.page));
        document.getElementById(props.page).style.color = "red";
    },[]);
    return (
    <div className="sidebar_user d-flex justify-content-center align-items-center ">   
        <Container fluid>
                <Col>
                    <Nav className="flex-column">
                        <Link to="/" className="fw-bolder h6" >
                            Trang chủ
                        </Link>
                        <Link to="/cart" className="fw-bolder h6" >
                            Giỏ hàng
                        </Link>
                        <Link to="/user/my-course" id="user-mycourse" className="fw-bolder h6" >
                            Khoá học đã mua
                        </Link>
                        <Link to="/user/profile" id="user-account" className="fw-bolder h6" >
                            Hồ sơ
                        </Link>
                        <Link to="/user/password" id="user-password" className="fw-bolder h6" >
                            Đổi mật khẩu    
                        </Link>
                    </Nav>
                </Col>
        </Container>
    </div>
    )
};
export default User;
