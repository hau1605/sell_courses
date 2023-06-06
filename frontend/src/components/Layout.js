import React from 'react';
import { Layout, Space } from 'antd';
import { Routes, Route, Navigate,  } from "react-router-dom";
import { useSelector } from 'react-redux';
import Header from './Header/Header';
import HomePage from "./HomePage/HomePage"
import ProductDetail from './ProductDetail/ProductDetail';
import Login from './Login/Login';
import Register from './Register/Register';
import ProductList from './ProductList/ProductList';
import CheckOut from './CheckOut/CheckOut';
import Cart from './Cart/Cart';
import Contact from './Contact/Contact';
import ResetPass from './ResetPass/ResetPass';
import MyProducts from './User/MyProducts/MyProducts';
import UserAccount from "./User/UserAccount";
import UserPassword from "./User/UserPassword";
import { SnackbarProvider } from 'notistack';
import Footer from './Footer/Footer';
import VideoPage from './Video/VideoPage';
import SearchPage from './SearchPage/SearchPage';
import TokenExpirationChecker from '../TokenExpirationChecker/TokenExpirationChecker';
import { Scrollbar } from 'react-scrollbars-custom';

const WebLayout = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return(
    <SnackbarProvider maxSnack={4} autoHideDuration={1500}
    iconVariant={{
      success: '🛒',
      error: '🗑️',
      warning: '⚠️',
      info: 'ℹ️',
    }}
    >
      <Scrollbar style={{ position: "unset",width: '100%', height: '100%' }}>
        <TokenExpirationChecker/>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
          size={[0, 48]}
        >
          <Layout style={{
            height: '100vh',
            margin: '0',
          }}>
            <Header style={{ zIndex: 1 }} >Header</Header>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/ProductDetail/:id" element={<ProductDetail />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/SearchPage/:_searchName' element={<SearchPage />} />
              <Route path="/ProductList/:categorie/" element={<ProductList />} />
              <Route path='/order' element={!isLoggedIn? <Navigate to={'/account/login'} replace /> : <CheckOut />} />
              <Route path="/ProductList/" element={<ProductList />} />
              <Route path="/account/login" element={isLoggedIn? <Navigate to={'/'} replace /> : <Login />} />
              <Route path="/account/register" element={isLoggedIn? <Navigate to={'/'} replace /> : <Register />} />
              <Route path="/account/reset-password" element={isLoggedIn? <Navigate to={'/'} replace /> : <ResetPass />} />
              <Route path="/user" element={!isLoggedIn? <Navigate to={'/account/login'} replace /> : <UserAccount />} />
              <Route path="/user/profile" element={!isLoggedIn? <Navigate to={'/account/login'} replace /> : <UserAccount/>} />
              <Route path="/user/password" element={!isLoggedIn? <Navigate to={'/account/login'} replace /> : <UserPassword/>} />
              <Route path="/user/my-course" element={!isLoggedIn? <Navigate to={'/account/login'} replace /> : <MyProducts/>} />
              <Route path="/user/my-course/:id" element={!isLoggedIn? <Navigate to={'/account/login'} replace /> : <VideoPage/>} />
            </Routes>
            <Footer/>
          </Layout>
        </Space>
      </Scrollbar>
    </SnackbarProvider>
  )
};
export default WebLayout;