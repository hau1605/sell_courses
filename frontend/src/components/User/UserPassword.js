import React, { useState } from "react";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import User from "./User";
import './UserPassword.css';

const UserPassword=()=>{
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'oldPassword') {
        setOldPassword(value);
        } else if (name === 'newPassword') {
        setNewPassword(value);
        } else if (name === 'confirmPassword') {
        setConfirmPassword(value);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const response = await axios.post('http://localhost:8000/api/change-password', {password});
            
        // } catch (err) {

        // }
        if (newPassword !== confirmPassword) {
            setError('Mật khẩu nhập lại không trùng khớp');
            return;
        }
        axios.put('/api/change-password', { oldPassword, newPassword })
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                alert(error.response.data.error);
            });
    }

    return(
            <Container className="container-user">
                <Col className="container-user_navbar" md={3}>
                    <User page="user-password"></User>
                </Col>
                <Col className="container-user_form">
                    <div className="container-form_change-password">
                        {error && <div>{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <h3>Đổi mật khẩu</h3>
                            <h6>Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</h6>
                            <table>
                                <tr>
                                    <td><label htmlFor="oldPassword">Mật khẩu cũ:</label></td>
                                    <td><input type="password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={handleChange} /></td>
                                </tr>
                                {/* <tr>
                                    <td><Link to="/forgot-password">Quên mật khẩu</Link></td>
                                </tr> */}
                                <tr>
                                    <td><label htmlFor="newPassword">Mật khẩu mới:</label></td>
                                    <td><input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={handleChange} /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="confirmPassword">Nhập lại mật khẩu mới:</label></td>
                                    <td><input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={handleChange} /></td>
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
                        Email chưa được đăng ký. Vui lòng sử dụng email khác. 
                        Hoặc <Link to='/register'>đăng ký ngay</Link>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button  variant="success" onClick={()=>setShow(false)}>Đồng ý</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
    );

}
export default UserPassword;