import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTrashAlt } from 'react-icons/fa'
import './Cart.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { VariantType, useSnackbar } from 'notistack';
import { increaseQuantity, decreaseQuantity, getTotal, removeItem } from "../../features/cartSlice";
const Cart = () => {
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Đã bỏ khóa học khỏi giỏ hàng', { variant });
    };

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.Allcart)
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getTotal()) }, [cart])
    return (<div style={{ margin: '0', backgroundColor: 'white' }}>
        <div style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white' }}>


            <Container className="cart-container">

                <p style={{ alignSelf: 'flex-start', margin: '0px 0 30px 0' }}><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Giỏ hàng</span></p>

                <div style={{ padding: '40px 50px 50px 50px', boxShadow: '0px 4px 30px rgba(19,28,25,0.1)', borderRadius: '25px' }}>
                    <Col>
                        <Row className="cart-header">
                            <Col xs='2'>
                                <p className="table-text">Hình ảnh</p>
                            </Col>
                            <Col xs='3'>
                                <p className="table-text">Tên sản phẩm</p>
                            </Col>
                            <Col xs='2'>
                                <p className="table-text">Đơn giá</p>
                            </Col>
                            <Col>
                                <p className="table-text">Số lượng</p>
                            </Col>
                            <Col>
                                <p className="table-text">Thành tiền</p>
                            </Col>
                            <Col xs='1'>
                                <p className="table-text">Xóa</p>
                            </Col>
                        </Row>
                        {cart.map((item, key) => <Row className="cart-item">
                            <Col xs='2' style={{ padding: '0 12px 0 0' }}>
                                <img src={item.poster} style={{ width: '100%', height: '90px' }} />
                            </Col>
                            <Col xs='3'>
                                <p className="table-text">{item.name}</p>
                            </Col>
                            <Col xs='2'>
                                <p className="table-text cart-item-price">{item.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                            </Col>
                            <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button className='tang-giam' size="sm" onClick={() => dispatch(decreaseQuantity(key))}>-</Button >
                                <p className="table-text cart-item-quatity">{item.quantity}</p>
                                <Button className='tang-giam' size="sm" onClick={() => dispatch(increaseQuantity(key))}>+</Button>
                            </Col>
                            <Col>
                                <p className="table-text cart-item-price">{(item.cost * item.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                            </Col>
                            <Col xs='1' onClick={handleClickVariant("error")}>
                                <FaTrashAlt className="cart-item-trash-icon" onClick={() => { dispatch(removeItem(item)) }} />
                            </Col>
                        </Row>)
                        }
                        <Row style={{ display: 'flex', justifyContent: 'right' }}><p style={{ color: 'black', textAlign: 'right' ,margin:'0'}}>Tổng tiền thanh toán: <p className="cart-total-price">{totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p></p></Row>
                        <Row style={{ display: 'flex', justifyContent: 'right', flexDirection: 'column' }}>

                            <Col style={{display:'flex',justifyContent:'right'}}>
                                <button className='btn-all cart-btn-continue'>TIẾP TỤC MUA HÀNG</button>
                                <button className='btn-all cart-btn-checkout'>THỰC HIỆN THANH TOÁN</button></Col>
                        </Row>

                    </Col>
                </div>

            </Container>

        </div>


    </div>);

}
export default Cart;