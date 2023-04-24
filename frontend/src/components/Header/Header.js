import React, { useState, useEffect } from 'react';
import logo from "./logo.webp"
import category from "./category.png"
import caretRight from "./caretRight.svg"
import searchIcon from "./searchIcon.png"
import cartIcon from "./cartIcon.png"
import {FiShoppingCart, FiSearch} from "react-icons/fi"
import {FaBars, FaSearch} from "react-icons/fa"
import "./Header.css"
import MenuDropDown from '../MenuDropDown/MenuDropDown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { logoutSuccess } from '../../features/userSlice';

const Header = () => {
  const totalCount = useSelector((state)=>state.Allcart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // try {
      // const response = await axios.post("http://localhost:8000/api/users/logout");
      // if(response.status === 200){
        dispatch(logoutSuccess());
        console.log("Đăng xuất thành công!");
      // } else {
    //     console.log("Đăng xuất thất bại!");
    //   }
    // } catch (err) {
    //   console.log("Lỗi đăng xuất!");
    //   console.error(err);
    // }
  };

  return(
      <header>
        <div className='tophead'>
          <div className='container_header'>
            <div className='contact_header'>
              <span>
                Thời gian làm việc: Từ 
                <b> 8h00 </b>
                đến
                <b> 22h00 </b>
                các ngày
              </span>
            </div>
            <div className='contact_header'>
              Hotline: 
              <a className='fone' href='tel:19006750'> 19006750</a>
            </div>
          </div>
        </div>

        <div className='header no-gutters'>
          <div className='container'>
            <div className='row_header'>
              <div className='col-xl-7 col-lg-6 col-12 col-header'>
                <div className='logo_center'>
                  <div className='logo'>
                    <Link to='/' className='logo-wrapper'>
                    <img className='icon' src="//bizweb.dktcdn.net/100/453/393/themes/894913/assets/logo.png?1676281841878" alt="logo Template Udemy" />
                    </Link>
                  </div>
                </div>
                <div className='header_menu clearfix'>
                  <div className='menu-bar-mobile menu-bar-h nav-mobile-button'>
                    <div className='menu-bar'>
                      <img className='dropDown_icon' src={category} />
                      Danh mục
                      <FaBars className="bar-mobile" />
                    </div>
                  </div>
                  <div className='wrap_main menu_mobile'>
                    <nav className='header-nav'>
                      <ul className='item_big'>
                        <li className='nav-item active'>
                          <Link className='a-img' to='/' title='Trang chủ'>
                            <span>Trang chủ</span>
                          </Link>
                        </li>
                        <li className='nav-item level0'>
                          <Link to='ProductList'>
                            Danh sách khóa học
                            <i className='icon-right'></i>
                            <i class="fa-regular fa-angles-right"></i>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <a className='a-img' href='/san-pham-noi-bat' title='Khóa học tiêu biểu'>
                            <span>Khóa học tiêu biểu</span>
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='a-img' href='/tin-tuc' title='Tin tức'>
                            <span>Tin tức</span>
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='a-img' href='/lien-he' title='Liên hệ'>
                            <span>Liên hệ</span>
                          </a>
                        </li>
                        <li className='nav-item'>
                          <a className='a-img' href='/gioi-thieu' title='Giới thiệu'>
                            <span>Giới thiệu</span>
                          </a>
                        </li>
                        <li className='d-lg-none'>
                          <Link to='/account/login'>Đăng nhập</Link>
                        </li>
                        <li className='d-lg-none'>
                          <Link to='/account/register'>Đăng ký</Link>
                        </li>
                        <li className='wishlist_header'>
                          <a href='/san-pham-yeu-thich' title='Yêu thích sản phẩm' rel='nofollow'>
                            Sản phẩm yêu thích 
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='header_search'>
                  <div className='icon-search'>
                    <FiSearch className='search-mobile' />
                  </div>
                  <form action='/search' method='get' className='input-group search-bar' role='search'>
                    <input type='text' name='query' autoComplete='off' placeholder='Tìm kiếm' className='inpit-group-field auto-search' required />
                    <span className='input-group-btn'>
                      <button type='submit' className='btn icon-fallback-text'>
                        <img className='searchIcon' src={searchIcon}/>
                      </button>
                    </span>
                  </form>
                </div>
              </div>

              <div className='col-xl-5 col-lg-6 col-12'>
                <div className='header-right'>
                  <div className='text_header'>
                    <Link to='/ProductList'>Tất cả khóa học</Link>
                  </div>
                  <div className='top-cart-contain'>
                    <div className='mini-cart text-xs-center'>
                      <Link className='img_hover_cart' to="/cart" title='Giỏ hàng'>
                        {/* <img className='cartIcon' src={cartIcon} /> */}
                        <FiShoppingCart />
                        <span className='count_item count_item_pr hidden-count'>{totalCount}</span>
                      </Link>
                    </div>
                  </div>

                  <div className='account_header'>
                  {isLoggedIn ? (
                    <div className='header_menu clearfix'>
                      <div className='menu-bar-mobile menu-bar-h nav-mobile-button'>
                        <button onClick={handleLogout}>Đăng xuất </button>
                      </div>
                      <div className='wrap_main'>
                        <nav className='header-nav'>
                          <ul className='item_big'>
                            ({email})
                            <li>
                              <Link to='/user/profile'>
                                Hồ sơ
                              </Link>
                            </li>
                            <li>
                              <Link to='ProductList'>
                                Khóa học của tôi
                              </Link>
                            </li>
                            <li>
                              <button onClick={handleLogout}>Đăng xuất</button>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Link to='/account/register' className='btns'>Đăng ký</Link>
                      <Link to='/account/login'>Đăng nhập</Link>
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>)
};
export default Header;