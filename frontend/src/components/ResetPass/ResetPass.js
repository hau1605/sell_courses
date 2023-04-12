import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import './ResetPass.css'

const ResetPass = () => {


    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']

    return (
        <div>
            <Banner imgs={img} />
            <div className='body'>
                <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Đặt lại mật khẩu</span></p>
                <section className="container-form">
                    <div className="container-form-recover-pass">
                        <h2>Nhập mật khẩu mới</h2>
                        <form>
                            <div className="input-container">
                                <label>
                                    Mật khẩu
                                    <span className="required"> *</span>    
                                </label>
                                <input type="password" name="password" placeholder="Mật khẩu" required />
                            </div>  
                            <div className="button-container">
                                <input type="submit" className="btn" value="Xác nhận"/>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default ResetPass;