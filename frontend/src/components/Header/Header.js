import React, { useEffect } from 'react';
import logo from "./logo.webp"
import category from "./category.png"
import caretRight from "./caretRight.svg"
import searchIcon from "./searchIcon.png"
import cartIcon from "./cartIcon.png"
import "./Header.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const totalCount=useSelector((state)=>state.Allcart.totalQuantity);
 
 
  return(
      <header>
        <div className='tophead'>
          <div className='container'>
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
                    <Link to='/'>
                    <img className='icon' src="//bizweb.dktcdn.net/100/453/393/themes/894913/assets/logo.png?1676281841878" alt="logo Template Udemy" />
                    </Link>
                  </div>
                </div>
                <div className='header_menu clearfix'>
                  <div className='menu-bar-mobile menu-bar-h nav-mobile-button'>
                    <div className='menu-bar'>
                      <img className='dropDown_icon' src={category} />
                      Danh mục
                    </div>
                  </div>
                  <div className='wrap_main menu-mobile'>
                    <nav className='header-nav'>
                      <ul className='item_big'>
                        <li className='nav-item active'>
                          <a className='a-img' href='/' title='Trang chủ'>
                            <span>Trang chủ</span>
                          </a>
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
                          <a href='/account/login'>Đăng nhập</a>
                        </li>
                        <li className='d-lg-none'>
                          <a href='/account/register'>Đăng ký</a>
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
                    
                  </div>
                  <form action='/search' method='get' className='input-group search-bar' role='search'>
                    <input type='text' name='query' autoComplete='off' placeholder='Tìm kiếm' className='inpit-group-field auto-search' required />
                    <span className='input-group-btn'>
                      <button type='submit' className='btn icon-fallback-text'>
                        <img className='icon-search' src={searchIcon}></img>
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
                      <Link className='img_hover_cart' to='/Cart' title='Giỏ hàng'>
                        <img className='cartIcon' src={cartIcon} />
                        <span className='count_item count_item_pr hidden-count'>{totalCount}</span>
                      </Link>
                    </div>
                  </div>

                  <div className='account_header'>
                    <a href='/account/register' className='btns'>Đăng ký</a>
                    <a href='/account/login'>Đăng nhập</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='header_left'>
              <Link to='/'><img className='icon' src={logo} />  </Link>    
          </div>
          <div className='header_center'>
            <ul className='header_menu'>
              <div className='dropDown_header'>
                  <div className='dropDown_header_menu'>
                    <img className='dropDown_icon' src={category} />
                    <a>Danh mục</a>
                  </div>
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
          </div> */}
        </div>
      </header>)
};
export default Header;