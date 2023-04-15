import React, { useEffect, useState } from "react";
import UserDataService from '../../services/UserDataService'
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import './ResetPass.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ResetPass = () => {
    const [isResetPasswordFormVisible, setIsResetPasswordFormVisible] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [verificationCodeError, setVerificationCodeError] = useState('');
    const emailResetPassword = useSelector((state) => state.user.emailResetPassword);
    const navigate = useNavigate();
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    
    const handleCodeChange = (event) => {
        const codeValue = event.target.value;
        const submitButton = document.getElementById('submitButton');
        
        setVerificationCode(codeValue);
        if (codeValue.length === 6 && !isNaN(codeValue)) {
            submitButton.removeAttribute('disabled');
            console.log(emailResetPassword);
            console.log("Đủ 6 số");
            console.log(codeValue);
            setVerificationCodeError("");
        } else {
            submitButton.setAttribute('disabled', true);
            console.log("Không đủ 6 số");
            setVerificationCodeError("Không đúng định dạng!");
        }
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmitCode = async (event) => {
        event.preventDefault();
        try {
            console.log(emailResetPassword);
            console.log(verificationCode);
            const response = await axios.post('http://localhost:8000/api/users/reset-password/confirmOtp', { emailResetPassword,verificationCode });
            console.log(response.status);
            if (response.status === 200) {
                console.log('Mã xác nhận đúng. ', response.data.message);
                setShow(false);
                setIsResetPasswordFormVisible(true);
                console.log("Hiển thị form đặt mật khẩu.");
            } else {
                console.error('Mã đăng nhập không hợp lệ:', response.data.error);
                setShow(true);
                setIsResetPasswordFormVisible(false);
                console.log("Hiển thị form nhập mã xác nhận");
            }
        } catch (error) {
            if (error.response) {
                console.error('Lỗi 1:', error.response.data.error);
                setShow(true);
                setIsResetPasswordFormVisible(false);
                console.log("Hiển thị form nhập mã xác nhận");
            } else {
                console.error('Lỗi 2:', error.message);
                setShow(true);
                setIsResetPasswordFormVisible(false);
                console.log("Hiển thị form nhập mã xác nhận");
            }
        }
    };

    const handleResetPassword = async (event)=> {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/users/reset-password', { emailResetPassword, password });
            console.log(response.status);
            if (response.status === 200) {
                // setSuccess(true);
                // setError('OK');
                console.log('Đặt lại mật khẩu thành công. Chuyển hướng về trang chủ');
                navigate('/login');
              } else {
                setSuccess(false);
                setError(response.data.error || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
                console.log('Đặt lại mật khẩu thành công. Chuyển hướng về trang chủ');
                
            }
        } catch (error) {
            console.error(`Lỗi yêu cầu đặt lại mật khẩu: ${error.message}`);
            setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
        }
    };

    const showResetPassForm = () => {
    };
    const showVerificationCodeForm = () => {
    };

    return (
        <div>
            <Banner imgs={img} />
            <div className='body'>
                <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Đặt lại mật khẩu</span></p>
                <section className="section d-flex justify-content-center">
                    {!isResetPasswordFormVisible ? (
                        <div className="container-form-verificationCode">
                            <h2 className="pl-4">Nhập mã xác nhận</h2>
                            <p>
                                Nhập mã xác nhận chúng tôi đã gửi cho bạn.
                            </p>
                            <form onSubmit={handleSubmitCode}>
                                <div className="input-container">
                                    <label>
                                        Mã xác nhận  
                                        <span className="required"> *</span>    
                                    </label>
                                    <input id="inputVerificationCode" type="text" placeholder="Mã xác nhận" value={verificationCode} onChange={handleCodeChange} required />
                                    {verificationCodeError && <div style={{ color: 'red' }}>{verificationCodeError}</div>}</div>  
                                <div className="action-form_bottom">
                                    <input id="submitButton" value="Gửi" type="submit" className="btn btn-success btn-lg" onClick={showResetPassForm} disabled/>
                                </div>
                            </form>
                        </div>
                    ) :(
                        <div className="container-form-reset-pass" >
                            <h2>Nhập mật khẩu mới</h2>
                            <form onSubmit={handleResetPassword}>
                                <div className="input-container">
                                    <label>
                                        Mật khẩu
                                        <span className="required"> *</span>    
                                    </label>
                                    <input type="password" name="password" placeholder="Mật khẩu" onChange={handlePasswordChange} required />
                                </div>  
                                <div className="button-container">
                                    <input type="submit" className="btn" value="Xác nhận"/>
                                    <Link className="btn btn-outline-secondary" onClick={showVerificationCodeForm}>Hủy</Link>
                                </div>
                            </form>
                        </div>
                    )}

                </section>
                
            </div>
            
            <Modal show={show} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Mã xác nhận không chính xác. Vui lòng nhập lại.
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={()=>setShow(false)}>Đồng ý</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default ResetPass;