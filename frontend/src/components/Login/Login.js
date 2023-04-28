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
import ClipLoader from 'react-spinners/ClipLoader';
import "./Login.css";
const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRecoverPasswordFormVisible, setIsRecoverPasswordFormVisible] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [show, setShow] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        // Kiểm tra tính hợp lệ của email
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i; // Regex để kiểm tra email
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
            const response = await axios.post('http://localhost:8000/api/users/login', {email, password});
            if (response.status === 200) {
                console.log('Đăng nhập thành công:', response.data.message);
                setShow(false);
                dispatch(loginSuccess(email));
                console.log(email);
                setIsLoading(false);
                navigate("/");
            } else {
                console.error('Lỗi đăng nhập:', response.data.error);
                setShow(true);
            }
        } catch (error) {
            if (error.response) {
                console.error('Lỗi đăng nhập có res:', error.response.data.error);
                setShow(true);
            } else {
                console.error('Lỗi đăng nhập không có res:', error.message);
                setShow(true);
            }
        }
    };
    
    const handleForgotPassword = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/users/forgot-password', { email });
            if (response.status === 200) {
                // Nếu yêu cầu đặt lại mật khẩu thành công
                setSuccess(true);
                setError('');
                dispatch(setEmailResetPassword(email));
                setIsLoading(false);
                navigate('/account/reset-password');
                console.log('Đã gửi mail xác nhận');
              } else {
                // Nếu yêu cầu đặt lại mật khẩu không thành công
                setSuccess(false);
                setError(response.data.error || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
              }
        } catch (error) {
            console.error(`Lỗi yêu cầu đặt lại mật khẩu: ${error.message}`);
            // Xử lý lỗi từ server
            // (ví dụ: hiển thị thông báo lỗi cho người dùng)
            setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
            setIsLoading(false);
        }
    };
    // Hàm để ẩn form phục hồi mật khẩu
    const showLoginForm = () => {
        setIsRecoverPasswordFormVisible(false);
        console.log("Hiển thị form lấy lại mật khẩu: false")
    };
    // Hàm để hiển thị form phục hồi mật khẩu
    const showRecoverPasswordForm = () => {
        setIsRecoverPasswordFormVisible(true);
        console.log("Hiển thị form lấy lại mật khẩu: true")
    };
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    return(
        <div>
            <Banner imgs={img} />
            <div className='body'>
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
                                    {!isLoading ? 
                                    <button type="button" className="btn btn-success btn-lg" onClick={handleForgotPassword}>Gửi</button>
                                    : 
                                    <button type="button" className="btn btn-success btn-lg" style={{padding:"8.5px 22px"}}><ClipLoader color="white" size={15}/></button>
                                    }
                                    <Link className="btn btn-outline-secondary" onClick={showLoginForm}>Hủy</Link>
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
                    Thông tin tài khoản hoặc mật khẩu chưa chính xác. Vui lòng nhập lại.  
                    Hoặc <Link to='/register'>đăng ký ngay</Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="success" onClick={()=>setShow(false)}>Đồng ý</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );

}
export default Login;