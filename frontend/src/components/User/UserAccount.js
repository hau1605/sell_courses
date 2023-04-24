import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from 'react-bootstrap';
import User from "./User";

import "./UserAccount.css";

const UserAccount=()=>{
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
        setError('Mật khẩu nhập lại không trùng khớp');
        return;
        }

        // Gọi API để đổi mật khẩu và xử lý kết quả
    }
    return(
            <Container className="container-user">
                <Col md={3}>
                    <User page="user-account"></User>
                </Col>
                <Col>
                    <div className="container-form_user-account">
                            {error && <div>{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <h3>Hồ Sơ Của Tôi</h3>
                                <h6>Quản lý thông tin hồ sơ</h6>
                                <table>
                                    <tr>
                                        <td><label htmlFor="email">Email:</label></td>
                                        <td><input type="email" id="email" name="email" disabled/></td>
                                    </tr>
                                    {/* <tr>
                                        <td><Link to="/forgot-password">Quên mật khẩu</Link></td>
                                    </tr> */}
                                    <tr>
                                        <td><label htmlFor="name">Tên:</label></td>
                                        <td><input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="gender">Giới tính:</label></td>
                                        <td>
                                            <input type="radio" id="male" name="gender" value="Nam"/>
                                            <label for="male"> &ensp;Nam&emsp;&ensp;</label>
                                            <input type="radio" id="female" name="gender" value="Nữ"/>
                                            <label for="female"> &ensp;Nữ&emsp;&ensp;</label>
                                            <input type="radio" id="other" name="gender" value="Khác"/>
                                            <label for="other"> &ensp;Khác</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="date">Ngày tạo tài khoản:</label></td>
                                        <td><input type="date" id="date" name="date" disabled/></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}><button type="submit">Lưu</button></td>
                                    </tr>
                                </table>
                            </form>
                        </div>
                </Col>
        </Container>
    );

}
export default UserAccount;