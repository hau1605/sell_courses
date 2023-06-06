import React, { useState, useEffect } from 'react';
import category from "./category.png"
import searchIcon from "./searchIcon.png"
import cartIcon from "./cartIcon.png"
import {FiShoppingCart, FiSearch} from "react-icons/fi"
import {FaBars, FaUserCircle, FaRegUserCircle} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./Header.css"
import { useNavigate} from 'react-router-dom';
import { logoutSuccess } from '../../features/userSlice';
import Cookies from 'js-cookie';

const Header = () => {
  const totalCount = useSelector((state) => state.Allcart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const email = useSelector((state) => state.user.email);
  const name = useSelector((state) => state.user.name);
  const [_searchName,_setSearchName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
        dispatch(logoutSuccess());
        console.log("Đăng xuất thành công!");
        Cookies.remove('token');
        navigate('/');
  }
  const handleInputChange = (event) => {
    _setSearchName(event.target.value);
    console.log(_searchName)
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
                        {isLoggedIn ? (<>
                        <li className='d-lg-none'>
                          <Link to='/user/profile'>Hồ sơ</Link>
                        </li>
                        <li className='d-lg-none'>
                          <Link to='/user/my-course'>Khóa học của tôi</Link>
                        </li>
                        <li className='d-lg-none'>
                          <a style={{color:'red',}} id="btn_logout" onClick={handleLogout}>Đăng xuất</a>
                        </li>
                        </>) : (<>
                          <li className='d-lg-none'>
                            <Link to='/account/login'>Đăng nhập</Link>
                          </li>
                          <li className='d-lg-none'>
                            <Link to='/account/register'>Đăng ký</Link>
                          </li>
                        </>)}
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='header_search'>
                  <div className='icon-search'>
                    <FiSearch className='search-mobile' />
                  </div>
                  <form action='/search' method='get' className='input-group search-bar' role='search'>
                    <input type='text' name='query' onChange={handleInputChange} autoComplete='off' placeholder='Tìm kiếm' className='inpit-group-field auto-search' required />
                    <span className='input-group-btn'>
                      <Link to={'/SearchPage/'+_searchName}
                       >
                      <button type='submit' className='btn icon-fallback-text'>
                        <img className='searchIcon' src={searchIcon}/>
                      </button>
                      </Link>
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
                      <div className='header_menu clearfix'>
                        <a style={{fontSize: "14px"}}><FaRegUserCircle className='fa-user-cicle' style={{marginLeft: "35px", fontSize: "34px"}}/></a>
                        
                        <div className='wrap_main'>
                          <nav className='header-nav'>
                            <ul className='item_big'>
                              <li>
                                <Link to='/user/profile'>
                                  Hồ sơ
                                </Link>
                              </li>
                              <li>
                                <Link to='/user/my-course'>
                                  Khóa học của tôi
                                </Link>
                              </li>
                              <li>
                                <a id="btn_logout" onClick={handleLogout}>Đăng xuất</a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    ) : (
                      <div className='account_header-none'>
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
