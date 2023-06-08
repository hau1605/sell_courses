import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { logoutSuccess } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {base_url} from '../config/config'
const TokenExpirationChecker = () => {
  const [isTokenExpired, setTokenExpired] = useState(false);
  const [show, setShow] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const checkTokenExpiration = async () => {
        try {
          console.log("isLoggedIn: ", isLoggedIn);
          console.log("Token from Cookie: ", Cookies.get('token'));
          const response = await axios.get(`${base_url}/api/check-token`, {
            headers: {
              Authorization: Cookies.get('token'),
            },
          });

          console.log("Status: ", response.status);
          if (response.status === 200 || response.status === 203) {
            setShow(true);
            setTokenExpired(true);
          } else {
            setTokenExpired(false);
          }
        } catch (error) {
          console.error('Lỗi kiểm tra token hết hạn:', error);
          setShow(true);
        }
      };

      const interval = setInterval(() => {
        checkTokenExpiration();
      }, 6000000); // 100 minute

      return () => {
        clearInterval(interval);
      };
    }
  }, [isLoggedIn, show]);

  const handleSubmitModal = async (event) => {
    setShow(false);
    dispatch(logoutSuccess());
    Cookies.remove('token');
    setTokenExpired(false);
    console.log("Đăng xuất thành công!");
    navigate('/');
  };

  if (isTokenExpired) {
    return (
      <Modal show={show} onHide={() => {setShow(false); dispatch(logoutSuccess());}}>
        <Modal.Header closeButton onHide={() => {dispatch(logoutSuccess());}}>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmitModal}>Đồng ý</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return null;
};

export default TokenExpirationChecker;
