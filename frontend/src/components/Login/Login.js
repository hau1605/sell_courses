import React, { useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { setEmailResetPassword } from "../../features/userSlice";
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../features/userSlice';
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import Cookies from 'js-cookie';
import UserDataService from '../../services/UserDataService';
import "./Login.css";
import { BASE_URL } from "../../config/config";

const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRecoverPasswordFormVisible, setIsRecoverPasswordFormVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [show, setShow] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailPattern.test(emailValue)) {
            setEmailError('Email không hợp lệ');
        } else {
            setEmailError('');
        }
        console.log('Email đã nhập: ', emailValue);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const cookieValue = Cookies.get('token');
            const response = await UserDataService.postLogin(email, password, cookieValue);
            console.log("response: ", response);
            if (response.status === 200) {
                console.log("response.data.user: ", response.data.user)
                const userData = {
                    userId: response.data.user.userData_id,
                    email: response.data.user.userData_email,
                    userName: response.data.user.userData_name
                }
                console.log('Đăng nhập thành công:', response.data.message);
                const expirationDate = new Date();
                expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000)); // 10 phút
                Cookies.set('token', response.data.token, { expires: expirationDate });
                
                console.log("userData: ", userData)
                dispatch(loginSuccess(userData));
                setIsLoading(false);
                setShow(false);
                navigate("/");
            } else {
                console.error('Lỗi đăng nhập:', response.data.error);
                setShow(true);
                setIsLoading(false);
            }
        } catch (error) {
            if (error.response) {
                console.error('Lỗi đăng nhập có res:', error.response.data.error);
                setShow(true);
                setIsLoading(false);
            } else {
                console.error('Lỗi đăng nhập không có res:', error.message);
                setShow(true);
                setIsLoading(false);
            }
        }
    };
    
    const handleForgotPassword = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/api/forgot-password`, { email });
            if (response.status === 200) {
                setShowErr(false)
                dispatch(setEmailResetPassword(email));
                setIsLoading(false);
                navigate('/account/reset-password');
                console.log('Đã gửi mail xác nhận');
            } else {
                setShowErr(true)
                setIsLoading(false);
                setError(response.data.error || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
              }
        } catch (error) {
            setShowErr(true)
            console.error(`Lỗi yêu cầu đặt lại mật khẩu: ${error.message}`);
            setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
            setIsLoading(false);
        }
    };

    const handleSubmitModal = async (event) => {
        setShow(false);
        setIsLoading(false);
    }
    const handleSubmitModalErr = async (event) => {
        setShowErr(false);
        setIsLoading(false);
        setIsRecoverPasswordFormVisible(false);
    }

    // Hàm ẩn form phục hồi mật khẩu
    const showLoginForm = () => {
        setIsRecoverPasswordFormVisible(false);
        console.log("Hiển thị form lấy lại mật khẩu: false")
    };
    // Hàm hiển thị form phục hồi mật khẩu
    const showRecoverPasswordForm = () => {
        setIsRecoverPasswordFormVisible(true);
        console.log("Hiển thị form lấy lại mật khẩu: true")
    };
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    return(
        <div>
            <Banner imgs={img} />
            <div className='body'>
            {isLoading && <FullPageLoader/>}
                <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Đăng nhập</span></p>
                <section className="section d-flex justify-content-center">
                    {!isRecoverPasswordFormVisible ? (
                        <div className="container-form-login">
                            <h2 className="title text-center mb-4">Đăng nhập</h2>
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-container">
                                        <label>
                                            Email  
                                            <span className="required"> *</span>    
                                        </label>
                                        <input type="email" message="hihi" name="email" placeholder="Email" onChange={handleEmailChange} required />
                                        {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

                                    </div>
                                    <div className="input-container">
                                        <label>
                                            Mật khẩu 
                                            <span className="required"> *</span>    
                                        </label>
                                        <input type="password" name="pass" placeholder="Mật khẩu" onChange={handlePasswordChange} required />
                                    </div>
                                    <div className="button-container">
                                        <input className="btn" type="submit" value="Đăng nhập"/>
                                    </div>
                                    <p>
                                        Bạn quên mật khẩu? 
                                        <Link className="btn-link-style text-info" onClick={showRecoverPasswordForm}> Lấy lại tại đây</Link>
                                    </p>
                                    <p>
                                        Bạn chưa có tài khoản? 
                                        <Link to="/account/register" className="btn-link-style text-info"> Đăng ký ngay</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    ) : (
                        <div className="container-form-recover-pass">
                            <h2 className="pl-4">Đặt lại mật khẩu</h2>
                            <p>
                                Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật khẩu
                            </p>
                            <form>
                                <div className="input-container">
                                    <label>
                                        Email  
                                        <span className="required"> *</span>    
                                    </label>
                                    <input type="email" name="email" placeholder="Email" onChange={handleEmailChange} required />
                                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}

                                </div>  
                                <div className="action-form_bottom">
                                    <button type="button" className="btn btn-success btn-lg" onClick={handleForgotPassword}>Gửi</button>
                                    <Link className="btn btn-outline-secondary" onClick={showLoginForm}>Hủy</Link>
                                </div>
                            </form>
                        </div>
                    )}
                </section>
            </div>

            <Modal show={show} onHide={handleSubmitModal} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thông tin tài khoản hoặc mật khẩu chưa chính xác. Vui lòng nhập lại.  
                    Hoặc <Link to='/register'>đăng ký ngay</Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={handleSubmitModal}>Đồng ý</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showErr} onHide={handleSubmitModalErr} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tài khoản chưa được đăng ký, đăng nhập bằng tài khoản khác.
                    Hoặc <Link to='/register'>đăng ký ngay</Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={handleSubmitModalErr}>Đồng ý</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default Login;