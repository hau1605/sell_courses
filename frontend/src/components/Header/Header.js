import React, { useState, useEffect } from 'react';
import logo from "./logo.webp"
import category from "./category.png"
import caretRight from "./caretRight.svg"
import searchIcon from "./searchIcon.png"
import cartIcon from "./cartIcon.png"
import { FiShoppingCart, FiSearch } from "react-icons/fi"
import { HiUserCircle } from "react-icons/hi"
import { FaBars, FaSearch } from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import "./Header.css"
import MenuDropDown from '../MenuDropDown/MenuDropDown';
import MenuMobile from '../MenuMobile/MenuMobile';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { logoutSuccess } from '../../features/userSlice';
const Header = () => {
  const totalCount = useSelector((state) => state.Allcart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
        dispatch(logoutSuccess());
        console.log("Đăng xuất thành công!");
        navigate('/');
  }

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
                          <Link to='/ProductList'>
                            Danh sách khóa học
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link className='a-img' to='/tin-tuc' title='Tin tức'>
                            <span>Tin tức</span>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link to='/Contact'>
                            <span>Liên hệ</span>
                          </Link>
                        </li>
                        <li className='nav-item'>
                          <Link className='a-img' to='/gioi-thieu' title='Giới thiệu'>
                            <span>Giới thiệu</span>
                          </Link>
                        </li>
                        <li className='d-lg-none'>
                          <Link to='/login'>Đăng nhập</Link>
                        </li>
                        <li className='d-lg-none'>
                          <Link to='/register'>Đăng ký</Link>
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
                        <FiShoppingCart />
                        <span className='count_item count_item_pr hidden-count'>{totalCount}</span>
                      </Link>
                    </div>
                  </div>

                  <div className='account_header'>
                    {isLoggedIn ? (
                      <div className='header_menu clearfix' style={{display:"flex", alignItems: "center"}}>
                        <div className='btns'>
                          <a href='/user/profile' className='user-account'><HiUserCircle /> Le Binh</a>
                        </div>
                        <div className='account-action'>
                                <Link className='user-profile' to='/user/profile'>
                                  Tài khoản
                                </Link>
                                <a className='logout-action' onClick={handleLogout}>Đăng xuất</a>
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