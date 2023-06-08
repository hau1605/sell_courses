import React, { useState } from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import User from "./User";
import './UserPassword.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FullPageLoader from "../FullPageLoader/FullPageLoader";
import { BASE_URL } from "../../config/config";
const UserPassword=()=>{
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const email = useSelector((state) => state.user.email);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'oldPassword') {
            setOldPassword(value);
            console.log("oldPass: ", value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
            console.log("newPass: ", value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
            console.log("confirmNewPass: ", value);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        if (newPassword !== confirmPassword) {
            console.log("Mật khẩu nhập lại không trùng khớp");
            setError('Mật khẩu nhập lại không trùng khớp');
            setIsLoading(false);
            return;
        }
        try {
            console.log("Tài khoản: ",email);
            console.log(newPassword);
            console.log(confirmPassword);
            const response = await axios.put(`${BASE_URL}/api/users/${email}/change-password`, { oldPassword, newPassword });
            console.log("response: ", response);
            if(response.status === 200) {
                console.log("Đổi mật khẩu thành công");
                setShow(true);
                setIsLoading(false);
            } else {
                console.log("Mật khẩu cũ không chính xác", response.data.error);
                setError('Mật khẩu cũ không chính xác');
                setIsLoading(false);
            }
        } catch (err) {
            console.log("Lỗi yêu cầu đổi mật khẩu: ",err);
            setShow(false);
            setIsLoading(false);
            setError(`${err.response.data.error}`);
        }
    }

    const handleModal = async (e) => {
        setShow(false);
        setIsLoading(false);
        navigate("/user/profile");
    }

    return(
            <Container className="container-user">
                {isLoading && <FullPageLoader/>}
                <Col className="container-user_navbar" md={3}>
                    <User page="user-password"></User>
                </Col>
                <Col className="container-user_form">
                    <div className="container-form_change-password">
                        <form onSubmit={handleSubmit}>
                            <h3>Đổi mật khẩu</h3>
                            <h6>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</h6>
                            <table>
                                <tr>
                                    <td>
                                        <label htmlFor="oldPassword">
                                            Mật khẩu cũ
                                            <span className="required text-danger">*</span>:
                                        </label>
                                    </td>
                                    <td><input required type="password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="newPassword">
                                            Mật khẩu mới
                                            <span className="required text-danger">*</span>: 
                                        </label>
                                    </td>
                                    <td><input required type="password" id="newPassword" name="newPassword" value={newPassword} onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="confirmPassword">
                                            Nhập lại mật khẩu mới
                                            <span className="required text-danger">*</span>:
                                        </label>
                                    </td>
                                    <td>
                                        <input required type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                                    </td> 
                                </tr>
                                <tr>
                                    <td colspan="2">{error && <div style={{ color: 'red', width:'100%' }}>{error}</div>}</td>
                                </tr>
                                <tr>
                                    <td><button type="submit">Đổi mật khẩu</button></td>
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
                        Bạn đã đổi mật khẩu thành công
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="success" onClick={handleModal}>Đồng ý</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
    );

}
export default UserPassword;