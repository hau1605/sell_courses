import React, { useState } from 'react';
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Register.css'
const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        try {
            const response = await axios.post('http://localhost:4000/api/users/', {email, password});
            if (response.status === 201) {
                // Đăng ký thành công, thực hiện hành động tương ứng
                console.log('Đăng ký thành công:', response.data.message);
                // Thực hiện hành động sau khi đăng nhập thành công, chẳng hạn chuyển hướng trang
                
            } else {
                // Đăng ký không thành công, hiển thị thông báo lỗi
                console.error('Lỗi đăng ký1:', response.data.error);

            }
        } catch (error) {
            // Xử lý lỗi đăng nhập
            if (error.response) {
                // Nếu có response từ server
                console.error('Lỗi đăng nhập có res:', error.response.data.error);
                
            } else {
                // Nếu không có response từ server
                console.error('Lỗi đăng nhập không có res:', error.message);
            }
        }
        // Có thể gọi API để gửi dữ liệu đăng ký lên server
        // console.log('Đã đăng ký với các thông tin sau:');
        // console.log('Họ:', firstName);
        // console.log('Tên:', lastName);
        // console.log('Số điện thoại:', phoneNumber);
        // console.log('Email:', email);
        // console.log('Mật khẩu:', password);
    };
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']

    return (
    <div>
        <Banner imgs={img} />
            <div className='body'>
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
                                    <input className="btn" type="submit" value="Đăng ký" onClick={handleShow}/>
                                </div>
                                <p className='or'>
                                    Bạn đã có tài khoản? Đăng nhập <a href="/Login">tại đây</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Email đã tồn tại. Vui lòng sử dụng email khác. 
                    Hoặc <Link to='/login'>đăng nhập ngay</Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={handleClose}>Đồng ý</Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}
export default Register;