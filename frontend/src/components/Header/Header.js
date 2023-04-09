import React from 'react';
import logo from "./logo.webp"
import "./Header.css"
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
const Header = () => (

      <div className='header'>
        <div className='header_left'>
            <Link to='/'><img className='icon' src={logo} />  </Link>    
        </div>
        <div className='header_center'>
          <ul className='header_menu'>
            <div className='dropDown_header'>
                <Link to='/ProductList'>
                <button className='dropDown_button'>Danh mục</button>
                </Link>
                  <div className='dropDown_list'>
                    <a href='#'>Trang chủ</a>
                    <a href='#'>Danh sách khóa học</a>
                    <a href='#'>Khóa học tiêu biểu</a>
                    <a href='#'>Tin tức</a>
                    <a href='#'>Liên hệ</a>
                    <a href='#'>Giới thiệu</a>
                    <a href='#'>Sản phẩm yêu thích</a>
                  </div>
            </div>
            <li><a href='#'>Tất cả khóa học</a></li>
          </ul>
        </div>
        <div className='header_right'>
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
        </div>
      </div>
);
export default Header;