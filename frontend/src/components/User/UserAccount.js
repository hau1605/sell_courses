import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import User from "./User";
import { useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import "./UserAccount.css";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const UserAccount=()=>{
    const email = useSelector((state) => state.user.email);
    const [user, setUser] = useState({});
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/users/${email}`);
            setUser(res.data);
            setPhoneNumber(res.data.phoneNumber);
            setName(res.data.name);
            setGender(res.data.gender);
        } catch (err) {
            console.log("Lỗi lấy dữ liệu");
            console.error(err);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, [email]);

    const handlePhoneNumberChange = (event) => {
        const phoneNumberValue = event.target.value;
        const submitButton = document.getElementById('submitButton');
        setPhoneNumber(event.target.value);
        // Kiểm tra tính hợp lệ của số điện thoại
        const phoneNumberPattern = /^[0-9]{10,11}$/;
        if (!phoneNumberPattern.test(phoneNumberValue)) {
            setPhoneNumberError('Số điện thoại không hợp lệ');
            submitButton.setAttribute('disabled', true);
        } else {
            submitButton.removeAttribute('disabled');
            setPhoneNumberError('');
        }
    };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
        const res = await axios.put(`http://localhost:8000/api/users/${email}`, {
            phoneNumber,
            name,
            gender,
        });

        if (res.status === 200) {
            console.log('Cập nhật thành công:', res.data.message);
            console.log(res.data);
            setShow(true);
            navigate('/user/profile');
        } else {
            console.error('Lỗi cập nhật:', res.data.error);
            setShow(false);
            setIsLoading(false);
        }
        } catch (err) {
            console.log("Lỗi cập nhật dữ liệu");
            console.error(err);
            setShow(false);
            setIsLoading(false);
        }
    };

    const handleSubmitModal = async (event) => {
        setShow(false);
        setIsLoading(false);
    }
    return(
            <Container className="container-user">
                <Col md={3} className="container-user_navbar">
                    <User page="user-account"></User>
                </Col>
                <Col>
                    <div className="container-form_user-account">
                            <form onSubmit={handleSubmit}>
                                <h3>Hồ Sơ Của Tôi</h3>
                                <h6>Quản lý thông tin hồ sơ</h6>
                                <table>
                                    <tr>
                                        <td><label htmlFor="email">Email:</label></td>
                                        <td><input type="email" 
                                                id="email" 
                                                name="email" 
                                                value={email} 
                                                style={{opacity: 0.8}}
                                                disabled/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="phoneNumber">Số điện thoại:</label></td>
                                        <td><input type="text" 
                                                id="phoneNumber" 
                                                name="phoneNumber" 
                                                value={phoneNumber}
                                                onChange={handlePhoneNumberChange}/>
                                            {phoneNumberError && 
                                            <div style={{ color: 'red' }}>{phoneNumberError}</div>}

                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="name">Tên:</label></td>
                                        <td><input type="text" 
                                                id="name" 
                                                name="name" 
                                                value={name}
                                                onChange={handleNameChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="gender">Giới tính:</label></td>
                                        <td>
                                            <input type="radio" 
                                                id="male" 
                                                name="gender" 
                                                value="Nam" 
                                                checked={gender === 'Nam' } 
                                                onChange={handleGenderChange}/>
                                            <label for="male"> &ensp;Nam&emsp;&ensp;</label>
                                            <input type="radio" 
                                                id="female" 
                                                name="gender" 
                                                value="Nữ" 
                                                checked={gender === 'Nữ' } 
                                                onChange={handleGenderChange}/>
                                            <label for="female"> &ensp;Nữ&emsp;&ensp;</label>
                                            <input type="radio" 
                                                id="other" 
                                                name="gender" 
                                                value="Khác" 
                                                checked={gender === 'Khác' } 
                                                onChange={handleGenderChange}/>
                                            <label for="other"> &ensp;Khác</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="date">Ngày tạo tài khoản:</label></td>
                                        <td><input type="text" id="date" name="date" value={moment(user.date).format('DD/MM/YYYY')} style={{opacity:0.8}} disabled/></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><button id="submitButton" className="btn btn-success btn-lg" type="submit" >Lưu</button></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                </Col>

                <Modal show={show} onHide={()=>setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thông báo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Cập nhật thông tin người dùng thành công.  
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="success" onClick={handleSubmitModal}>Đồng ý</Button>
                    </Modal.Footer>
                </Modal>
        </Container>
    );

}
export default UserAccount;