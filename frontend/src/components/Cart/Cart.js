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
    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Đã bỏ khóa học khỏi giỏ hàng', { variant });
    };

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.Allcart)
    const dispatch = useDispatch();

    useEffect(() => { dispatch(getTotal()) }, [cart])
    return (<div style={{ margin: '0', backgroundColor: 'white' }}>
        <div  style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: 'white' ,padding:"30px 15px"}}>

            <p className="cart-breadcum"><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Giỏ hàng</span></p>

            <div style={{ padding: '40px 30px 40px 30px', boxShadow: '0px 4px 30px rgba(19,28,25,0.1)', borderRadius: '25px' }}>
                <Col className="cart-container-destop" style={{minWidth:'670px'}}>
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
                    {cart.map((item, key) => <Row className="cart-item" style={{display:'flex', justifyContent:'center',}}>
                        <Col xs='2' style={{ padding: '0 12px 0 0' }}>
                            <img src={item.poster} style={{ width: '100%', height: '90px' }} />
                        </Col>
                        <Col xs='3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p style={{textAlign:'center'}} className="table-text">{item.name}</p>
                        </Col>
                        <Col xs='2' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p className="table-text cart-item-price">{item.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                        </Col>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button className='tang-giam' size="sm" onClick={() => dispatch(decreaseQuantity(key))}>-</Button >
                            <p className="table-text cart-item-quatity">{item.quantity}</p>
                            <Button className='tang-giam' size="sm" onClick={() => dispatch(increaseQuantity(key))}>+</Button>
                        </Col>
                        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <p className="table-text cart-item-price">{(item.cost * item.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                        </Col>
                        <Col xs='1' onClick={handleClickVariant("error")} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FaTrashAlt className="cart-item-trash-icon" onClick={() => { dispatch(removeItem(item)) }} />
                        </Col>
                    </Row>)
                    }
                    <Row style={{ display: 'flex', justifyContent: 'right' }}><p style={{ color: 'black', textAlign: 'right', margin: '0' }}>Tổng tiền thanh toán: <p className="cart-total-price">{totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p></p></Row>
                    <Row style={{ display: 'flex', justifyContent: 'right', flexDirection: 'column' }}>

                        <Col style={{ display: 'flex', justifyContent: 'right' }}>
                            <button className='btn-all cart-btn-continue'>TIẾP TỤC MUA HÀNG</button>
                            <button className='btn-all cart-btn-checkout'>THỰC HIỆN THANH TOÁN</button></Col>
                    </Row>

                </Col>
                <Col className="cart-container-mobile">
                    {cart.map((item, key) => <Row className="cart-item-mb">
                        <Col xs='4' style={{ padding: '0 12px 0 0' }}>
                            <img src={item.poster} style={{ width: '100%', height: '85px' }} />
                        </Col>
                        <Col xs='4' style={{ display: 'flex', margin: '0', padding: '0' }}>
                            <Row xs='12' style={{ display: 'flex', alignContent: 'space-evenly' }}>
                                <Row xs='12' >
                                    <p className="table-text cart-item-name">{item.name}</p>
                                </Row>
                                <Row >
                                    <Col style={{ display: 'flex', justifyContent: 'left', alignItems: 'left' }}>
                                        <Button style={{ padding: '2px 8px' }} className='tang-giam' size="sm" onClick={() => dispatch(decreaseQuantity(key))}>-</Button >
                                        <p style={{ margin: '0 4px' }} className="table-text cart-item-quatity">{item.quantity}</p>
                                        <Button style={{ padding: '2px 8px' }} className='tang-giam' size="sm" onClick={() => dispatch(increaseQuantity(key))}>+</Button>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                        <Col xs='3' style={{ display: 'flex' }}>
                            <Row>
                                <Col style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
                                    <p className="table-text cart-item-price">{item.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs='1' style={{ margin: 'auto' }} onClick={handleClickVariant("error")}>
                            <FaTrashAlt style={{ display: 'flex', fontSize: "20px", margin: 'auto', width: '20px', height: '20px' }} className="cart-item-trash-icon" onClick={() => { dispatch(removeItem(item)) }} />
                        </Col>
                    </Row>)
                    }
                    <Row style={{ display: 'flex', justifyContent: 'left' }}><p style={{ color: 'black', textAlign: 'center', margin: '10px 0 0' }}>Tổng tiền thanh toán: <p className="cart-total-price">{totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p></p></Row>
                    <Row style={{ display: 'flex', justifyContent: 'right', flexDirection: 'row' }}>

                        <Row style={{ display: 'flex',justifyContent:'center',margin:'auto' }}>
                            <button style={{margin:'auto' }} className='btn-all cart-btn-continue'>TIẾP TỤC MUA HÀNG</button>
                            <button className='btn-all cart-btn-checkout'>THỰC HIỆN THANH TOÁN</button></Row>
                    </Row>
                </Col>
            </div>


        </div>


    </div>);

}
export default Cart;