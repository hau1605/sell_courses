import React, { useState, useEffect } from 'react';
import Banner from "../Banner/Banner";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import './Register.css'
import { BASE_URL } from '../../config/config';
const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [show, setShow] = useState(false);
    const [fullName, setFullName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setFullName(`${firstName} ${lastName}`);
    }, [firstName, lastName]);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        const phoneNumberValue = event.target.value;
        setPhoneNumber(event.target.value);
        // Kiểm tra tính hợp lệ của số điện thoại
        const phoneNumberPattern = /^[0-9]{10,11}$/; // Regex để kiểm tra số điện thoại 10 hoặc 11 chữ số
        if (!phoneNumberPattern.test(phoneNumberValue)) {
            setPhoneNumberError('Số điện thoại không hợp lệ');
        } else {
            setPhoneNumberError('');
        }
    };

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(event.target.value);
        // Kiểm tra tính hợp lệ của email
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Regex để kiểm tra email
        if (!emailPattern.test(emailValue)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/api/users/`, {email, password, fullName, phoneNumber});
            if (response.status === 201) {
                console.log('Đăng ký thành công:', response.data.message);
                setShow(false);
                setIsLoading(false);
                navigate('/account/login');
            } else {
                console.error('Lỗi đăng ký:', response.data.error);
                setShow(true);
                setIsLoading(false);
            }
        } catch (error) {
            if (error.response) {
                console.error('Lỗi đăng ký có res:', error.response.data.error);
                setShow(true);
                setIsLoading(false);
            } else {
                console.error('Lỗi đăng ký không có res:', error.message);
                setShow(true);
                setIsLoading(false);
            }
        }
    };

    const handleSubmitModal = async () => {
        setShow(false); 
        setIsLoading(false);
    }
    
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']

    return (
    <div>
        <Banner imgs={img} />
            <div className='body'>
            {isLoading && <FullPageLoader/>}
                <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Đăng ký</span></p>
                <section className="section d-flex justify-content-center">
                    <div className="container-form-register">
                        <h2 className="title text-center mb-4">Đăng ký tài khoản</h2>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>
                                        Họ
                                        <span className="required"> *</span>    
                                    </label>
                                    <input required type="text" value={firstName} onChange={handleFirstNameChange} />
                                </div>
                                <div className="input-container">
                                    <label>
                                        Tên
                                        <span className="required"> *</span>    
                                    </label>
                                    <input required type="text" value={lastName} onChange={handleLastNameChange} />
                                </div>
                                <div className="input-container">
                                    <label>
                                        Số điện thoại
                                        <span className="required"> *</span>    
                                    </label>
                                    <input required type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                                    {phoneNumberError && <div style={{ color: 'red' }}>{phoneNumberError}</div>}
                                </div>
                                <div className="input-container">
                                    <label>
                                        Email
                                        <span className="required"> *</span>    
                                    </label>
                                    <input required type="email" name="email" value={email} onChange={handleEmailChange} />
                                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                                </div>
                                <div className="input-container">
                                    <label>
                                        Mật khẩu
                                        <span className="required"> *</span>    
                                    </label>
                                    <input required type="password" value={password} onChange={handlePasswordChange} />
                                </div>
                                <div className="button-container">
                                    <input className="btn" type="submit" value="Đăng ký"/>
                                </div>
                                <p className='or'>
                                    Bạn đã có tài khoản? Đăng nhập <Link to="/account/login">tại đây</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Email đã tồn tại. Vui lòng sử dụng email khác. 
                    Hoặc <Link to='/login'>đăng nhập ngay</Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={handleSubmitModal}>Đồng ý</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Register;